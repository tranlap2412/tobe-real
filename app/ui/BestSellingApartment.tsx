import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { BestSellingList } from '../../dummy-data/home/BestSellingList'
import CardRecommended from './re-use/CardRecommended'
import SwiperWrap from '@/components/SwiperWrap'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import CardRecommendedSkeleton from './skeletons/CardRecommendedSkeleton'

function BestSellingApartment() {
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
        <div className='bg-white pt-6 pb-2'>

            {/* BestSellingApartment swiper */}
            <div className='container mx-auto pr-2 pl-5 md:px-8 xl:px-[71px] mb-4'>
                <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat mb-2 sm:mb-0'>Best Selling Apartment Buildings 🏆</h2>
            </div>
            <div className='container mx-auto px-2 md:px-4 xl:px-14 '>
                {/* title */}   
                {/* <h2 className='pl-3 font-bold text-[18px] leading-tight lg:text-xl font-montserrat mb-2'>Best Selling Apartment Buildings 🏆</h2> */}
                {pending ? 
                    <CardRecommendedSkeleton type='apartment'  />
                :
                <SwiperWrap>
                    {BestSellingList.map((room, index) => (
                        <SwiperSlide key={index} className='max-w-[247px] sm:max-w-full h-[220px]'>
                            <CardRecommended
                                typeRoom={room.typeRoom}
                                type={room.type}
                                title={room.title}
                                imageUrl={room.imageUrl}
                                price={room.price}
                                bestSelling
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

export default BestSellingApartment
