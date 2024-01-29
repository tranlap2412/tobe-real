
'use client'
import React from 'react'
import Image from 'next/image'
import Fancybox from '@/components/Fancybox/Fancybox'
interface ImageHighlight {
    listImage: string[]
}
const ImageHighlight: React.FC<ImageHighlight> = ({ listImage }) => {
    return (
        <Fancybox>
            <div className='sm:min-h-[300px] lg:min-h-[400px] grid sm:grid-cols-2 gap-3 sm:gap-5'>
                <a data-fancybox="gallery" href='/images/detail-hotel/room-demo.jpg'>
                    <Image
                        src={'/images/detail-hotel/room-demo.jpg'}
                        height={400}
                        width={536}
                        alt='room-demo.jpg'
                        className='h-full w-auto object-cover rounded-[10px]'
                    />
                </a>
    
                <div className='grid grid-cols-5 sm:grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-5'>
                    {listImage.slice(1,5).map((imageUrl, index) => {
                        return (
                            <a key={index} data-fancybox="gallery" href='/images/detail-hotel/room-demo.jpg' className={`${
                                index >= 2 ? 'sm:hidden lg:block' : ''
                            }`}>
                                <Image
                                    src={imageUrl}
                                    height={400}
                                    width={536}
                                    priority
                                    alt='room-demo.jpg'
                                    className={`h-[61px] w-[80px] sm:h-full sm:w-auto object-cover rounded-[10px]`}
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </Fancybox>
    )
}

export default ImageHighlight
