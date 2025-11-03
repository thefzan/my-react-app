import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

import { useEffect, useState } from "react";

const Slider = () => {
    const images = [img1,img2,img3,]
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 2 seconds
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div>
        <div className="w-[350px] md:w-[90%] h-[200px] m-auto mt-4 rounded-2xl overflow-hidden relative shadow-lg">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`slide-${index}`}
      className={`absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-700 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}

  {/* Dots Indicator */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full ${
          index === current ? "bg-white" : "bg-gray-300"
        }`}
      ></div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Slider