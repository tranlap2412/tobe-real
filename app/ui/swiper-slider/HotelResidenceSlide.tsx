'use client'
import React, { useEffect, useState } from 'react'
import { dataHotel } from '../../../dummy-data/home/hotelRoom'
import CardNormal from '../re-use/CardNormal'
import SwiperWrap from '@/components/SwiperWrap'
import ButtonPrevSwiper from './ButtonPrevSwiper'
import ButtonNextSwiper from './ButtonNextSwiper'
import CardNormalSlideSkeleton from '../skeletons/CardNormalSlideSkeleton'
import { SwiperSlide } from 'swiper/react'

function HotelResidenceSlide() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 300)

        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    if(pending) {
        return <CardNormalSlideSkeleton />
    } 
    return (
        <SwiperWrap>
            {dataHotel.map((room, index) => (
                <SwiperSlide key={index} className='max-w-[247px] sm:max-w-none h-[220px]'>
                    <CardNormal
                        title={room.title}
                        typeRoom={room.typeRoom}
                        start={room.start}
                        place={room.place}
                        icon={room.icon}
                        price={room.price}
                        imageUrl={room.imageUrl}
                    />
                </SwiperSlide>
            ))}
            <ButtonPrevSwiper />
            <ButtonNextSwiper />
        </SwiperWrap>
    )
}

export default HotelResidenceSlide
