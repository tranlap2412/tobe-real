'use client'
import { useRouter } from 'next/navigation'
import './style.css'
import { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '@/app/(dashboard)/_ui/layout/DashboardLayout'

function CustomerManagement() {
    const router = useRouter()
    return (
        <DashboardLayout title='Customer management'>
            <div className='wrap-CustomerManagements'>
                <div className='Gr-CustomerManagements container flex flex-col gap-4'>
                    <div className='wrap-Btn-CM flex w-[334px] h-[36px] md:w-full md:h-[45px] items-center justify-between pl-6 pr-4 hover:shadow-lg'>
                        <button
                            className='Btn-CM text-sm font-normal md:text-base md:font-semibold '
                            onClick={() => router.push('/')}>
                            List of customers
                        </button>
                        <Image
                            width={7}
                            height={10}
                            className='w-[7px] h-[auto]'
                            src={'/dashboard/images/profile/NextIcon.png'}
                            alt='NextIcon'
                        />
                    </div>
                    <div className='wrap-Btn-CM flex w-[334px] h-[36px] md:w-full md:h-[45px] items-center justify-between pl-6 pr-4 hover:shadow-lg'>
                        <button
                            className='Btn-CM text-sm font-normal md:text-base md:font-semibold '
                            onClick={() => router.push('/')}>
                            Customers see postings
                        </button>
                        <Image
                            width={7}
                            height={10}
                            className='w-[7px] h-[auto]'
                            src={'/dashboard/images/profile/NextIcon.png'}
                            alt='NextIcon'
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default CustomerManagement
