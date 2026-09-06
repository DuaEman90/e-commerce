
import React, { useEffect, useRef, useState } from "react";

const BRAND_IMG =
  "https://images.pexels.com/photos/7256108/pexels-photo-7256108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Fade = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AboutStory = () => {
  return (
    <section
      id="story"
      className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <Fade>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C9A45C]/30 z-0" />

            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#EEE9E1]">
              <img
                src={BRAND_IMG}
                alt="Different product categories available at Velora"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#171717]/70 to-transparent p-7">
                <p className="text-[9px] uppercase tracking-[3px] text-[#C9A45C]">
                  VELORA
                </p>
                <p className="mt-1 text-base font-light text-white">
                  Global brands. One destination.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 md:right-0 bg-[#171717] text-white px-7 py-5 shadow-xl z-20">
              <p className="text-3xl font-light text-[#C9A45C]">01</p>
              <p className="text-[9px] uppercase tracking-[2px] text-white/60 mt-1">
                Shopping destination
              </p>
            </div>
          </div>
        </Fade>

        {/* Text */}
        <div>
          <Fade delay={100}>
            <p className="text-[#C9A45C] uppercase tracking-[3px] text-[10px] font-semibold">
              The Velora Story
            </p>
          </Fade>

          <Fade delay={200}>
            <h2 className="mt-5 text-[clamp(36px,5vw,60px)] font-light leading-[1.05] tracking-[-1px]">
              More choice,
              <br />
              <em className="font-serif not-italic text-[#C9A45C]">
                one place.
              </em>
            </h2>
          </Fade>

          <Fade delay={300}>
            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#77736D]">
              <p>
                Velora is built around a simple idea — shopping should make
                discovering great products easier, not more complicated.
              </p>

              <p>
                Instead of focusing on a single product category, Velora
                brings products from different brands and areas of everyday
                life together in one modern e-commerce destination.
              </p>

              <p>
                From beauty and fashion to electronics, furniture, groceries
                and everyday essentials, Velora makes it easier to explore
                different products and find what fits your needs.
              </p>
            </div>
          </Fade>

          <Fade delay={400}>
            <div className="mt-10 pt-8 border-t border-[#E4DDD2] grid grid-cols-3 divide-x divide-[#E4DDD2]">
              <div className="px-6 first:pl-0">
                <p className="text-4xl font-light text-[#171717]">01</p>
                <p className="mt-2 text-[9px] uppercase tracking-[2px] text-[#AAA59D]">
                  Destination
                </p>
              </div>

              <div className="px-6">
                <p className="text-4xl font-light text-[#171717]">∞</p>
                <p className="mt-2 text-[9px] uppercase tracking-[2px] text-[#AAA59D]">
                  Possibilities
                </p>
              </div>

              <div className="px-6">
                <p className="text-4xl font-light text-[#171717]">360°</p>
                <p className="mt-2 text-[9px] uppercase tracking-[2px] text-[#AAA59D]">
                  Categories
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

