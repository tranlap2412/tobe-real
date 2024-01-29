import React from 'react'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import { inter } from '@/assets/styles/fonts'
import './style-booking.css'
import Image from 'next/image'
import CardBooking from './CardBooking'
import { listBooking } from '@/dummy-data/dashboard/booking/data'
const Booking = () => {
    return (
        <DashboardLayout title='My Bookings'>
            <div
                className={`sm:pt-14 pt-7 px-4 md:px-10 xl:pl-[41px] xl:pr-[90px] min-h-[300px] pb-14 ${inter.className} `}>
                {/* <div className='my-booking__head my-booking__head--grid mb-6'> */}
                <div className='grid grid-cols-12 mb-6 border border-[#b7b7b7] rounded-[10px] h-[48px] sm:h-[60px] lg:h-[70px]'>
                    <div className=''></div>
                    <div className='xl:col-span-4 col-span-10 sm:col-span-5 text-center h-full flex justify-start items-center 
                    lg:text-xl text-[16px] leading-tight'>
                        Place to Rent
                    </div>
                    <div className='hidden sm:flex col-span-2 text-center h-full justify-center items-center lg:text-xl leading-tight'>
                        Room Number
                    </div>
                    <div className='hidden sm:flex col-span-1 text-center h-full justify-center items-center lg:text-xl leading-tight'>
                        Time
                    </div>
                    <div className='hidden sm:flex col-span-2 text-center h-full justify-center items-center lg:text-xl leading-tight'>
                        Price
                    </div>
                    <div className='xl:col-span-2 col-span-1'></div>
                </div>

                {listBooking.map((item) => (
                    <CardBooking 
                        key={item.id}
                        id={item.id}
                        nameHotel={item.nameHotel}
                        hotelType={item.hotelType}
                        place={item.place}
                        roomNumber={item.roomNumber}
                        day={item.day}
                        price={item.price}
                    />
                ))}
                
            </div>
        </DashboardLayout>
    )
}

export default Booking
