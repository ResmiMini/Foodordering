
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="w-full mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}  // keeps it infinite
        speed={3000} // how long it takes to slide (ms)
        autoplay={{
          delay: 0, // no pause between slides
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://051edfee763c558a6586-1f1d5ce824a176e93f42bb75edca05f7.ssl.cf1.rackcdn.com/mixt-food-photographer-healthy.jpg"
            alt="samosa"
            className="w-full h-64 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0148/5482/files/Bakrid_food_1_1024x1024.png?v=1718600050"
            alt="puffs"
            className="w-full h-64 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://wp2.velivery.com/wp-content/uploads/2023/03/KW10_VE_Storytelling_VoodFeed_FakeVegan_Header_Blogseite_Mobil-1024x1024.jpg"
            alt="cutlet"
            className="w-full h-64 object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
