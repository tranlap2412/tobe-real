import React, { useState } from 'react'
import Image from 'next/image'
const FormDaily = () => {
    const [daily, setDaily] = useState({
        checkin: '2024-01-03',
        checkout: '2024-01-03',
        roomQuantity: 1
    })
    return (
        <div className='h-full flex flex-col justify-between w-full'>
            {/* Form top input  */}
            <div className='flex items-center flex-wrap justify-start gap-3 lg:justify-between lg:pl-5 xl:pl-0'>
                <div className='flex gap-3 lg:gap-6 xl:gap-3'>
                    <div className='flex flex-col'>
                        <label htmlFor='checkIn' className='text-[13px] leading-4 mb-1'>
                            Check-In
                        </label>
                        <input
                            type='date'
                            id='checkIn'
                            value={daily.checkin}
                            className='datepicker-input h-[27px] w-[86px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-1'
                            onChange={(e) =>
                                setDaily((prev) => {
                                    return {
                                        ...prev,
                                        checkin: e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='checkOut' className='text-[13px] leading-4 mb-1'>
                            Check-Out
                        </label>
                        <input
                            type='date'
                            id='checkOut'
                            value={daily.checkout}
                            className='datepicker-input h-[27px] w-[86px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-1'
                            onChange={(e) =>
                                setDaily((prev) => {
                                    return {
                                        ...prev,
                                        checkout: e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:mt-3 xl:mt-0'>
                    <label htmlFor='roomQuatity' className='text-[13px] leading-4 mb-1'>
                        Room
                    </label>
                    <input
                        type='number'
                        id='roomQuatity'
                        value={daily.roomQuantity}
                        className='datepicker-input h-[27px] w-[86px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                        focus:outline-none pl-1'
                        onChange={(e) =>
                            setDaily((prev) => {
                                return {
                                    ...prev,
                                    roomQuantity: +e.target.value
                                }
                            })
                        }
                    />
                </div>
            </div>

            {/* Order bottom */}
            <div className='flex flex-col items-stretch'>
                <div className='border border-[#d8d8d8] mb-6'>
                    <div className='flex justify-center items-center h-[30px] cursor-pointer gap-2'>
                        <Image
                            src={'/images/detail-hotel/use-coupons.svg'}
                            height={10}
                            width={21}
                            alt={'use-coupons.svg'}
                            className='w-[21px] h-auto object-cover'
                        />
                        <span className='text-[13px] leading-4'>Use Coupons</span>
                    </div>
                </div>
                <button
                    className='h-12 w-[150px] mx-auto rounded-[30px] text-[18px] leading-5 font-medium text-center bg-gradient-right mb-8 lg:mb-[22px] xl:mb-8
                    hover:shadow-yellow transition duaration-200'>
                    New Order
                </button>
            </div>
        </div>
    )
}

export default FormDaily
