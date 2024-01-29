import { Skeleton } from '@mui/material'
import React from 'react'
function CardRecommendedSkeleton({ type }: { type?: string }) {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[250px] gap-[22px] px-[16px] py-3'>
            {/* item skeleton */}
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
                <Skeleton variant='rectangular' height={140} />
                <div className='h-20 pt-[16px] px-3'>
                    <div className={type === 'apartment' ? 'pb-[6px]' : ''}>
                        <Skeleton variant='text' height={11} />
                        {type === 'house' && <Skeleton variant='text' height={11} />}
                    </div>
                    {type !== 'house' ? (
                        <div>
                            <Skeleton variant='text' width={80} height={11} />
                            <Skeleton variant='text' width={100} height={11} />
                            <Skeleton variant='text' width={70} height={11} />
                        </div>
                    ) : (
                        <div className='mt-2'>
                            <Skeleton variant='text' width={120} height={7} />
                        </div>
                    )}
                </div>
            </div>
            {/* item skeleton */}
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
                <Skeleton variant='rectangular' height={140} />
                <div className='h-20 pt-[16px] px-3'>
                    <div className={type === 'apartment' ? 'pb-[6px]' : ''}>
                        <Skeleton variant='text' height={11} />
                        {type === 'house' && <Skeleton variant='text' height={11} />}
                    </div>
                    {type !== 'house' ? (
                        <div>
                            <Skeleton variant='text' width={80} height={11} />
                            <Skeleton variant='text' width={100} height={11} />
                            <Skeleton variant='text' width={70} height={11} />
                        </div>
                    ) : (
                        <div className='mt-2'>
                            <Skeleton variant='text' width={120} height={7} />
                        </div>
                    )}
                </div>
            </div>
            {/* item skeleton */}
            <div className='hidden lg:block w-full h-[220px] rounded-t-[10px] overflow-hidden'>
                <Skeleton variant='rectangular' height={140} />
                <div className='h-20 pt-[16px] px-3'>
                    <div className={type === 'apartment' ? 'pb-[6px]' : ''}>
                        <Skeleton variant='text' height={11} />
                        {type === 'house' && <Skeleton variant='text' height={11} />}
                    </div>
                    {type !== 'house' ? (
                        <div>
                            <Skeleton variant='text' width={80} height={11} />
                            <Skeleton variant='text' width={100} height={11} />
                            <Skeleton variant='text' width={70} height={11} />
                        </div>
                    ) : (
                        <div className='mt-2'>
                            <Skeleton variant='text' width={120} height={7} />
                        </div>
                    )}
                </div>
            </div>
            {/* item skeleton */}
            <div className='hidden xl:block w-full h-[220px] rounded-t-[10px] overflow-hidden'>
                <Skeleton variant='rectangular' height={140} />
                <div className='h-20 pt-[16px] px-3'>
                    <div className={type === 'apartment' ? 'pb-[6px]' : ''}>
                        <Skeleton variant='text' height={11} />
                        {type === 'house' && <Skeleton variant='text' height={11} />}
                    </div>
                    {type !== 'house' ? (
                        <div>
                            <Skeleton variant='text' width={80} height={11} />
                            <Skeleton variant='text' width={100} height={11} />
                            <Skeleton variant='text' width={70} height={11} />
                        </div>
                    ) : (
                        <div className='mt-2'>
                            <Skeleton variant='text' width={120} height={7} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardRecommendedSkeleton
//
//
