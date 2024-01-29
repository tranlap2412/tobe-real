'use client'
import React from 'react'
import Image from 'next/image'
import { formatter } from '@/lib/helper'
import { hotelRoom } from '../../../dummy-data/home/hotelRoom'
import { renderStart } from '@/lib/render'
import Place from '@/icons/Header/Blockhead/Place'
import Link from 'next/link'
const CardNormal: React.FC<hotelRoom> = ({
    typeRoom,
    title,
    place,
    icon,
    price,
    start,
    imageUrl
}) => {
    let Icon: any = null
    if (icon) Icon = icon
    return (
        <Link href={'/detail/1'} className='w-[247px] sm:w-full h-[220px] select-none cursor-pointer'>
            <div className=' shadow-gray rounded-[10px] relative'>
                <div className='h-[140px]'>
                    <Image
                        src={imageUrl}
                        width={247}
                        height={140}
                        alt='imageUrl'
                        className='object-cover h-full w-full rounded-t-[10px] bg-center'
                    />
                </div>
                <div className='h-3 w-3 absolute top-2 left-2 bg-[#E3E3E3] rounded-md flex justify-center items-center'>
                    <Place className='w-[5.5px] h-[7.5px]' />
                </div>

                <div className='bg-white rounded-b-[10px] h-full relative'>
                    {/* type room card */}
                    <div className='flex justify-start absolute -top-3 left-0'>
                        <div className='flex items-center justify-between rounded-[5px] px-[10.5px] py-1 bg-primary shrink w-[134px] h-[23px]'>
                            <p className='font-montserrat text-[11px] font-medium text-nowrap overflow-hidden line-clamp-1'>
                                {typeRoom}
                            </p>
                            <span className='self-center text-[10px]'>🏨</span>
                        </div>
                    </div>
                    {/* content */}
                    <div className='px-3 pt-[18px] h-20'>
                        <p className='text-[10px] leading-tight font-bold font-montserrat'>
                            {title} - {place}
                        </p>
                        {start && (
                            <div className='flex justify-start gap-1 mb-[11px] mt-1'>
                                {renderStart(start)}
                            </div>
                        )}
                        <p className='font-bold text-[10px] leading-tight font-montserrat'>
                            {formatter.format(price)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardNormal
