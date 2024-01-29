import { Skeleton } from '@mui/material'
import React from 'react'
function LookingForPlaceSkeleton() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-[200px] gap-[22px] lg:gap-[25px]'>
            {/* item skeleton */}
            <div className='w-full h-[200px] shadow-gray rounded-[10px] overflow-hidden '>
                <div>
                    <Skeleton height={200} variant='rounded' />
                </div>
            </div>
            {/* item skeleton */}
            <div className='w-full h-[200px] shadow-gray rounded-[10px] overflow-hidden '>
                <div>
                    <Skeleton height={200} variant='rounded' />
                </div>
            </div>
            {/* item skeleton */}
            <div className='w-full h-[200px] hidden lg:block shadow-gray rounded-[10px] overflow-hidden '>
                <div>
                    <Skeleton height={200} variant='rounded' />
                </div>
            </div>
            {/* item skeleton */}
            <div className='w-full h-[200px] hidden xl:block shadow-gray rounded-[10px] overflow-hidden '>
                <div>
                    <Skeleton height={200} variant='rounded' />
                </div>
            </div>
            {/* item skeleton */}
            <div className='w-full h-[200px] hidden xl:block shadow-gray rounded-[10px] overflow-hidden '>
                <div>
                    <Skeleton height={200} variant='rounded' />
                </div>
            </div>
            

        </div>
            
    )
}

export default LookingForPlaceSkeleton
