'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import BookingRent from './BookingRent'
interface HeadBookingProps {
    toggleTab: string, 
    setToggleTab: any
}
const HeadBooking:React.FC<HeadBookingProps> = ({toggleTab, setToggleTab}) => {
    return (
        <div className='container mx-auto'>
            <div className='-mt-[50px] sm:-mt-[130px] h-[188px] w-full flex justify-center items-center px-2 md:px-20 lg:px-5 xl:px-[115px]'>
                <div className='h-full w-full relative rounded-[20px]'>
                    {/* option booking */}  
                    <div className='absolute top-0 left-0 h-[70px] w-full sm:w-[304px] bg-white rounded-t-[20px] shadow-yellow'>
                        <div className='flex justify-evenly w-full pt-3'>
                            <p className={`font-montserrat font-bold text-lg py-1 px-5  text-center cursor-pointer ${
                                toggleTab === 'rent' ? 'text-primary' : '' 
                            }`}
                            onClick={() => setToggleTab('rent')}>
                                Rent
                            </p>
                            <p className={`font-montserrat font-bold text-lg py-1 px-5 cursor-pointer ${
                                toggleTab === 'buy' ? 'text-primary' : '' 
                            }`}
                            onClick={() => setToggleTab('buy')}>Buy</p>
                        </div>
                    </div>
                    {/* body booking */}
                    <div className={`absolute top-[50px] left-0 z-[1] min-h-[137px] w-full bg-white rounded-tl-none rounded-[20px] shadow-yellow`}>
                        <div className='relative'>
                            {/* vector under of option */}
                            <div className=' w-full sm:w-[304px] flex justify-evenly'>
                                <div className='w-[94px]'>
                                    <Image
                                        src={'/images/home/vector/rent-vector.svg'}
                                        width={94}
                                        height={2}
                                        className={`w-full h-full ${toggleTab==='rent' ? '' : 'hidden'}`}
                                        alt='rent-vector.svg'
                                    />
                                </div>
                                <div className='w-[94px]'>
                                    <Image
                                        src={'/images/home/vector/rent-vector.svg'}
                                        width={94}
                                        height={2}
                                        className={`w-full h-full ${toggleTab==='buy' ? '' : 'hidden'}`}
                                        alt='rent-vector.svg'
                                    />
                                </div>
                            </div>
    
                            {/* BookingRent component */}
                            <BookingRent toggleTab={toggleTab} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadBooking
