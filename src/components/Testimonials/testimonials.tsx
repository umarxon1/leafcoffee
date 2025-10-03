"use client";

import { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { testimonials } from "@/data/db";
import TestimonialCard from "./components/testimonialsCard";

type CarouselRefType = {
  next: () => void;
  prev: () => void;
};

export default function Testimonials() {

  const carouselRef = useRef<CarouselRefType>(null);

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
          <Carousel dots ref={carouselRef as any}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-4">
                <div className="max-w-md mx-auto">
                  <TestimonialCard t={t} />
                </div>
              </div>
            ))}
          </Carousel>

          <button
            onClick={() => carouselRef.current?.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            <LeftOutlined style={{ fontSize: "18px" }} />
          </button>

          <button
            onClick={() => carouselRef.current?.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            <RightOutlined style={{ fontSize: "18px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
