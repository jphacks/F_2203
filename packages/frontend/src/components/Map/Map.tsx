import React, { useEffect } from "react";
import {type GetUserPostsByUidQuery } from '@/generated/graphql'

const key = process.env.NEXT_PUBLIC_MAPBOX_SUBSCRIPTION_KEY as string

type Posts = GetUserPostsByUidQuery['posts']

type IMap = {
  posts: Posts
}


const Map: React.FC<IMap> = ({posts}) => {
  const loadScript = (url: string, onload: () => void) => {
    if (!Array.from(document.scripts).find((s) => s.src == url)) {
      const head = document.getElementsByTagName("head")[0] as HTMLElement
      const script = document.createElement("script")
      script.setAttribute("type", "text/javascript")
      script.setAttribute("src", url)
      script.addEventListener("load", onload)

      head.appendChild(script)
    }
  }

  const loadCss = (url: string) => {
    if (!Array.from(document.getElementsByTagName("link")).find((l) => l.href == url)) {
      const head = document.getElementsByTagName("head")[0] as HTMLElement
      const link = document.createElement("link")
      link.setAttribute("rel", "stylesheet")
      link.setAttribute("href", url)

      head.appendChild(link)
    }
  }


  useEffect(() => {
    const mapquestSrc = "https://api.mapbox.com/mapbox-gl-js/v1.13.2/mapbox-gl.js"
    let mapboxSrc = "https://prodmqpstorage.z11.web.core.windows.net/mqplatform.js"
    const mapboxCssHref = "https://api.mapbox.com/mapbox-gl-js/v1.13.2/mapbox-gl.css"

    // eslint-disable-next-line react-hooks/exhaustive-deps
    loadScript(mapquestSrc, () => {
      loadScript(mapboxSrc, () => mapSetUp(posts))
    })

    loadCss(mapboxCssHref)
  }, [posts])


  const mapSetUp = (posts: Posts) => {
    // @ts-ignore
    const transformRequest = mqplatformTransformRequest(
      key,
    )

    // @ts-ignore
    var map = new mapboxgl.Map({
      container: "map",
      style: "mqplatform://maps-api/styles/v1/19",
      transformRequest: transformRequest,
    })

    // @ts-ignore
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });
    // @ts-ignore
    map.addControl(new mapboxgl.NavigationControl())

    map.once("data", () => {
    })

    map.on("load", () => {
      setCenter(map, posts[0])
      setMaker(map, posts, popup)
    })
  }

  // set maker to mapbox
  const setMaker = (map: mapboxgl.Map, posts: Posts, popup: mapboxgl.Popup) => {
    posts.forEach((p) => {
      // create the popup
      map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates: [number,number] = [p.location_lng, p.location_lat];
        const description =
          `<div className='from-pink-500 via-red-500 to-yellow-500'>
            <h1 className='text-base font-bold'>${p.title}</h1>
            <p className='text-gray-500'>${p.artist?.name}</p>
            <p className='mt-2'>${p.message}</p>
          </div>`

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    })
  }

  const setCenter = (map: mapboxgl.Map, p: Posts[0]) => {
    // set center
    const { location_lat, location_lng } = p
    map.setCenter([location_lng, location_lat])
    map.setZoom(9)
  }

  return <div id="map" style={{height: '60vh', width: '100%'}} />
}

export default React.memo(Map)
