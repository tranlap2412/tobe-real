import React from 'react'
import HotelResidenceSlide from './swiper-slider/HotelResidenceSlide'
import Image from 'next/image'
function HotelResidence() {
    return (
        <div className='bg-white'>
            <div className='container mx-auto px-2 md:px-4 xl:px-[57px] pt-2 pb-4'>

                {/* title */}
                <div className='pl-3 flex flex-col sm:flex-row sm:items-center items-start max-lg:min-h-10 lg:min-h-[56px] mb-2 sm:mb-1'>
                    <div className='flex items-center'>
                        <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat'>Hotel Residence</h2>
                            <div className='inline-block ml-3 mb-3'>
                                <Image
                                    src={'/images/home/icon/layer_icon_1.png'}
                                    width={34}
                                    height={29}
                                    alt={'icon/layer_icon_1.png'}
                                    className='w-auto h-[21px] lg:w-[34px] lg:h-[29px] '
                                />
                            </div>
                    </div>
                    <p className='text-[10px] leading-tight sm:ml-10 font-montserrat font-medium'>Eksklusif Pengalamen Tinggal di Hotel</p>
                </div>

                {/* body */}
                <HotelResidenceSlide />
            </div>
        </div>
    )
}

export default HotelResidence
