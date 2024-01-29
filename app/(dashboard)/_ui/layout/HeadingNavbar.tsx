import React from 'react'
import { inter } from '@/assets/styles/fonts'
import Image from 'next/image'
import Mail from '@/icons/Header-Dashboard/Mail'
import Bell from '@/icons/Header-Dashboard/Bell'
import { IoIosMenu } from 'react-icons/io'
type Props = {
    title: string
    isShowSidebar: boolean
    toggleSidebar: any
}
const HeadingNavbar = ({ title, isShowSidebar, toggleSidebar }: Props) => {
    
    return (
        <div className={`fixed top-0 right-0 w-full xl:pl-[var(--leftsidebar-width)] h-[var(--navbar-height)] 
            z-[2] transition-all duration-300 bg-white shadow-[0_3px_12px_0_rgba(0,0,0,0.1)]
            ${ isShowSidebar ? 'lg:pl-[var(--leftsidebar-width)]' : '' }`}
        >
            {/* wrapper */}
            <div className={`pr-4 pl-2 md:pr-8 md:pl-5 xl:px-12 h-full xl:pt-3 ${inter.className} flex justify-between items-center`}>
                <div className='flex justify-center items-center'>
                    {/* menu-icon on mobile */}
                    <div
                        className='sm:px-3 py-3 cursor-pointer hover:drop-shadow-md block xl:hidden'
                        onClick={() => {
                            toggleSidebar()
                        }}>
                        <IoIosMenu size={30} />
                    </div>
                    <h2 className='leading-tight sm:text-xl xl:text-[44px] pl-3 xl:pl-0 font-bold'>
                        {title}
                    </h2>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='hidden sm:block'><Mail/></div>
                    <div className='hidden sm:block'><Bell/></div>
                    <div className='flex flex-row items-center'>
                            <Image
                                src={'/dashboard/images/das-posting/avatar.jpg'}
                                height={43}
                                width={43}
                                className='w-[30px] h-[30px] sm:w-[43px] sm:h-[43px] rounded-full object-cover bg-opacity-85 flex-grow flex-shrink-0'
                                alt='avatar.jpg'
                            />
                        <div className='ml-[6px] sm:ml-3'>
                            <p className='font-semibold text-[12px] sm:text-sm md:text-[16px] text-[#404040] mb-0 md:mb-2'>Andrew</p>
                            <p className='text-[10px] sm:text-sm md:text-[16px] text-[#404040]'>$4,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingNavbar
