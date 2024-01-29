import React from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const listSelect = [
    { id: 1, title: 'Jakarta', active: true },
    { id: 1, title: 'Bandung', active: false },
    { id: 1, title: 'Tanegrang', active: false },
    { id: 1, title: 'Jakarta', active: false },
    { id: 1, title: 'Bandung', active: false },
    { id: 1, title: 'Tanegrang', active: false }
]
const SelectSwiperMobile = ({ borderSelectColor }: { borderSelectColor?: string }) => {
    return (
        <div className='block sm:hidden pl-4 mt-3 w-full'>
            <Swiper
                modules={[FreeMode]}
                spaceBetween={12}
                slidesPerView={'auto'}
                className=''>
                {listSelect.slice(0, 3).map((item, index) => (
                    <SwiperSlide key={index} className='max-w-[150px]'>
                        <div
                            className={`select-none flex justify-center items-center h-7 rounded-[5px] border   ${
                                item.active && 'bg-gradient-right'
                            } ${borderSelectColor ?? 'border-white'}`}>
                            {item.title}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SelectSwiperMobile
