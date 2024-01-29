'use client'
import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
const InformationNotion = ({onClick}:{onClick:(state:boolean)=>void}) => {
    return (
        <div className='px-1 pb-5 font-montserrat text-[13px] text-center re'>
            <p className='font-bold mb-8'>Important information</p>
            <p className='font-medium leading-4'>
                Include Electricity & Water - Include Maintenance Fee - Include
                Complimentary Internet - Include Complimentary Daily Housekeeping Service
                - Include Complimentary 2 pieces of Laundry Service per day per person
                non-accumulative, excluding dry cleaning and pressing
            </p>

            <p className='font-medium leading-4 mt-8'>
                <b>Planning to Stay Longer?</b> <br />
                Rental prices and availability may change at any time. We recommend a
                long-term rental with a monthly installment payment method to avoid an
                increase in the unit price when the lease is extended.
            </p>
            <FaAngleLeft size={40} className='absolute top-2 lg:top-1 xl:top-2 left-0 p-2 cursor-pointer hover:drop-shadow-md' 
            onClick={() => onClick(false)}
            />
        </div>
    )
}

export default InformationNotion
