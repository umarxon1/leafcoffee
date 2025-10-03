import Image from "next/image";
import LeafStore from "../../../public/chpkleaf.jpg"

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center bg-black text-white">
      <Image
        src={LeafStore}
        alt="Coffee shop"
        fill
        className="object-cover opacity-70"
      />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Your Coffee Spot</h1>
        <p className="text-xl mb-6">Premium Coffee & Desserts, made with love</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-[#b5d8d2]">
            View Menu
          </button>
          <button className="px-6 py-3 text-white rounded-lg bg-[#C19A6B] text-white hover:bg-[#a77e52] 
  transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
