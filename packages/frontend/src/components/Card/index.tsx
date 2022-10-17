import React from "react";


type ICardProps = {
  name: string
  url: string
}

const Card: React.FC<ICardProps> = ({ name, url }) => {
  return (
    <div className='min-w-fit rounded overflow-x-scroll mx-2'>
      <a
        href='#'
        className='group h-32 w-32 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3'
      >
        <img
          src={url}
          loading='lazy'
          alt={name}
          className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
        />
      </a>

      <div className='flex justify-between items-start gap-2 px-2'>
        <div className='flex flex-col'>
          <a
            href='#'
            className='text-gray-800 hover:text-gray-500 text-xs truncate font-bold transition duration-100'
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)
