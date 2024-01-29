'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/features/modal-slice'

interface SidebarProps {
    isShow: boolean
    hiddenSidebar?: any
}
const Sidebar: React.FC<SidebarProps> = ({ isShow, hiddenSidebar }) => {
    const router = useRouter()  
    const dispatch = useDispatch()
    const handleChangeRoute = (path:string) => {
        hiddenSidebar()
        router.push(path)
    }
    return (
        <div className='block lg:hidden'>
            {/* layout */}
            <div
                className={`h-full w-full fixed top-0 left-0 bg-zinc-900 bg-opacity-70 transition duration-300 z-10 ${
                    isShow ? 'block' : 'hidden'
                }`}
                onClick={() => hiddenSidebar()}></div>
            <div
                className={`w-[275px] fixed top-0 right-0 h-full bg-white transition duration-300 z-10 ${
                    isShow ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* btn  */}
                <div className='flex flex-col gap-3 xl:gap-[34px] px-5 pt-5 pb-3'>
                    <button
                        className='border border-primary h-12 min-w-36 rounded-[10px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                        onClick={() => {
                            dispatch(openModal('login'))
                            hiddenSidebar()
                        }}>
                        Login
                    </button>
                    <button
                        className='bg-gradient-right h-12 min-w-36 rounded-[10px] font-montserrat text-lg font-medium hover:shadow-md transiton duration-200'
                        onClick={() => {
                            dispatch(openModal('register'))
                            hiddenSidebar()
                        }}>
                        Register
                    </button>
                </div>
                <ul>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-1.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-1.png'
                                className='w-6 h-6'
                            />
                            <span>Home</span>
                        </div>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/')}>
                            <Image
                                src={'/images/nav/icon-navbar-2.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-2.png'
                                className='w-6 h-6'
                            />
                            <span>Pengelolaan Apartemen</span>
                        </div>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/promotion')}>
                            <Image
                                src={'/images/nav/icon-navbar-3.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-3.png'
                                className='w-6 h-6'
                            />
                            <span>Promotion</span>
                        </div>
                    </li>
                    <li className='px-5 hover:bg-[#e3e3e3] transition duration-200 cursor-pointer'>
                        <div
                            className='flex gap-2 pt-4 pb-3 border-b border-zinc-900/10'
                            onClick={() => handleChangeRoute('/profile')}>
                            <Image
                                src={'/images/nav/icon-navbar-4.png'}
                                width={25}
                                height={25}
                                alt='icon-navbar-4.png'
                                className='w-6 h-6'
                            />
                            <span>Profile</span>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
