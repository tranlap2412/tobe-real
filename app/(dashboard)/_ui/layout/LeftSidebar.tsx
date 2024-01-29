'use client'
import React from 'react'
import Image from 'next/image'
import { lato } from '@/assets/styles/fonts'
import { usePathname,useRouter } from 'next/navigation'
import '../../_style/layoutstyle.css'
const LeftSidebar = ({isShowSidebar,toggleSidebar}:{isShowSidebar: boolean, toggleSidebar:any}) => {
    const pathName = usePathname()
    const router = useRouter()
    const pathname = '/'+ pathName.split('/')[1]
    const handleClick = (path:string) => {
        toggleSidebar()
        router.push(path)
    }
    return (
            <div
                className={`dashboard__left-sidebar fixed h-screen w-[var(--leftsidebar-width)] sm:shadow-md left-sidebar-bg z-[10] 
                transition duration-300
                ${lato.className}
                ${isShowSidebar? 'translate-x-0': '-translate-x-full xl:translate-x-0'}`}>
                
                <div className='h-full w-full pt-10'>
                    <div className='flex justify-center items-center'>
                            <div className='pb-4 cursor-pointer transition duration-200'>
                                <Image
                                    src={'/dashboard/images/signal-logo.png'}
                                    height={148}
                                    width={112}
                                    alt='sidebar-logo.svg'
                                    className='w-[112px] h-auto'
                                    onClick={() => handleClick('/')}
                                />
                            </div>
                    </div>
                    {/* sidebar list */}
                    <ul className='pr-4 pl-3 lg:pl-10'>
                        <li>
                            <div
                                onClick={() => handleClick('/booking')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/booking'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='mr-2 md:mr-5'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='19'
                                        height='18'
                                        viewBox='0 0 19 18'
                                        fill='none'>
                                        <path
                                            d='M7.07324 16.9377C7.49237 16.9377 7.83214 16.598 7.83214 16.1788C7.83214 15.7597 7.49237 15.4199 7.07324 15.4199C6.6541 15.4199 6.31433 15.7597 6.31433 16.1788C6.31433 16.598 6.6541 16.9377 7.07324 16.9377Z'
                                            stroke={`${
                                                pathname === '/booking'
                                                    ? '#F0B90B'
                                                    : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M15.4199 16.9377C15.839 16.9377 16.1788 16.598 16.1788 16.1788C16.1788 15.7597 15.839 15.4199 15.4199 15.4199C15.0008 15.4199 14.661 15.7597 14.661 16.1788C14.661 16.598 15.0008 16.9377 15.4199 16.9377Z'
                                            stroke={`${
                                                pathname === '/booking'
                                                    ? '#F0B90B'
                                                    : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M1 1H4.03563L6.0695 11.1618C6.13889 11.5112 6.32897 11.825 6.60646 12.0484C6.88394 12.2718 7.23115 12.3904 7.58731 12.3836H14.9639C15.32 12.3904 15.6673 12.2718 15.9447 12.0484C16.2222 11.825 16.4123 11.5112 16.4817 11.1618L17.6959 4.79453H4.79453'
                                            stroke={`${
                                                pathname === '/booking'
                                                    ? '#F0B90B'
                                                    : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>My Bookings</p>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('/posting')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='mr-2 md:mr-5'>
                                    <svg
                                        width='16'
                                        height='18'
                                        viewBox='0 0 16 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M9.58785 0.992188H3.18222C2.7575 0.992188 2.35017 1.16091 2.04985 1.46123C1.74953 1.76155 1.58081 2.16888 1.58081 2.59359V15.4049C1.58081 15.8296 1.74953 16.2369 2.04985 16.5372C2.35017 16.8375 2.7575 17.0063 3.18222 17.0063H12.7907C13.2154 17.0063 13.6227 16.8375 13.923 16.5372C14.2233 16.2369 14.3921 15.8296 14.3921 15.4049V5.79641L9.58785 0.992188Z'
                                            stroke={`${
                                                pathname === '/' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M9.58789 0.992188V5.79641H14.3921'
                                            stroke={`${
                                                pathname === '/' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>Offer History</p>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('/posting')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='mr-2 md:mr-5'>
                                    <svg
                                        width='16'
                                        height='18'
                                        viewBox='0 0 16 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M9.58785 0.992188H3.18222C2.7575 0.992188 2.35017 1.16091 2.04985 1.46123C1.74953 1.76155 1.58081 2.16888 1.58081 2.59359V15.4049C1.58081 15.8296 1.74953 16.2369 2.04985 16.5372C2.35017 16.8375 2.7575 17.0063 3.18222 17.0063H12.7907C13.2154 17.0063 13.6227 16.8375 13.923 16.5372C14.2233 16.2369 14.3921 15.8296 14.3921 15.4049V5.79641L9.58785 0.992188Z'
                                            stroke={`${
                                                pathname === '/' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M9.58789 0.992188V5.79641H14.3921'
                                            stroke={`${
                                                pathname === '/' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>Transaction History</p>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('/posting')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/reward'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='-ml-[6px] mr-[5px] md:mr-[14px]'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='25'
                                        height='24'
                                        viewBox='0 0 25 24'
                                        fill='none'>
                                        <path
                                            d='M12.986 14.4516C16.1445 14.4516 18.705 11.8911 18.705 8.73261C18.705 5.57413 16.1445 3.01367 12.986 3.01367C9.82755 3.01367 7.26709 5.57413 7.26709 8.73261C7.26709 11.8911 9.82755 14.4516 12.986 14.4516Z'
                                            stroke={`${
                                                pathname === '/reward' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M9.88968 14.2191L8.90112 21.6619L12.9861 19.2109L17.071 21.6619L16.0825 14.2109'
                                            stroke={`${
                                                pathname === '/reward' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>TOBE REAL Rewards</p>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('/profile')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/profile'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='mr-2 md:mr-5'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='20'
                                        viewBox='0 0 18 20'
                                        fill='none'>
                                        <path
                                            d='M16.7862 18.7597V16.7864C16.7862 15.7397 16.3705 14.7359 15.6303 13.9958C14.8902 13.2556 13.8864 12.8398 12.8397 12.8398H4.94656C3.89987 12.8398 2.89605 13.2556 2.15592 13.9958C1.4158 14.7359 1 15.7397 1 16.7864V18.7597'
                                            stroke={`${
                                                pathname === '/profile'
                                                    ? '#F0B90B'
                                                    : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M8.89261 8.89312C11.0722 8.89312 12.8392 7.12619 12.8392 4.94656C12.8392 2.76694 11.0722 1 8.89261 1C6.71298 1 4.94604 2.76694 4.94604 4.94656C4.94604 7.12619 6.71298 8.89312 8.89261 8.89312Z'
                                            stroke={`${
                                                pathname === '/profile'
                                                    ? '#F0B90B'
                                                    : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>My ProFile</p>
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handleClick('/posting')}
                                className={`flex items-center pl-2 md:pl-5  h-10 rounded-[4px] mb-3 ${
                                    pathname === '/posting'
                                        ? 'bg-black text-primary'
                                        : 'text-[#cfcfcf] hover:shadow-gray'
                                } cursor-pointer transition-all duration-200`}>
                                <span className='mr-2 md:mr-5'>
                                    <svg
                                        width='16'
                                        height='18'
                                        viewBox='0 0 16 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M9.58785 0.992188H3.18222C2.7575 0.992188 2.35017 1.16091 2.04985 1.46123C1.74953 1.76155 1.58081 2.16888 1.58081 2.59359V15.4049C1.58081 15.8296 1.74953 16.2369 2.04985 16.5372C2.35017 16.8375 2.7575 17.0063 3.18222 17.0063H12.7907C13.2154 17.0063 13.6227 16.8375 13.923 16.5372C14.2233 16.2369 14.3921 15.8296 14.3921 15.4049V5.79641L9.58785 0.992188Z'
                                            stroke={`${
                                                pathname === '/posting' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M9.58789 0.992188V5.79641H14.3921'
                                            stroke={`${
                                                pathname === '/posting' ? '#F0B90B' : '#c7c7c7'
                                            }`}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </span>
                                <p className='text-sm'>Posting package</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default LeftSidebar
