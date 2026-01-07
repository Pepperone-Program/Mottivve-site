'use client';

import { useState } from 'react';
import testimonials from '@/data/testimonials.json';
import { Button } from '@/components/ui';

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

                    <p className="text-lg font-medium mb-16">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="flex items-center mt-auto">
                      <div className="pl-4">
                        <span className="block font-semibold">
                          {testimonial.name}
                        </span>
                        <span className="text-sm text-gray-600">
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
          <div className='flex justify-center mt-10'>
              <Button
                className="inline-flex items-center justify-center h-10 px-4 text-center leading-loose text-sm text-gray-700 hover:text-blue-500 font-semibold border border-gray-200 hover:border-blue-600 shadow-sm hover:shadow-none rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => window.location.href='https://mottivve.lojavirtualnuvem.com.br/'}
              >
                Quero viver essa experiência
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
