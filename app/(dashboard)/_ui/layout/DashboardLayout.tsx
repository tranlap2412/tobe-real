'use client'
import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import HeadingNavbar from './HeadingNavbar'
import { popins } from '@/assets/styles/fonts'
import '../../_style/layoutstyle.css'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { toggleLeftSidebar } from '@/redux/features/dashboard-left-sidebar'
type Props = {
    children: React.ReactNode
    title: string
}
const DashboardLayout = ({ title, children }: Props) => {
    const dispatch = useDispatch()
    const isShowSidebar = useAppSelector((state) => state.leftsidebarReducer.isShowLeftSidebar)
    const toggleSidebar = () => {
        dispatch(toggleLeftSidebar())
    }
    return (
        <div className={`${popins.className}`}>
            <HeadingNavbar title={title} isShowSidebar={isShowSidebar} toggleSidebar={toggleSidebar}/>
            
            <LeftSidebar isShowSidebar={isShowSidebar} toggleSidebar={toggleSidebar}/>
            
            <div className={`pl-0 xl:pl-[var(--leftsidebar-width)] pt-[var(--navbar-height)] relative transition-all duration-300 ${
                isShowSidebar ? 'lg:pl-[var(--leftsidebar-width)]' : ''}`}
            >
                <div className='dashboard-playout__bg'></div>
                <div className='dashboard-playout__page invisible-scrollbar'>{children}</div>
            </div>

            {/* Layout sidebar*/}
            {isShowSidebar && <div className={`block lg:hidden fixed top-0 left-0 bottom-0 right-0 bg-zinc-600/50 z-[3] transition-all duration-300 ${
                isShowSidebar ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleSidebar}
            ></div>}
        </div>
    )
}

export default DashboardLayout
