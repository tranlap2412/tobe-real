'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import HeadBooking from './HeadBooking'
import { usePathname } from 'next/navigation'
interface HeadingSlideBlock {
    title: string,
    imageUrl: string,
    description?: string,
    promotion?:boolean
}
const HeadingSlideBlock:React.FC<HeadingSlideBlock> = ({title, description ,imageUrl, promotion}) => {
    const pathname = usePathname()
    const [toggleTab, setToggleTab] = useState('rent')
    const handleSetToggleTab = (value: string) => {
        setToggleTab(value)
    }
    return (
        <div
            className={`w-full h-60 lg:mb-28 sm:h-[321px] bg-headblock bg-no-repeat bg-cover bg-left-top md:bg-center ${
                toggleTab === 'rent' ? 'sm:mb-48 mb-[340px]' : 'sm:mb-32 mb-[200px]'
            }`}>
            <div className='container mx-auto h-full bg-opacity-35 relative'>
                <div className='flex gap-3 h-full px-5 md:px-10 lg:px-[115px]'>
                    {/* title & content */}
                    <div className={`lg:basis-[50%] h-full ${
                        promotion ? 'basis-[50%]' : 'basis-[65%]'
                    }`}>
                        <div className='flex flex-col md:py-6'>
                            <h2 className={`h2 drop-shadow-title ${
                                pathname === '/promotion' ? "max-w-[345px] md:max-w-[300px] mt-5 pt-5 sm:pt-10 md:pt-0" : 'pt-5 sm:pt-10'
                            }`}>{title}</h2>
                            {description && <p className='font-medium max-w-[456px] leading-5 text-[12px] md:text-[16px]'>
                                {description}
                            </p>}
                        </div>
                    </div>

                    {/* image headblock*/}
                    <div className={`lg:basis-[50%] h-full ${
                        promotion ? 'basis-[50%]' : 'basis-[35%]'
                    }`}>
                        <div className='h-full flex justify-center items-start'>
                            <Image
                                src={imageUrl}
                                width={266}
                                height={227}
                                className={`md:mt-2 ${
                                    pathname === '/promotion' ? "w-full h-auto self-start xl:h-full xl:w-auto" : ''
                                } ${promotion ? 'mt-0': 'mt-8'}`}
                                alt={imageUrl}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* block booking */}
            <HeadBooking toggleTab={toggleTab} setToggleTab={handleSetToggleTab} />
        </div>
    )
}

export default HeadingSlideBlock
