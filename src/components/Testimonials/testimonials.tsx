"use client";

import { Carousel } from "antd";
import { testimonials } from "@/data/db";
import TestimonialCard from "./components/testimonialsCard";



export default function Testimonials() {
  const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

  return (
    <section className="bg-[#f9f6f1] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer Reviews
          </h2>
          <p className="text-gray-600 mt-3">What our guests say about us</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="h-full">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
            <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
       {testimonials.map((t) => (
              <div key={t.id} className="px-4">
                <div className="max-w-md mx-auto">
                  <TestimonialCard t={t} />
                </div>
              </div>
            ))}
    </Carousel>
        </div>
      </div>
    </section>
  );
}
