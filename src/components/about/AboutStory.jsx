import React, { useEffect, useRef, useState } from "react";

const STORY_IMG = "/images/about-story.jpg";

/* =========================================================
   FADE IN HOOK
========================================================= */

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
      {
        threshold: 0.12,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

/* =========================================================
   FADE COMPONENT
========================================================= */

const Fade = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* =========================================================
   ABOUT STORY
========================================================= */

const AboutStory = () => {
  const categories = [
    "Beauty",
    "Fashion",
    "Technology",
    "Home",
    "Essentials",
  ];

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#F4F0E8] px-5 py-6 text-[#171717] sm:px-8 md:py-8 lg:px-14 xl:px-20"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#D8B762]/10 blur-[120px]"
        style={{
          animation: "storyBackgroundGlow 7s ease-in-out infinite",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E7C77B]/10 blur-[120px]"
        style={{
          animation:
            "storyBackgroundGlow 8s ease-in-out infinite reverse",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#171717_0.6px,transparent_0.6px)] [background-size:7px_7px]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ===================================================
            SECTION LABEL
        =================================================== */}

        <Fade>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C7A550]" />

            <p className="text-[9px] font-bold uppercase tracking-[3.5px] text-[#A38332]">
              The Velora Story
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A54B] shadow-[0_0_14px_5px_rgba(201,165,75,0.35)]" />
          </div>
        </Fade>

        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* =================================================
              LEFT — IMAGE
          ================================================= */}

          <Fade>
            <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">

              {/* Outer glow */}

              <div
                className="absolute -inset-4 rounded-[34px] bg-[#D5B25D]/15 blur-[30px]"
                style={{
                  animation: "imageGlow 5s ease-in-out infinite",
                }}
              />

              {/* Decorative frame */}

              <div className="absolute -left-2.5 -top-2.5 h-[45%] w-[45%] rounded-[17px] border border-[#C7A550]/30" />

              <div className="absolute -bottom-2.5 -right-2.5 h-[38%] w-[38%] rounded-[17px] border border-[#C7A550]/20" />

              {/* =================================================
                  IMAGE CARD
              ================================================= */}

              <div className="group relative z-10 aspect-[4/3.8] overflow-hidden rounded-[27px] border border-white/70 bg-[#DED5C3] shadow-[0_22px_55px_rgba(60,49,29,0.17)]">

                <img
                  src={STORY_IMG}
                  alt="Different product categories available at Velora"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />

                {/* Warm overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#17130C]/65 via-[#17130C]/5 to-transparent" />

                {/* Golden glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,221,139,0.28),transparent_30%)]" />

                {/* Moving shine */}

                <div
                  className="absolute -left-[55%] top-0 h-full w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{
                    animation: "storySweep 6s ease-in-out infinite",
                  }}
                />

                {/* Top label */}

                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/15 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[7px] font-semibold uppercase tracking-[2px] text-white/85">
                    Velora
                  </p>
                </div>

                {/* Bottom content */}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#E8CA83]">
                      One destination
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      More to discover.
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm text-white shadow-[0_0_22px_rgba(255,221,139,0.18)] backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#C7A550]/80">
                    ↗
                  </div>

                </div>
              </div>

              {/* =================================================
                  FLOATING NUMBER
              ================================================= */}

              <div
                className="absolute -right-3 top-7 z-20 rounded-xl border border-white/80 bg-[#F8F4EA]/95 px-3.5 py-2.5 shadow-[0_12px_35px_rgba(45,37,22,0.14),0_0_20px_rgba(201,165,75,0.12)] backdrop-blur-xl sm:-right-4"
                style={{
                  animation: "numberFloat 5s ease-in-out infinite",
                }}
              >
                <p className="text-lg font-medium text-[#C09A43]">
                  01
                </p>

                <p className="mt-0.5 text-[6px] font-semibold uppercase tracking-[1.6px] text-[#171717]/40">
                  Global destination
                </p>
              </div>

            </div>
          </Fade>

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <div className="max-w-[650px] lg:pl-1">

            {/* Heading */}

            <Fade delay={100}>
              <h2 className="max-w-[600px] text-[clamp(36px,4.2vw,60px)] font-medium leading-[0.96] tracking-[-3px] text-[#171717]">

                More choice.

                <span className="mt-1.5 block font-serif italic font-normal tracking-[-1.5px] text-[#B28A32]">
                  One destination.
                </span>

              </h2>
            </Fade>

            {/* Description */}

            <Fade delay={180}>
              <div className="mt-5 max-w-[570px] space-y-2.5 text-[13px] leading-5.5 text-[#171717]/60 md:text-[14px]">

                <p>
                  Velora is built around a simple idea — shopping should make
                  discovering great products easier, not more complicated.
                </p>

                <p>
                  Instead of limiting you to one category, Velora brings
                  products from different brands and areas of everyday life
                  together in one modern shopping destination.
                </p>

                <p>
                  From beauty and fashion to technology, furniture, groceries
                  and everyday essentials, there is always something new to
                  explore.
                </p>

              </div>
            </Fade>

            {/* =================================================
                RIGHT SIDE GLOWING CHIPS
            ================================================= */}

            <Fade delay={250}>
              <div className="mt-5 flex flex-wrap gap-2">

                {categories.map((category, index) => (
                  <span
                    key={category}
                    className="relative rounded-full border border-[#C7A550]/40 bg-[#FFF9EA]/85 px-3.5 py-2 text-[8px] font-bold uppercase tracking-[1.5px] text-[#9A792F] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C7A550]/75 hover:bg-[#FFF9EA]"
                    style={{
                      animation: `chipGlow ${
                        3 + index * 0.45
                      }s ease-in-out infinite`,
                    }}
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#C7A550] shadow-[0_0_8px_3px_rgba(199,165,80,0.55)]" />

                    {category}
                  </span>
                ))}

              </div>
            </Fade>

            {/* =================================================
                STATS
            ================================================= */}

            <Fade delay={320}>
              <div className="mt-5 grid grid-cols-3 border-t border-[#171717]/10 pt-4">

                <div className="pr-4">
                  <p className="text-xl font-medium tracking-[-1px] text-[#171717]">
                    01
                  </p>

                  <p className="mt-1 text-[7px] font-bold uppercase tracking-[1.7px] text-[#171717]/35">
                    Destination
                  </p>
                </div>

                <div className="border-l border-[#171717]/10 px-4">
                  <p className="text-xl font-medium tracking-[-1px] text-[#171717]">
                    ∞
                  </p>

                  <p className="mt-1 text-[7px] font-bold uppercase tracking-[1.7px] text-[#171717]/35">
                    Possibilities
                  </p>
                </div>

                <div className="border-l border-[#171717]/10 pl-4">
                  <p className="text-xl font-medium tracking-[-1px] text-[#171717]">
                    10+
                  </p>

                  <p className="mt-1 text-[7px] font-bold uppercase tracking-[1.7px] text-[#171717]/35">
                    Categories
                  </p>
                </div>

              </div>
            </Fade>

          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>
        {`
          @keyframes storyBackgroundGlow {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.55;
            }

            50% {
              transform: scale(1.12);
              opacity: 1;
            }
          }

          @keyframes imageGlow {
            0%,
            100% {
              opacity: 0.4;
              transform: scale(0.98);
            }

            50% {
              opacity: 0.85;
              transform: scale(1.025);
            }
          }

          @keyframes storySweep {
            0% {
              left: -55%;
            }

            45%,
            100% {
              left: 125%;
            }
          }

          @keyframes chipGlow {
            0%,
            100% {
              box-shadow:
                0 0 12px rgba(199, 165, 80, 0.20),
                0 0 25px rgba(199, 165, 80, 0.08);
            }

            50% {
              box-shadow:
                0 0 22px rgba(199, 165, 80, 0.42),
                0 0 42px rgba(199, 165, 80, 0.14);
            }
          }

          @keyframes numberFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutStory;