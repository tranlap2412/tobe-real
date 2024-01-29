'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperWrap from '@/components/SwiperWrap'
import { ApartmentList } from '@/dummy-data/home/ApartmentList'
import CardRecommended from '@/app/ui/re-use/CardRecommended'
import ButtonPrevSwiper from '@/app/ui/swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from '@/app/ui/swiper-slider/ButtonNextSwiper'
const OtherAccommodation = () => {
    return (
        <div className='container mx-auto px-2 md:px-4 xl:px-0 pt-[10px] pb-5'>
            <SwiperWrap>
                {ApartmentList.map((room, index) => (
                    <SwiperSlide key={index} className='max-w-[247px] sm:max-w-full h-[220px]'>
                        <CardRecommended
                            typeRoom={room.typeRoom}
                            type={room.type}
                            title={room.title}
                            place={room.place}
                            imageUrl={room.imageUrl}
                            liked={room.liked}
                            latest={room.latest}
                            point={room.point}
                            price={room.price}
                        />
                    </SwiperSlide>
                ))}
                <ButtonPrevSwiper />
                <ButtonNextSwiper />
            </SwiperWrap>
        </div>
    )
}

export default OtherAccommodation
