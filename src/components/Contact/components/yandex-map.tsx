"use client"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React from 'react'

const YandexMap = () => {
  const branches = [
    {
      coords: [40.518693, 70.949051],
      name: "Branch 1 - Kokand, Shokhrukhobod Street",
    },
    {
      coords: [40.534174, 70.928342],
      name: "Branch 2 - Kokand, Turon Street, 7",
    },
    {
      coords: [41.111916, 70.504077],
      name: "Branch 3 - A373 Highway",
    },
    {
      coords: [41.3377, 69.273759],
      name: "Branch 4 - Tashkent, Shaykhantakhur district, Kukcha, Small Ring Road, 56",
    },
  ];
  return (
   <YMaps>
                <Map
                  defaultState={{
                    center: [40.539151, 70.940425],
                    zoom: 7,
                  }}
                  width="100%"
                  height="100%"
                    options={{
                      suppressMapOpenBlock: true, 
                      suppressObsoleteBrowserNotifier: true,
                      copyrightLogoVisible: false, 
                      copyrightProvidersVisible: false,
                      copyrightUaVisible: false, 
                      }}
                >
                  {branches.map((branch, i) => (
                    <Placemark
                      key={i}
                      geometry={branch.coords}
                      properties={{
                        balloonContent: branch.name,
                      }}
                      options={{
                         iconLayout: "default#image",
                        iconImageHref: "/logocircle.png",
                        iconImageSize: [50, 50],
                        iconImageOffset: [-25, -50],
                        
                      }}
                    />
                  ))}
                </Map>
              </YMaps>
  )
}

export default YandexMap