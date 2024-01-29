'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import LookingForPlaceSkeleton from './skeletons/LookingForPlaceSkeleton'
import 'swiper/swiper-bundle.css'

const placeList = [
    {
        id: 1,
        place: 'Jakarta',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-1.png'
    },
    {
        id: 2,
        place: 'Bandung',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-2.png'
    },
    {
        id: 3,
        place: 'Surabaya',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-3.png'
    },
    {
        id: 4,
        place: 'Mendan',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-4.png'
    },
    {
        id: 5,
        place: 'Tangerang',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-5.png'
    },
    {
        id: 6,
        place: 'Jakarta',
        imageUrl: '/images/home/hotel-image/looking-for-place/screenshot-3.png'
    }
]

function NextBtnSwiper() {
    const swiper = useSwiper()
    return (
        <button
            className='swiper-of-looking-place__btn-next hidden'
            onClick={() => swiper.slideNext()}>
            <GoArrowRight size={23} color={'#fff'} />
        </button>
    )
}
function PrevBtnSwiper() {
    const swiper = useSwiper()
    return (
        <button
            className='swiper-of-looking-place__btn-prev hidden'
            onClick={() => swiper.slidePrev()}>
            <GoArrowLeft size={23} color={'#fff'} />
        </button>
    )
}
function LookingForPlace() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 300)
        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    useEffect(() => {
        const btnLeft: any = document.querySelector('.swiper-of-looking-place__btn-prev')
        const btnRight: any = document.querySelector('.swiper-of-looking-place__btn-next')
        const btnLeftActive = document.querySelector(
            '.swiper-of-looking-place__btn-left-active'
        )
        const btnRightActive = document.querySelector(
            '.swiper-of-looking-place__btn-right-active'
        )
        const prevSwiper = () => {
            btnLeft.click()
        }
        const nextSwiper = () => {
            btnRight.click()
        }
        btnLeftActive?.addEventListener('click', prevSwiper)
        btnRightActive?.addEventListener('click', nextSwiper)

        return () => {
            btnLeftActive?.removeEventListener('click', prevSwiper)
            btnRightActive?.removeEventListener('click', nextSwiper)
        }
    }, [pending])

    return (
        <div className='pt-6 pb-6 bg-[#E3E3E3]'>
            {/* title */}
            <div className='container mx-auto pr-2 pl-5 md:px-8 xl:px-[71px] mb-4'>
                <div className='flex flex-col sm:flex-row sm:items-baseline items-start gap-1'>
                    <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat'>Looking for a place to stay? 🏠</h2>
                    <p className='text-[10px] leading-tight sm:ml-10 font-montserrat font-bold'>Find “By Travelio” units in Indonesia’s big cities</p>
                </div>
            </div>
            <div className='container mx-auto px-[22px] md:px-14 xl:px-[100px] pt-2 relative'>
                {/* body */}
                {pending ? (
                    <LookingForPlaceSkeleton />
                ) : (
                    <>
                        <div className='swiper-of-looking-place'>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={22}
                                slidesPerView={'auto'}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 25
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 25
                                    }
                                }}
                                className=''>
                                {placeList.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className='swiper-of-looking-place max-w-[180px] sm:max-w-full'>
                                        <div className='relative cursor-pointer select-none'>
                                            <div className='h-[200px] w-full rounded-[10px] '>
                                                {/* Image */}
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={'demo-place-img'}
                                                    width={180}
                                                    height={200}
                                                    className='w-full h-full absolute top-0 left-0 bg-cover object-cover rounded-[10px] brightness-75'
                                                />
                                            </div>
                                            <p className='absolute top-[50%] left-0 w-full text-center -translate-y-[50%] font-bold font-montserrat text-[24px] leading-[29px] text-white drop-shadow-context'>
                                                {item.place}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <PrevBtnSwiper />
                                <NextBtnSwiper />
                            </Swiper>
                        </div>
                        {/* Buntton out Swiper box */}
                        <button
                            className='swiper-of-looking-place__btn-left-active w-7 h-7 bg-black rounded-full absolute top-[50%]
                    -translate-y-[40%] left-3 md:left-5 xl:left-14  justify-center items-center z-[1] select-none cursor-pointer
                    shadow-gray hover:bg-[#303030] transition duration-200 sm:flex hidden'>
                            <GoArrowLeft size={23} color={'#fff'} />
                        </button>
                        <button
                            className='swiper-of-looking-place__btn-right-active  w-7 h-7 bg-black rounded-full absolute top-[50%]
                    -translate-y-[40%] right-3 md:right-5 xl:right-14  justify-center items-center z-[1] select-none cursor-pointer
                    shadow-gray hover:bg-[#303030] transition duration-200 sm:flex hidden'>
                            <GoArrowRight size={23} color={'#fff'} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default LookingForPlace
