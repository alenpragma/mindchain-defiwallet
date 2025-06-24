import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Serra",
    title: "Crypto Entrepreneur",
    content:
      "Becoming a Wings Partner was the smartest move I made in crypto. The shareholding and revenue opportunities are unmatched, and Mindchain’s vision is truly futuristic.",
    image: "",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Zhi Wei",
    title: "Crypto Investor",
    content:
      "I started with the minimum $2,000 and instantly saw the potential. The transparency, professionalism, and profit-sharing model convinced me to scale up to full shareholder level!",
    image: "",
    rating: 4,
  },
  {
    id: 3,
    name: "Mr. Ravi",
    title: "Blockchain Advisor",
    content:
      "Mindchain CEX isn’t just another exchange — it’s a next-gen platform. As a Wings Partner, I get to profit and grow alongside a world-class crypto ecosystem.",
    image: "",
    rating: 4,
  },
  {
    id: 4,
    name: "Mr. Alphaliton",
    title: "Marketing Consultant",
    content:
      "Beyond profits, being a Wings Partner gave my brand exposure across the crypto world. It’s more than investment — it’s reputation, reach, and returns.",
    image: "",
    rating: 5,
  },
  {
    id: 5,
    name: "Mr. Mateusz",
    title: "Community Builder",
    content:
      "Mindchain is serious about community-driven success. As a Wings Partner, I feel like part of the team, not just an investor.",
    image: "",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section
      className=" text-white py-10 px-3transition-all duration-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{`Wings Partner’s Perspective`}</h2>
        <p className="text-gray-300 mb-10">
          Discover why thousands of users trust MindchainWallet for their DeFi
          journey
        </p>

        <div className="relative bg-[#4A5361] py-3 rounded-xl px-12 text-left shadow-lg transition-all duration-700 ease-in-out">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0.5 transform -translate-y-1/2 text-white rounded-full p-2  transition bg-[#323841] hover:bg-[#32384184]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0.5 transform -translate-y-1/2 text-white rounded-full p-2  transition  bg-[#323841] hover:bg-[#32384184]"
          >
            <ChevronRight size={16} />
          </button>
          <div className="flex flex-col md:flex-row items-center gap-6 transition-opacity duration-700 opacity-100">
            <div className="flex flex-col items-center md:items-start min-w-[140px]">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-gray-500">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl">👤</span>
                )}
              </div>
              <h4 className="text-md font-semibold mt-4">{testimonial.name}</h4>
              <p className="text-sm text-purple-300">{testimonial.title}</p>
              <div className="flex mt-2 text-orange-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <div className="flex-1 text-gray-200">
              <div className="flex items-center mb-">
                <Quote className="text-purple-400 w-6 h-6" />
              </div>
              <p className="whitespace-pre-line leading-relaxed text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-orange-500 w-5" : "bg-gray-500 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
