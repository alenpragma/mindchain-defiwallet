import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Blockchain Developer & Tech Lead",
    content: `Mindchain stands out as a next-generation blockchain platform with the potential to reshape the future of decentralized technology. Its vision of creating a secure, scalable, and efficient ecosystem aligns well with the evolving demands of the digital world. What makes Mindchain unique is its comprehensive approach—integrating smart contracts, DeFi, NFTs, and a native exchange under one ecosystem.

With a strong development roadmap, active community engagement, and a growing list of use cases, Mindchain is not just keeping pace with blockchain trends—it's aiming to lead them.`,
    image: "",
    rating: 5,
  },
  {
    id: 2,
    name: "Liam Torres",
    title: "Crypto Investor & Educator",
    content: `The Mindchain team clearly understands the importance of real-world utility. Their emphasis on community governance, transparent tokenomics, and seamless DeFi integration is impressive. I believe this platform is a gem in the making.`,
    image: "",
    rating: 5,
  },
  {
    id: 3,
    name: "Liam Torres",
    title: "Crypto Investor & Educator",
    content: `The Mindchain team clearly understands the importance of real-world utility. Their emphasis on community governance, transparent tokenomics, and seamless DeFi integration is impressive. I believe this platform is a gem in the making.`,
    image: "",
    rating: 5,
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
        <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
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
          <div className="flex flex-col md:flex-row items-start gap-6 transition-opacity duration-700 opacity-100">
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
