import React, { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import MainLayout from '@/layouts/MainLayout'
import DetailBreadcrumb from '../_ui/DetailBreadcrumb'
import ImageHighlight from '../_ui/ImageHighlight'
import HeartItemAction from '../_ui/HeartItemAction'
import DetailProperty from '../_ui/DetailProperty'
import AboutHotel from '../_ui/AboutHotel'
import { renderStart } from '@/lib/render'
import OtherAccommodation from '../_ui/OtherAccommodation'
import OrtherApartmentOption from '../_ui/OrtherApartmentOption'
import {
    ListHotelImageDemo,
    listUnitFacillities,
    listAbout,
    propertyList
} from '../_model/detailData'
import { inter } from '@/assets/styles/fonts'
import FormDetailBooking from '../_ui/FormDetailBooking'
type Props = {
    params: {
        hotel_id: string
    }
}
// can use async to get data to generate
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const head = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hotel VN - ${params.hotel_id}`)
        }, 1000)
    })
    return {
        title: `${head}`
    }
}

function DetailHotel() {
    return (
        <MainLayout>
            <div className='container mx-auto min-h-[1800px] font-montserrat pt-3 sm:pt-10 pb-36 '>
                <div className='px-3 lg:px-6 xl:px-16 '>
                    {/* Breadcrum Render */}
                    <DetailBreadcrumb place='Jakarta' hotel='Gran Melia Jakarta' />

                    {/* Group Image */}
                    <div className='py-3 md:mb-6 xl:mb-12'>
                        <ImageHighlight listImage={ListHotelImageDemo} />
                    </div>

                    {/* Content */}
                    <div className='flex flex-col lg:flex-row mb-14'>
                        {/* col left */}
                        <div className='lg:max-w-[66.6667%] lg:basis-[66.6667%] xl:max-w-[69%] xl:basis-[69%] flex-grow min-h-20 mb-6 lg:pr-5 xl:px-2'>
                            {/* title */}
                            {/* <div className='flex items-center flex-wrap md:flex-nowrap gap-2 sm:gap-[30px] lg:justify-between lg:pr-8 mb-4 sm:mb-0'> */}
                            <div className='flex items-center flex-wrap md:flex-nowrap gap-2 sm:gap-[30px] lg:pr-8 mb-4 sm:mb-0'>
                                <h2 className='text-sm sm:text-[18px] leading-tight flex-grow-0 xl:text-2xl font-bold'>
                                    Gran Melia Hotel Jakarta - Jakarta
                                </h2>
                                <div className='flex items-center flex-grow sm:flex-grow-0 sm:gap-7'>
                                    <div className='h-9 sm:h-14 w-48 sm:w-32 sm:text-[16px] text-sm font-bold text-center leading-[24px] py-1 bg-primary rounded-[5px] flex justify-center items-center'>
                                        Hotel Residence 🏨
                                    </div>
                                    {/* Heart icon */}
                                    <div className='ml-auto sm:ml-0'><HeartItemAction liked={true} /></div>
                                </div>
                            </div>
                            {/* Rating */}
                            <div className='flex item-center gap-2 mb-5'>
                                {renderStart(4, 24)}
                            </div>

                            {/* Address */}
                            <div className='flex items-center gap-5 mb-4 sm:mb-[30px]'>
                                <p className='text-[#909090] font-bold text-[10px]'>
                                    Jl. HR Rasuna Said Kav X-0 Kuningan, Setiabudi, South
                                    Jakarta 12950 - Property ID: C3D3AEC8A
                                </p>
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='23'
                                        height='28'
                                        viewBox='0 0 23 28'
                                        fill='none'>
                                        <g clipPath='url(#clip0_49_62)'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M7.84 24.8L14.94 27.16V15.46C14.72 15.79 14.61 16.11 14.4 16.32V26.41L8.38 24.49V13.53C8.16 13.2 8.05 12.9 7.84 12.57V24.8ZM22.78 24.8L15.79 27.16V14.08C15.89 13.75 16.12 13.43 16.22 13.1V26.53L22.34 24.49V7.74L18.15 9.13C18.25 8.92 18.25 8.7 18.36 8.5L22.77 6.99V24.8H22.78ZM12.15 17.5C12.68 16.75 13.86 14.83 14.94 12.67C16.34 10.1 17.62 7.31 17.62 5.9V5.8C17.62 5.15 17.52 4.41 17.19 3.86C16.98 3.11 16.55 2.58 16.01 2.04C15.58 1.61 14.94 1.17 14.3 0.96C13.65 0.63 12.89 0.53 12.15 0.53C11.5 0.53 10.75 0.63 10.1 0.96C9.45 1.17 8.81 1.61 8.38 2.04C7.84 2.57 7.42 3.1 7.2 3.86C6.87 4.41 6.77 5.14 6.77 5.9C6.77 7.3 8.05 10.1 9.45 12.67C10.52 14.83 11.71 16.75 12.15 17.5ZM13.43 6.01C13.11 5.7 12.68 5.48 12.15 5.48C11.71 5.48 11.28 5.7 10.97 6.01C10.64 6.34 10.42 6.76 10.42 7.19C10.42 7.74 10.64 8.17 10.97 8.49C11.29 8.82 11.71 8.92 12.15 8.92C12.68 8.92 13.12 8.82 13.43 8.49C13.76 8.16 13.97 7.74 13.97 7.19C13.97 6.76 13.76 6.33 13.43 6.01ZM12.15 5.05C12.78 5.05 13.33 5.27 13.76 5.7C14.19 6.13 14.4 6.66 14.4 7.19C14.4 7.84 14.19 8.37 13.76 8.82C13.33 9.13 12.78 9.45 12.15 9.45C11.6 9.45 10.97 9.12 10.64 8.82C10.2 8.37 9.99 7.84 9.99 7.19C9.99 6.66 10.2 6.13 10.64 5.7C10.97 5.27 11.6 5.05 12.15 5.05ZM18.16 5.91C18.16 9.03 12.47 18.04 12.47 18.16H12.36L12.15 18.49L12.04 18.16H11.93C11.83 17.94 6.23 9.03 6.23 5.91C6.23 5.05 6.34 4.3 6.66 3.67C6.98 2.92 7.42 2.27 7.95 1.73C8.49 1.18 9.23 0.75 9.89 0.45C10.64 0.23 11.39 0 12.15 0C13.01 0 13.76 0.22 14.51 0.45C15.15 0.76 15.9 1.19 16.44 1.73C16.98 2.26 17.41 2.91 17.73 3.67C17.94 4.3 18.16 4.95 18.16 5.59V5.92V5.91ZM7.09 24.92L0 27.27V9.45L5.69 7.63C5.79 7.73 5.79 7.94 5.9 8.06L0.53 9.88V26.63L6.55 24.59V9.88C6.76 10.31 6.87 10.63 7.08 11.06V24.92H7.09Z'
                                                fill='black'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_49_62'>
                                                <rect
                                                    width='22.79'
                                                    height='27.27'
                                                    fill='white'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>

                            {/* Description */}
                            <p className='py-4 mb-6 max-sm:max-w-[567px] lg:max-w-[567px] text-[#909090] font-bold text-[10px] border-t border-b  border-[#e3e3e3]'>
                                This accommodation is rented on a monthly basis and
                                includes: 1. Maintenance fee 2. Electricity & Water 3.
                                Internet 4. Daily Housekeeping 5. Laundry 2 free clothes /
                                day, not accumulative, does not include dry cleaning and
                                ironing services. (View more)
                            </p>

                            {/* Property */}
                            <div className='mb-2'>
                                <DetailProperty />
                            </div>

                            {/* Unit Facilities */}
                            <div className='pl-5'>
                                <p className='text-[10px] font-bold mb-2'>
                                    Unit Facilities
                                </p>
                                <div className='row sm-gutters sm:pr-24'>
                                    {listUnitFacillities.map((facillity, index) => (
                                        <div
                                            className='col c-6 sm-4'
                                            key={index}>
                                            {/* <div className='pr-10 flex items-center justify-start'> */}
                                            <div className='flex items-center justify-start'>
                                                <span className='flex-shrink-0'>
                                                    <svg
                                                        className='mr-[10px]'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='14'
                                                        height='13'
                                                        viewBox='0 0 14 13'
                                                        fill='none'>
                                                        <path
                                                            d='M2 6L6 10L12 2'
                                                            stroke='#00FF47'
                                                            strokeWidth='3'
                                                            strokeLinecap='round'
                                                        />
                                                    </svg>
                                                </span>
                                                <p className='text-[10px] font-medium leading-4'>
                                                    {facillity}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className='h-[60px] font-bold pl-3 border-t border-b border-[#e3e3e3] mb-5  xl:mr-24 flex items-center mt-[30px]'>
                                Additional Information
                            </p>

                            {/* Q&A - Discussion Of This Property */}
                            <div className='max-w-[500px]'>
                                <p className='pl-3 font-bold mb-4'>
                                    Q&A - Discussion Of This Property
                                </p>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='h-[30px] pl-6 py-2 max-w-[480px] w-full rounded-[5px] border border-[#dcdcdc] mb-4 focus:outline-none'
                                />
                                <div className='max-w-[480px]'>
                                    <textarea
                                        placeholder='Content'
                                        className='h-[50px] pl-6 py-2 w-full rounded-[5px] border border-[#dcdcdc] focus:outline-none'
                                    />
                                </div>
                                <button
                                    className='h-12 w-[150px] rounded-[30px] px-8 text-[18px] font-medium text-center bg-gradient-right mt-4
                                hover:shadow-yellow transition duaration-200'>
                                    Send
                                </button>
                            </div>

                            {/* About Hotel */}
                            <div className='md:pl-3 pt-8 lg:mr-24'>
                                <AboutHotel
                                    description='Hotel Gran Melia Jakarta menawarkan penginapan mewah dan nyaman, cocok bagi mereka yang mencari pengalaman canggih di Jakarta. Baik Anda berada di sini untuk keperluan bisnis maupun liburan, Anda akan menemukan properti ini sebagai oase yang nyaman di tengah suasana kota yang semarak.'
                                    listAbout={listAbout}
                                />
                            </div>
                        </div>
                        {/* col right */}
                        
                        <div
                            className={`sm:max-w-full  lg:max-w-[33.3333%]  lg:basis-[33.3333%] xl:max-w-[31%] xl:basis-[31%] flex-shrink-0 ${inter.className} `}>
                            <div className='w-full mx-auto shadow-yellow bg-white border border-primary/30 sticky top-[110px]'>
                                {/* head-card */}
                                <div className='lg:h-[48px] xl:h-[54px] w-full flex items-center justify-end pr-5 bg-primary '>
                                    <div className='flex items-center justify-end cursor-pointer py-2 group'>
                                        <span className='lg:text-xl xl:text-2xl font-medium'>
                                            USD
                                        </span>
                                        <Image
                                            src={'/images/detail-hotel/current-down.svg'}
                                            height={12}
                                            width={17}
                                            alt=''
                                            className='w-4 h-auto object-contain ml-3 group-hover:drop-shadow-md'
                                        />
                                    </div>
                                </div>
                                {/* body */}
                                <FormDetailBooking />
                            </div>
                        </div>
                    </div>

                    {/* Other Accommodation Recommendations */}
                    <h2 className='text-[18px] leading-[22px] sm:leading-6 sm:text-2xl font-bold text-center mb-3'>
                        Other Accommodation Recommendations
                    </h2>
                    <OtherAccommodation />
                    {/* Check Other Apartment Options */}
                    <h2 className='text-[18px] leading-[22px] sm:leading-6 sm:text-2xl font-bold text-center mb-3 pt-3'>
                        Check Other Apartment Options
                    </h2>
                    <OrtherApartmentOption />
                </div>
            </div>
        </MainLayout>
    )
}

export default DetailHotel
