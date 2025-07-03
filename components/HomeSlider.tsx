"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const sliderImages = [
  {
    src: "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    alt: "Kegiatan 1",
  },
  {
    src: "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    alt: "Kegiatan 2",
  },
  {
    src: "https://bustanulhudaid.wordpress.com/wp-content/uploads/2020/12/cover.jpg",
    alt: "Kegiatan 3",
  },
];

export default function HomeSlider() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {sliderImages.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
