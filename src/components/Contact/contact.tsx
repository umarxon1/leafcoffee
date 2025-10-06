import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import YandexMap from "./components/yandex-map";

const Contacts = () => {
 
  return (
    <section id="restaurants" className="bg-[#f9f6f1] py-20">
      <div className="max-w-6xl mx-auto px-6">
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
              <YandexMap/>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
