'use client'
import { useRouter } from 'next/navigation'
import './style.css'
import { useState } from 'react'
import DashboardLayout from '@/app/(dashboard)/_ui/layout/DashboardLayout'

import Image from 'next/image'
function TradingFloor() {
    const router = useRouter()
    return (
        <DashboardLayout title='Managing the trading floor'>
            <div className='wrap-TradingFloors'>
                <div className='GrTradingFloors container flex flex-col gap-4'>
                    <div
                        className='wrap-Btn-TF hover:shadow-lg flex w-[334px] h-[36px] md:w-full md:h-[45px] items-center justify-between pl-6 pr-4'
                        onClick={() =>
                            router.push('/profile/TradingFloor/CreateTrading')
                        }>
                        <button className='Btn-TF text-sm font-normal md:text-base md:font-semibold'>
                            Create a trading platform for free
                        </button>
                        <Image
                            width={7}
                            height={10}
                            className='w-[7px] h-[auto]'
                            src={'/dashboard/images/profile/NextIcon.png'}
                            alt='NextIcon'
                        />
                    </div>
                    <div className='wrap-Btn-TF flex w-[334px] h-[36px] md:w-full md:h-[45px] items-center justify-between pl-6 pr-4'>
                        <button className='Btn-TF text-sm font-normal md:text-base md:font-semibold' onClick={() => router.push('/')}>
                            Invitation to join the trading platform
                        </button>
                        <Image
                            width={19}
                            height={19}
                            className='w-[19px] h-[auto]'
                            src={'/dashboard/images/profile/bell-TF-icon.png'}
                            alt='bell-TF-icon'
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default TradingFloor
