import { TeamOutlined, CoffeeOutlined, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/coffeestore.jpg"
            alt="Coffee Shop"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-contain"
          />
          <div className="absolute bottom-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <p className="font-semibold text-amber-700">3+ years of experience</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We believe that a cup of good coffee and a delicious dessert can bring
            joy and inspiration for the whole day. That’s why we prepare every dish
            and drink with love, using only fresh and natural ingredients.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CoffeeOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Our Mission</h3>
                <p className="text-gray-500">
                  We prepare coffee and desserts only from carefully selected ingredients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TeamOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Our Team</h3>
                <p className="text-gray-500">
                  Experienced baristas and pastry chefs who truly love their craft.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HeartOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Our Values</h3>
                <p className="text-gray-500">
                  Quality, coziness, and care for every guest.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
