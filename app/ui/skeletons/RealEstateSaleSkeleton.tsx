import { Skeleton } from '@mui/material'
import React from 'react'
function RealEstateSaleSkeleton() {
    // let configPerView = 2
    // if(sizeSlide) {
    //     configPerView = 3
    // }
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[250px] gap-[22px] px-[16px] py-3'>
            <div className='w-full h-[220px] flex flex-col justify-between'>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={140} />
                </div>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={54} />
                </div>
            </div>

            <div className='w-full h-[220px] flex flex-col justify-between'>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={140} />
                </div>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={54} />
                </div>
            </div>

            <div className={`w-full hidden lg:flex h-[220px] flex-col justify-between `}>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={140} />
                </div>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={54} />
                </div>
            </div>

            <div className='w-full hidden xl:flex h-[220px] flex-col justify-between'>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={140} />
                </div>
                <div className='rounded-[10px] overflow-hidden'>
                    <Skeleton variant='rectangular' height={54} />
                </div>
            </div>

            
        </div>
    )
}

export default RealEstateSaleSkeleton
