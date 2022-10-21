import { Combobox } from '@headlessui/react'
import { ChangeEvent } from 'react'
import { type Libraries, useGoogleMapsScript } from 'use-google-maps-script'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

interface ISearchBoxProps {
  onSelectAddress: (
    location_name: string,
    location_lat: number | null,
    location_lng: number | null,
  ) => void
  defaultValue: string
}

const libraries: Libraries = ['places']

export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    libraries,
  })

  if (!isLoaded) return null
  if (loadError) return <div>Error loading</div>

  return <ReadySearchBox onSelectAddress={onSelectAddress} defaultValue={defaultValue} />
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value === '') {
      onSelectAddress('', null, null)
    }
  }

  const handleSelect = async (address: string) => {
    setValue(address, false)
    clearSuggestions()

    try {
      const results = await getGeocode({ address })
      const { lat, lng } = await getLatLng(results[0])
      onSelectAddress(address, lat, lng)
    } catch (error) {
      console.error(`😱 Error:`, error)
    }
  }

  return (
    <div className='relative'>
      <Combobox onChange={handleSelect} value={value}>
        <Combobox.Input
          onChange={handleChange}
          placeholder='場所 📍'
          id='location'
          value={value}
          disabled={!ready}
          className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
          autoComplete='off'
        />
        <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
          {status !== 'ZERO_RESULTS' && status !== 'OK' && (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Loading...
            </div>
          )}
          {status === 'ZERO_RESULTS' && (
            <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          )}
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <Combobox.Option
                key={place_id}
                value={description}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-4 pr-4 ${
                    active ? 'bg-blue-600 text-white' : 'text-gray-900'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {description}
                    </span>
                  </>
                )}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox>
    </div>
  )
}
