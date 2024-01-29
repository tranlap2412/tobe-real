import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { dataHotel } from '../../dummy-data/home/hotelRoom'
import SliderWithSale from './re-use/SliderWithSale'
import ButtonSeeAll from './re-use/ButtonSeeAll'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import SelectSwiperMobile from './re-use/SelectSwiperMobile'

function MonthlyCheaperPrice() {
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
        <div className='bg-[#e3e3e3] sm:bg-white pt-3 sm:mt-0'>
            {/* title */}
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px]'>
                <div className='flex flex-row sm:items-center items-start justify-between mb-2 sm:mb-4 md:px-[14px] pl-3'>
                        <div className='flex lg:flex-row flex-col gap-1 lg:gap-9 lg:items-center items-start'>
                            <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat max-w-[250px] sm:max-w-full
                            '>
                                Stay Monthly For Cheaper Prices
                                <Image
                                    src={'/images/home/icon/layer_icon_2.png'}
                                    width={34}
                                    height={29}
                                    alt={'icon/layer_icon_2.png'}
                                    className='w-auto h-[21px] inline-block ml-3 mb-1 lg:w-[34px] lg:h-[29px] '
                                />
                            </h2>
                            <p className='text-[10px] leading-tight font-montserrat font-medium'>Diskon hingga $ 1.000.000 </p>
                        </div>

                    <div className='flex sm:gap-4'>
                        <SelectPlaceCustom />
                        <ButtonSeeAll />
                    </div>
                </div>
                {/* select on mobile */}
                <SelectSwiperMobile />
            </div>

            {/* body */}
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/highlight-img/frame-cheaper.png'
                listRoom={dataHotel}
                hiddenImageOnMobile
            />
        </div>
    )
}

export default MonthlyCheaperPrice
