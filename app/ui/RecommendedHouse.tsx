import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { HouseList } from '../../dummy-data/home/HouseList'
import CardRecommended from './re-use/CardRecommended'
import SwiperWrap from '@/components/SwiperWrap'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import CardRecommendedSkeleton from './skeletons/CardRecommendedSkeleton'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import SelectSwiperMobile from './re-use/SelectSwiperMobile'
function RecommendedHouse() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 300)

        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    return (
        <div className='bg-white pt-4'>
            {/* title */}
            <div className='container mx-auto px-3 md:px-8 xl:px-[71px]'>
                <div className='flex flex-col sm:flex-row sm:items-center items-start justify-between mb-2 sm:mb-[10px]'>
                    <div className='flex items-center justify-between sm:w-full'>
                        <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat pl-2 md:pl-0'>Recommended Houses 🏠</h2>
                        <SelectPlaceCustom />
                    </div>
                    {/* select on mobile */}
                    <SelectSwiperMobile borderSelectColor='border-[#cdcdcd]' />
                </div>
            </div>
            {/* RecommendedHouse swiper */}
            <div className='container mx-auto px-2 md:px-4 xl:px-14 pb-2 pt-3 sm:pt-0'>
                {pending ? 
                    <CardRecommendedSkeleton type='house'/>
                :
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
                </SwiperWrap>}
            </div>
        </div>
    )
}

export default RecommendedHouse
