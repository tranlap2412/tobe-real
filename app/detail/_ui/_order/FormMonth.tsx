import React, { useState } from 'react'
interface FormMonthProps {
    onClick: (state:boolean) => void;
}
const FormMonth:React.FC<FormMonthProps> = ({onClick}) => {
    const [monthly, setMonthly] = useState({
        checkin: '2024-01-03',
        checkout: '2024-01-03',
        duration: '1 Monthly',
        visitor: 1
    })

    return (
        <div className='h-full flex flex-col justify-between w-full'>
            {/* Form top input  */}
            <div>
                <div className='flex items-center flex-wrap justify-start lg:justify-between gap-3 px-[10px]'>
                    <div className='flex flex-col'>
                        <label htmlFor='checkIn' className='text-[13px] leading-4 mb-1'>
                            Check-In
                        </label>
                        <input
                            type='date'
                            id='checkIn'
                            value={monthly.checkin}
                            className='datepicker-input  h-[27px] w-[110px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-3'
                            onChange={(e) =>
                                setMonthly((prev) => {
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
                            value={monthly.checkout}
                            className='datepicker-input  h-[27px] w-[110px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-3'
                            onChange={(e) =>
                                setMonthly((prev) => {
                                    return {
                                        ...prev,
                                        checkout: e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
                <div className='flex items-center flex-wrap justify-start lg:justify-between gap-3 px-[10px] pt-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='checkIn' className='text-[13px] leading-4 mb-1'>
                            Duration
                        </label>
                        <input
                            type='text'
                            id='checkIn'
                            value={monthly.duration}
                            className='datepicker-input  h-[27px] w-[110px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-3'
                            onChange={(e) =>
                                setMonthly((prev) => {
                                    return {
                                        ...prev,
                                        duration: e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='checkOut' className='text-[13px] leading-4 mb-1'>
                            Visitor
                        </label>
                        <input
                            type='number'
                            id='checkOut'
                            value={monthly.visitor}
                            className='datepicker-input  h-[27px] w-[110px] rounded-[5px] border border-[#cdcdcd] text-[10px] leading-3 font-medium
                            focus:outline-none pl-3'
                            onChange={(e) =>
                                setMonthly((prev) => {
                                    return {
                                        ...prev,
                                        visitor: +e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Order bottom */}
            <div className='flex flex-col items-stretch mt-5 xl:mt-0'>
                {/* total */}
                <div className='font-medium font-montserrat leading-5 flex justify-start lg:justify-between mb-6 px-4'>
                    <span>Total:</span>
                    <span>$ 49,888,300</span>
                </div>
                <p
                    className='text-center underline font-medium font-montserrat cursor-pointer 
                hover:text-primary hover:no-underline mb-10 lg:mb-5 xl:mb-10 text-[13px] leading-4'
                   onClick={() => onClick(true)}
                   >
                    Important information
                </p>
                <button
                    className='h-12 w-[150px] mx-auto rounded-[30px] text-[18px] leading-5 font-medium text-center bg-gradient-right mb-8
                    hover:shadow-yellow transition duaration-200'>
                    New Order
                </button>
            </div>
        </div>
    )
}

export default FormMonth
