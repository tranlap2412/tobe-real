import React from 'react'
import Image from 'next/image'
import { formatter } from '@/lib/helper'
interface CardBookingProps {
    id: number,
    nameHotel:string,
    hotelType: string,
    place: string,
    roomNumber: number,
    day: number,
    price: number
}
const CardBooking:React.FC<CardBookingProps> = ({
    id,
    nameHotel,
    hotelType,
    place,
    roomNumber,
    day,
    price
}) => {
    return (
        <>
            {/* cart 1 */}
            <div className='sm:grid hidden grid-cols-12 mb-5 sm:mb-[30px] min-h-[100px] lg:min-h-[135px] shadow-[0_4px_10px_0_rgba(240,185,11,0.5)] bg-white rounded-[10px]'>
                <div className='flex justify-center items-center'>1</div>
                <div className='xl:col-span-4 col-span-5 text-start '>
                    <div className='h-full flex flex-col items-start justify-center '>
                        <p className='font-bold lg:text-xl lg:mb-[16px] leading-[22px]'>
                            Gran Melia Hotel Jakarta - Jakarta
                        </p>
                        <p className='lg:text-xl'>Hotel Residence 🏨</p>
                    </div>
                </div>
                <div className='col-span-2 text-center flex justify-center items-center'>
                    <p className='lg:text-xl leading-tight'>1</p>
                </div>
                <div className='col-span-1 text-center flex justify-center items-center'>
                    <p className='lg:text-xl leading-tight'>1 Day</p>
                </div>
                <div className='col-span-2 text-center flex justify-center items-center'>
                    <p className='lg:text-xl leading-tight'>$ 2,000.00</p>
                </div>
                <div className='xl:col-span-2 col-span-1 text-end flex items-center justify-end pr-3 xl:pr-10'>
                    <span>
                        <Image
                            src={'/dashboard/images/my-booking/close-icon.svg'}
                            height={31}
                            width={31}
                            alt='close-icon.svg'
                            className='w-[31px] h-auto object-cover cursor-pointer hover:drop-shadow-md'
                        />
                    </span>
                </div>
            </div>
            {/* mobile */}
            <div className='flex sm:hidden min-h-[150px] shadow-[0_4px_10px_0_rgba(240,185,11,0.5)] mb-[30px]  justify-center items-center bg-white rounded-[10px]'>
                <div className='grid grid-cols-12 w-full px-3'>
                    <div className='col-span-1 text-end flex items-center justify-center'>
                        1
                    </div>
                    <div className='col-span-10 flex flex-col py-3 pl-2'>
                        <p className='font-bold text-sm leading-tight'>
                            Gran Melia Hotel Jakarta Melia Hotel Jakarta - Jakarta
                        </p>
                        <p className='text-[12px] leading-tight mt-1'>
                            Hotel Residence 🏨
                        </p>
                        {/* space */}
                        <div className='w-1/2 h-px bg-[#cdcdcd] my-2'></div>
                        <div className='flex gap-5 mb-[6px] ml-2'>
                            <p className='text-[12px] leading-tight'>
                                Room Number: <span>1</span>
                            </p>
                            <p className='text-[12px] leading-tight'>
                                Times: <span>1 Day</span>
                            </p>
                        </div>
                        <p className='text-[12px] leading-tight  ml-2'>
                            Price: <span>$ 2,000.00</span>
                        </p>
                    </div>
                    <div className='col-span-1 text-end flex items-center justify-end '>
                        <span>
                            <Image
                                src={'/dashboard/images/my-booking/close-icon.svg'}
                                height={31}
                                width={31}
                                alt='close-icon.svg'
                                className='w-[31px] h-auto object-cover cursor-pointer hover:drop-shadow-md'
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBooking
