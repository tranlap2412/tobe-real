'use client'
import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'

import { dataRealSale } from '../../dummy-data/home/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import RealEstateSaleSkeleton from './skeletons/RealEstateSaleSkeleton'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'

function RealEstateSale() {
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
        <div className='pt-5 pb-3 sm:pb-[22px] bg-[#DCDCDC] '>
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px]'>
                <h2 className='font-bold text-[18px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat pl-3'>
                    Real Estate Sales
                </h2>
                {pending ? (
                    <RealEstateSaleSkeleton />
                ) : (
                    <SwiperWrap>
                        {dataRealSale.map((room, index) => (
                            <SwiperSlide key={index} className='max-w-[247px] sm:max-w-none h-[220px]'>
                                <div className='w-full h-[220px] flex flex-col justify-between rounded-[10px]'>
                                    {/* content */}
                                    <div className='relative'>
                                        <div className='h-[140px]'>
                                            <Image
                                                className='rounded-[10px] h-full w-full xl:w-full bg-cover object-cover bg-center'
                                                src={room.imageUrl}
                                                width={247}
                                                height={140}
                                                alt={room.imageUrl}
                                            />
                                        </div>
                                        <p className='absolute top-[15px] left-[14px] text-[14px] font-montserrat font-bold leading-[17px] text-white drop-shadow-context'>
                                            Star from Rp1 million/month
                                        </p>
                                    </div>

                                    {/* button start */}
                                    <div
                                        className='flex justify-between items-center  w-full xl:max-w-[247px] bg-gradient-bottom 
                                    rounded-[10px] h-[54px] shadow-gray hover:cursor-pointer hover:opacity-85 pl-11 '
                                        >
                                        <span className='text-[10px] leading-tight font-bold'>
                                            Star from Rp1 millinon/month
                                        </span>
                                        <IoIosArrowForward size={30} className={'mr-5'} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <ButtonPrevSwiper />
                        <ButtonNextSwiper />
                    </SwiperWrap>
                )}
            </div>
        </div>
    )
}

export default RealEstateSale
