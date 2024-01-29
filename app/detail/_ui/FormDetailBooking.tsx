'use client'
import React, { useState } from 'react'
import './css/detail-hotel.css'
import { inter } from '@/assets/styles/fonts'
import FormDaily from './_order/FormDaily'
import FormMonth from './_order/FormMonth'
import FormAnnual from './_order/FormAnnual'
import InformationNotion from './_order/InformationNotion'
const FormDetailBooking = () => {
    const [currentFil, setCurrentFil] = useState('daily')
    const [isShowInformation, setIsShowInformation] = useState(false)

    const handleShowInformation = (state: boolean) => {
        console.log('state :>> ', state)
        setIsShowInformation(state)
    }
    return (
        <div
            className={`w-full ${
                // <div className={`${inter.className} w-full ${
                isShowInformation ? 'h-[full]' : 'xl:h-[464px] lg:h-[400px]'
            }`}>
            <p
                className='py-[2px] p-3 xl:px-4 xl:text-xl leading-5 xl:leading-6 font-bold tracking-wide border-b-[2px] border-[#e3e3e3] h-[50px] xl:h-[60px] 
            text-center lg:text-start flex items-center justify-center'>
                This room is not available for daily bookings.
            </p>
            <div className='pt-3 px-2 xl:px-[22px]'>
                {!isShowInformation ? (
                    <>
                        <div className='max-w-[480px] lg:max-w-auto lg:w-full h-[30px] mx-auto flex item-center border border-[#d8d8d8]'>
                            <span
                                className={`w-full text-center font-medium cursor-pointer hover:shadow-md transition duration-200 select-none ${
                                    currentFil === 'daily' ? 'bg-primary' : ''
                                }`}
                                onClick={() => setCurrentFil('daily')}>
                                Daily
                            </span>
                            <span
                                className={`w-full text-center font-medium cursor-pointer hover:shadow-md transition duration-200 select-none ${
                                    currentFil === 'monthly' ? 'bg-primary' : ''
                                }`}
                                onClick={() => setCurrentFil('monthly')}>
                                Monthly
                            </span>
                            <span
                                className={`w-full text-center font-medium cursor-pointer hover:shadow-md transition duration-200 select-none ${
                                    currentFil === 'annual' ? 'bg-primary' : ''
                                }`}
                                onClick={() => setCurrentFil('annual')}>
                                Annual
                            </span>
                        </div>

                        <div className='pt-5 max-w-[480px] lg:max-w-auto mx-auto h-[355px] lg:h-[300px] xl:h-[355px]'>
                            {currentFil === 'daily' && <FormDaily />}
                            {currentFil === 'monthly' && (
                                <FormMonth onClick={handleShowInformation} />
                            )}
                            {currentFil === 'annual' && (
                                <FormAnnual onClick={handleShowInformation} />
                            )}
                        </div>
                    </>
                ) : (
                    <InformationNotion onClick={handleShowInformation} />
                )}
            </div>
        </div>
    )
}

export default FormDetailBooking
