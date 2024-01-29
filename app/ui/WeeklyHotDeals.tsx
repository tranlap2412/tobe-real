import React, { useEffect, useState } from 'react'

import { dataFindBest } from '../../dummy-data/home/hotelRoom'
import SliderWithSale from './re-use/SliderWithSale'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import ButtonSeeAll from './re-use/ButtonSeeAll'
import SelectSwiperMobile from './re-use/SelectSwiperMobile'

function WeeklyHotDeals() {
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
        <div className='pt-3 sm:pt-0 bg-gradient-pink'>
            {/* title */}
            <div className='sm:bg-white bg-transparent -translate-y-px'>
                <div className='container mx-auto px-2 md:px-4 xl:px-[57px]'>
                    <div className='flex flex-row sm:items-center items-start justify-between pb-2 sm:pb-4 md:px-[14px] pl-3'>
                        <div className='flex lg:flex-row flex-col gap-1 lg:gap-7 lg:items-center items-start'>
                            <h2
                                className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat max-w-[250px] sm:max-w-full
                                '>
                                Weekly Hot Deals 🔥
                            </h2>
                            <div className='flex items-center'>
                                <p className='text-[10px] leading-tight  font-montserrat font-medium self-start sm:self-end mt-1 '>
                                    Ends In
                                </p>
                                <div
                                    className='bg-gradient-to-r from-[#FFBEBE] to-[#FF5151] from-10% w-[66px] lg:w-[115px] h-[15px] lg:h-[26px] rounded-[5px]
                                text-center align-middle  ml-5 lg:ml-16 select-none flex justify-center items-center self-center sm:self-none'>
                                    <p className='text-white font-montserrat text-[10px] lg:text-[13px] leading-tight'>
                                        2 day(s)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex sm:gap-4'>
                            <SelectPlaceCustom />
                            <ButtonSeeAll />
                        </div>
                    </div>
                    {/* select on mobile */}
                    <SelectSwiperMobile />
                </div>
            </div>
            <SliderWithSale
                pending={pending}
                imageBgUrl='/images/home/highlight-img/hot-deals.png'
                bgColor='bg-transparent'
                bgWidth={203}
                bgHeight={198}
                hotDeal
                listRoom={dataFindBest}
                imageInSlide
                hiddenImageOnMobile
            />
        </div>
    )
}

export default WeeklyHotDeals
