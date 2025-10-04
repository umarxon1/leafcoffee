"use client";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contacts = () => {
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
    <section className="bg-[#f9f6f1] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3">
            Do you have any questions? Write to us or visit our coffee shop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <EnvironmentOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Kokand, Shokhrukhobod Street</p>
                <p className="text-gray-600">Kokand, Turon Street, 7</p>
                <p className="text-gray-600">Pereval, A373 Highway</p>
                <p className="text-gray-600">
                  Tashkent, Shaykhantakhur district, Kukcha, Small Ring Road, 56
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+998885770077</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MailOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">coffee.shop@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ClockCircleOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">Working Hours</h3>
                <p className="text-gray-600">24/7</p>
              </div>
            </div>

          </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
              <YMaps>
                <Map
                  defaultState={{
                    center: [40.539151, 70.940425],
                    zoom: 7,
                  }}
                  width="100%"
                  height="100%"
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
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
