import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import '@/assets/styles/swiper.css'

function SwiperWrap({ children, sizeSlide }: { children: React.ReactNode, sizeSlide?: string }) {
    let configPerView = 2
    if(sizeSlide) {
        configPerView = 3
    }
    return (
        <div className='swiper-wrap'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={22}
                slidesPerView={'auto'}
                breakpoints={{
                    640: {
                        slidesPerView: configPerView
                    },
                    960: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}
                className='relative z-0'
                >
                {children}
            </Swiper>
        </div>
    )
}

export default SwiperWrap
