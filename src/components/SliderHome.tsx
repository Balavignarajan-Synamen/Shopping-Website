'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]"
      >
        <SwiperSlide className='flex justify-center items-center'>
          <Image 
            src='/images/shop1.jpg' 
            alt='shop1' 
            width={1300} 
            height={100} 
            className="w-full h-full object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide className='bg-gradient-to-l from-gray-400 to-gray-800  flex justify-center items-center text-center text-2xl sm:text-3xl md:text-4xl text-white'>
        <Image 
            src='/images/shop22.jpg' 
            alt='shop2' 
            width={1300} 
            height={100} 
            className="w-full h-full object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center text-center text-2xl sm:text-3xl md:text-4xl text-white'>
        <Image 
            src='/images/shop3.jpg' 
            alt='shop3' 
            width={1300} 
            height={100} 
            className="w-full h-full lg:pb-2  object-cover" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
