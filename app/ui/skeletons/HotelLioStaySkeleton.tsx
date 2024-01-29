import { Skeleton } from '@mui/material'
import React from 'react'
function HotelLioStaySkeleton() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[250px] gap-[22px] px-[16px] py-3'>
            {/* item skeleton */}
            <div className='w-full h-[220px] flex flex-col justify-between bg-white shadow-gray rounded-[10px]'>
                <div className='w-full h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden '>
                    {/* content */}
                    <div className='h-full px-4 lg:px-3 pt-[29px] pb-[10px] flex flex-col justify-between'>
                        <Skeleton width={105} height={24} variant='text' />
                        <div className=' '>
                            <div className='mb-[10px]'>
                                <Skeleton width={120} height={12} variant='text' />
                            </div>
                            {/* desc */}
                            <Skeleton width={120} height={12} variant='text' />
                            <Skeleton width={120} height={12} variant='text' />
                        </div>
                    </div>
                </div>
            </div>

            {/* item skeleton */}
            <div className='w-full h-[220px] flex flex-col justify-between bg-white shadow-gray rounded-[10px]'>
                <div className='w-full h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden '>
                    {/* content */}
                    <div className='h-full px-4 lg:px-3 pt-[29px] pb-[10px] flex flex-col justify-between'>
                        <Skeleton width={105} height={24} variant='text' />
                        <div className=' '>
                            <div className='mb-[10px]'>
                                <Skeleton width={120} height={12} variant='text' />
                            </div>
                            {/* desc */}
                            <Skeleton width={120} height={12} variant='text' />
                            <Skeleton width={120} height={12} variant='text' />
                        </div>
                    </div>
                </div>
            </div>

            {/* item skeleton */}
            <div className='hidden lg:flex w-full h-[220px] flex-col justify-between bg-white shadow-gray rounded-[10px]'>
                <div className='w-full h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden '>
                    {/* content */}
                    <div className='h-full px-4 lg:px-3 pt-[29px] pb-[10px] flex flex-col justify-between'>
                        <Skeleton width={105} height={24} variant='text' />
                        <div className=' '>
                            <div className='mb-[10px]'>
                                <Skeleton width={120} height={12} variant='text' />
                            </div>
                            {/* desc */}
                            <Skeleton width={120} height={12} variant='text' />
                            <Skeleton width={120} height={12} variant='text' />
                        </div>
                    </div>
                </div>
            </div>

            {/* item skeleton */}
            <div className='hidden xl:flex w-full h-[220px] flex-col justify-between bg-white shadow-gray rounded-[10px]'>
                <div className='w-full h-[214px] flex flex-col justify-between rounded-[10px] overflow-hidden '>
                    {/* content */}
                    <div className='h-full px-4 lg:px-3 pt-[29px] pb-[10px] flex flex-col justify-between'>
                        <Skeleton width={105} height={24} variant='text' />
                        <div className=' '>
                            <div className='mb-[10px]'>
                                <Skeleton width={120} height={12} variant='text' />
                            </div>
                            {/* desc */}
                            <Skeleton width={120} height={12} variant='text' />
                            <Skeleton width={120} height={12} variant='text' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
            
    )
}

export default HotelLioStaySkeleton
