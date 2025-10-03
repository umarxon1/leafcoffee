import Image from "next/image";
import Cappucino from "../../../public/CAPPUCCINO.png"
import Barista1 from "../../../public/barista1.jpg"
import Chpkatmosphere from "../../../public/chpkatmosphere.jpg"

export default function ProductGrid() {
  const products = [
    {
      title: "Latte Macchiato",
      desc: "Smooth & creamy espresso",
      img: Barista1,
    },
    {
      title: "Cappuccino",
      desc: "Rich foam with bold espresso",
      img: Chpkatmosphere,
    },
    {
      title: "Cheesecake",
      desc: "Freshly baked every morning",
      img: Cappucino,
    },
    {
      title: "Croissant",
      desc: "Buttery & flaky perfection",
      img: Cappucino,
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-4 p-6">
      {products.map((p, i) => (
        <div key={i} className="relative h-[400px] bg-gray-100">
           <Image
            src={p.img}
            alt={p.title}
            fill        
            className="object-cover bg-amber-50"
    
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">{p.title}</h2>
            <p className="mb-4">{p.desc}</p>
            <div className="space-x-2">
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                Learn More
              </button>
              <button className="px-4 py-2 bg-[#C19A6B] text-white rounded hover:bg-[#a17c55]">
                Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
