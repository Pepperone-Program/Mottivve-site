'use client';

import { useState } from 'react';
import Image from 'next/image';
import testimonials from '@/data/testimonials.json';

interface Testimonial {
  id: number;
  logoSrc: string;
  quote: string;
  avatarSrc: string;
  name: string;
  title: string;
}

const TestimonialsSection: React.FC = () => {
  const data = testimonials as Testimonial[];
  const [current, setCurrent] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, data.length - itemsPerView);

  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const next = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="inline-flex items-center h-6 mb-6 px-2 text-xs uppercase font-medium text-white bg-blue-500 rounded-full">
              Testemunhas
            </span>
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold">
              Mais de 10 milhões de clientes já compraram nossos produtos
            </h1>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {data.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                >
                  <div className="flex flex-col h-full p-8 border border-gray-100 rounded-xl shadow-4xl bg-white">
                    <Image
                      className="h-8 mb-8"
                      src={testimonial.logoSrc}
                      alt="Company logo"
                      width={120}
                      height={32}
                    />

                    <p className="text-lg font-medium mb-16">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="flex items-center mt-auto">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src={testimonial.avatarSrc}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                      <div className="pl-4">
                        <span className="block font-semibold">
                          {testimonial.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10 max-w-xs mx-auto">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                aria-label="Anterior"
              >
                ‹
              </button>

              <button
                onClick={next}
                disabled={current === maxIndex}
                className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
