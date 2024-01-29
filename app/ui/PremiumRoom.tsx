import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import { SwiperSlide } from 'swiper/react'
import SwiperWrap from '@/components/SwiperWrap'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import { dataPremium } from '../../dummy-data/home/hotelRoom'
import CardWidthSaleSlideSkeleton from './skeletons/CardWidthSaleSlideSkeleton'
import ButtonSeeAll from './re-use/ButtonSeeAll'
import SelectSwiperMobile from './re-use/SelectSwiperMobile'
import CardWithSale from './re-use/CardWithSale'
import ButtonPrevSwiper from './swiper-slider/ButtonPrevSwiper'
import ButtonNextSwiper from './swiper-slider/ButtonNextSwiper'

function PremiumRoom() {
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
        <div className='pt-4'>
            {/* title */}
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px] mb-3 sm:mb-0'>
                <div className='flex flex-row sm:items-center items-start justify-between mb-2 sm:mb-4 md:px-[14px] pl-3'>
                    <div className='flex lg:flex-row flex-col gap-1 lg:gap-9 lg:items-baseline items-start'>
                        <h2
                            className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat max-w-[250px] sm:max-w-full
                            '>
                            Premium
                            <Image
                                src={'/images/home/icon/layer_icon_4.png'}
                                width={26}
                                height={14}
                                alt={'icon/layer_icon_4.png'}
                                className='w-auto h-[21px] inline-block ml-3 mb-1 lg:w-auto lg:h-auto '
                            />
                        </h2>
                        <p className='text-[10px] leading-tight font-montserrat font-bold'>
                            Selected premium unit with 5 star service by Travelio
                        </p>
                    </div>

                    <div className='flex sm:gap-4'>
                        <SelectPlaceCustom />
                        <ButtonSeeAll />
                    </div>
                </div>
                {/* select on mobile */}
                <SelectSwiperMobile borderSelectColor='border-[#cdcdcd]' />
            </div>

            {/* body */}
            <div className={`pt-2 sm:pt-[14px] pb-2 bg-gradient-fade-yellow`}>
                <div className='container mx-auto px-2 md:px-4 xl:px-14 flex flex-col lg:flex-row items-center '>
                    <div className='flex items-center justify-start shrink-0 flex-grow lg:flex-[33.3333%] lg:max-w-[33.3333%]'>
                        <Image
                            src={'/images/home/highlight-img/premium-img.png'}
                            width={333}
                            height={221}
                            alt='frame-cheaper'
                            className={`object-contain mb-3 lg:mb-0 w-auto h-[100px] lg:w-auto lg:h-[218px] lg:block hidden `}
                        />
                    </div>
                    <div className='shrink-0 flex-grow w-full lg:flex-[66.6667%] lg:max-w-[66.6667%]'>
                        {pending ? (
                            <CardWidthSaleSlideSkeleton sizeSlide='small' />
                        ) : (
                            <SwiperWrap sizeSlide='small'>
                                {isMobile && (
                                    <SwiperSlide className='max-w-[160px] sm:max-w-full h-[220px]'>
                                        <div className='h-full w-full flex justify-center items-center'>
                                            <Image
                                                src={'/images/home/highlight-img/premium-img.png'}
                                                width={232}
                                                height={218}
                                                alt={'/images/home/highlight-img/premium-img.png'}
                                                className='object-contain mb-3 w-[160px] h-auto'
                                            />
                                        </div>
                                    </SwiperSlide>
                                )}
                                {dataPremium.map((room, index) => (
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
        </div>
    )
}

export default PremiumRoom
