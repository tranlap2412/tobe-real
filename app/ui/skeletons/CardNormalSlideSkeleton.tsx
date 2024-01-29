import { Skeleton } from '@mui/material'
import React from 'react'
function CardNormalSlideSkeleton() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[250px] gap-[22px] px-[16px] py-3'>
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' width={180} height={13}/>
                <Skeleton variant='text' width={80} height={13}/>
                <Skeleton variant='text' width={70} height={13}/>
              </div>
            </div>
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' width={180} height={13}/>
                <Skeleton variant='text' width={80} height={13}/>
                <Skeleton variant='text' width={70} height={13}/>
              </div>
            </div>
            <div className='hidden lg:block w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' width={180} height={13}/>
                <Skeleton variant='text' width={80} height={13}/>
                <Skeleton variant='text' width={70} height={13}/>
              </div>
            </div>
            <div className='hidden xl:block w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' width={180} height={13}/>
                <Skeleton variant='text' width={80} height={13}/>
                <Skeleton variant='text' width={70} height={13}/>
              </div>
            </div>
            
    </div>
  )
}

export default CardNormalSlideSkeleton