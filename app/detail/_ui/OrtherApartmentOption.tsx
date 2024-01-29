'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperWrap from '@/components/SwiperWrap'
import { HouseList } from '@/dummy-data/home/HouseList'
import CardRecommended from '@/app/ui/re-use/CardRecommended'
import ButtonPrevSwiper from '@/app/ui/swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from '@/app/ui/swiper-slider/ButtonNextSwiper'
const OrtherApartmentOption = () => {
    return (
        <div className='container mx-auto px-2 md:px-4 xl:px-0 pt-[10px] pb-5'>
            <SwiperWrap>
                {HouseList.map((room, index) => (
                    <SwiperSlide key={index} className='max-w-[247px] sm:max-w-full h-[220px]'>
                        <CardRecommended
                            typeRoom={room.typeRoom}
                            type={room.type}
                            title={room.title}
                            place={room.place}
                            imageUrl={room.imageUrl}
                            liked={room.liked}
                            latest={room.latest}
                        />
                    </SwiperSlide>
                ))}
                <ButtonPrevSwiper />
                <ButtonNextSwiper />
            </SwiperWrap>
        </div>
    )
}

export default OrtherApartmentOption
