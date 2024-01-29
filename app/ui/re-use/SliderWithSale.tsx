'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { hotelRoom } from '../../../dummy-data/home/hotelRoom'
import SwiperWrap from '@/components/SwiperWrap'
import CardWithSale from '../re-use/CardWithSale'
import ButtonPrevSwiper from '../swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from '../swiper-slider/ButtonNextSwiper'
import CardWidthSaleSlideSkeleton from '../skeletons/CardWidthSaleSlideSkeleton'
import { isMobile } from 'react-device-detect'
interface SliderWithSaleProps {
    pending: boolean
    bgColor?: string
    imageBgUrl: string
    bgWidth?: number
    bgHeight?: number
    imageStyle?: object
    hotDeal?: boolean
    listRoom: hotelRoom[]
    hiddenImageOnMobile?: boolean
    imageInSlide?: boolean
}
const SliderWithSale: React.FC<SliderWithSaleProps> = ({
    pending,
    bgColor = 'bg-[#e3e3e3]',
    imageBgUrl,
    bgWidth,
    bgHeight,
    imageStyle,
    hotDeal,
    listRoom,
    hiddenImageOnMobile,
    imageInSlide
}) => {
    return (
        <div className={`pt-2 sm:pt-[14px] pb-2 ${bgColor}`}>
            <div className='container mx-auto px-2 md:px-4 xl:px-14 flex flex-col lg:flex-row items-center '>
                <div className='flex items-center justify-start shrink-0 flex-grow lg:flex-[33.3333%] lg:max-w-[33.3333%]'>
                    <Image
                        src={imageBgUrl}
                        width={bgWidth ?? 232}
                        height={bgHeight ?? 218}
                        alt='frame-cheaper'
                        className={`object-contain mb-3 lg:mb-0 w-auto h-[100px] lg:w-auto lg:h-[218px] ${
                            hotDeal
                                ? 'lg:w-auto lg:h-[198px] lg:ml-[38px]'
                                : 'lg:ml-[44px]'
                        } ${hiddenImageOnMobile ? 'lg:block hidden' : ''}`}
                        style={imageStyle ?? {}}
                    />
                </div>
                <div className='shrink-0 flex-grow w-full lg:flex-[66.6667%] lg:max-w-[66.6667%]'>
                    {pending ? (
                        <CardWidthSaleSlideSkeleton sizeSlide='small' />
                    ) : (
                        <SwiperWrap sizeSlide='small'>
                            {imageInSlide && isMobile && (
                                <SwiperSlide className='max-w-[160px] sm:max-w-full h-[220px]'>
                                    <div className='h-full w-full flex justify-center items-center'>
                                        <Image
                                            src={imageBgUrl}
                                            width={232}
                                            height={218}
                                            alt={imageBgUrl}
                                            className='object-contain mb-3 w-[140px] h-auto'
                                        />
                                    </div>
                                </SwiperSlide>
                            )}
                            {listRoom.map((room, index) => (
                                <SwiperSlide
                                    key={index}
                                    className='max-w-[160px] sm:max-w-full h-[220px]'>
                                    <CardWithSale
                                        imageUrl={room.imageUrl}
                                        title={room.title}
                                        oldprice={room.oldprice}
                                        place={room.place}
                                        price={room.price}
                                        discount={room.discount}
                                    />
                                </SwiperSlide>
                            ))}
                            <ButtonPrevSwiper />
                            <ButtonNextSwiper />
                        </SwiperWrap>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SliderWithSale
