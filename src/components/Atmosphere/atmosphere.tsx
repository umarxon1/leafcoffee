import Image from "next/image";
import Barista from "../../../public/barista.jpg"
import Store from "../../../public/store.jpg"
import Coffemachine from "../../../public/coffemachine.jpg"

export default function Atmosphere() {
  return (
    <section className="p-12 text-center bg-[#f9f6f1]">
      <h2 className="text-4xl font-bold mb-6">Not just coffee, it’s an experience</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600">
        Feel the cozy vibe, watch our baristas at work, and enjoy freshly brewed coffee.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        <Image src={Barista} alt="Barista" width={400} height={300} className="rounded-lg object-cover"/>
        <Image src={Coffemachine} alt="Interior" width={400} height={300} className="rounded-lg object-cover"/>
        <Image src={Store} alt="Coffee crowd" width={400} height={300} className="rounded-lg object-cover"/>
      </div>
    </section>
  );
}
