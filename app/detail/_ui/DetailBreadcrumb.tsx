import Link from 'next/link'
import React from 'react'
interface DetailBreadcrumb {
    place: string
    hotel: string
}
const DetailBreadcrumb: React.FC<DetailBreadcrumb> = ({ place, hotel }) => {
    return (
        <div className='flex items-center gap-2 font-bold text-[12px] md:text-[15px] font-montserrat'>
            <Link href='/'>Home</Link>
            <svg
                className='font-normal'
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'>
                <path d='M1 1L6.5 6.5L1 12' stroke='black' strokeLinecap='round' />
            </svg>
            <Link href='/'>Jakarta</Link>
            <svg
                className='font-normal'
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='13'
                viewBox='0 0 8 13'
                fill='none'>
                <path d='M1 1L6.5 6.5L1 12' stroke='black' strokeLinecap='round' />
            </svg>
            <span>Hotel Gran Melia Jakarta</span>
        </div>
    )
}

export default DetailBreadcrumb
