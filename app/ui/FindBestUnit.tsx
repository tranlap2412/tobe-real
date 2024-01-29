import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { dataFindBest } from '../../dummy-data/home/hotelRoom'
import SliderWithSale from './re-use/SliderWithSale'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import ButtonSeeAll from './re-use/ButtonSeeAll'
import SelectSwiperMobile from './re-use/SelectSwiperMobile'

function FindBestUnit() {
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const LoadingTimeOutId = setTimeout(() => {
            setPending(false)
        }, 1000)

        return () => {
            clearTimeout(LoadingTimeOutId)
        }
    }, [])
    return (
        <div className='pt-4 bg-[#91F2FF] sm:bg-white'>
            {/* title */}
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px]'>
                <div className='flex flex-row sm:items-center items-start justify-between mb-2 sm:mb-4 md:px-[14px] pl-3'>
                    <div className='flex lg:flex-row flex-col gap-1 lg:gap-9 lg:items-center items-start'>
                        <h2
                            className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat max-w-[250px] sm:max-w-full
                            '>
                            Find Best Units for Staycation
                            <Image
                                src={'/images/home/icon/layer_icon_3.png'}
                                width={34}
                                height={29}
                                alt={'icon/layer_icon_3.png'}
                                className='w-auto h-[21px] inline-block ml-3 mb-1 lg:w-[34px] lg:h-[29px] '
                            />
                        </h2>
                        <p className='text-[10px] leading-tight font-montserrat font-medium'>
                            Discount up to
                            <span className='text-[10px] lg:text-[32px] leading-tight font-montserrat font-medium'>
                                {' '}
                                30%
                            </span>
                        </p>
                    </div>

                    <div className='flex sm:gap-4'>
                        <SelectPlaceCustom />
                        <ButtonSeeAll />
                    </div>
                </div>
                {/* select on mobile */}
                <SelectSwiperMobile />
            </div>

            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/highlight-img/find-best-units.png'
                bgColor='bg-[#91F2FF]'
                listRoom={dataFindBest}
                hiddenImageOnMobile
                imageInSlide
            />
        </div>
    )
}

export default FindBestUnit
