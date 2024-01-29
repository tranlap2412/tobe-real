import { Skeleton } from '@mui/material'
import React from 'react'
function CardWidthSaleSlideSkeleton({sizeSlide}:{sizeSlide?:string}) {
  return (
    <div className={`w-full grid grid-cols-2  xl:grid-cols-4 h-[250px] gap-[22px] px-[16px] py-3 ${sizeSlide === 'small'? 'sm:grid-cols-3' : 'lg:grid-cols-3'}`}>
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' height={8}/>
                <Skeleton variant='text' width={80} height={10}/>
                <Skeleton variant='text' width={60} height={10}/>
              </div>
            </div>
            <div className='w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' height={8}/>
                <Skeleton variant='text' width={80} height={10}/>
                <Skeleton variant='text' width={60} height={10}/>
              </div>
            </div>
            <div className={`hidden lg:block w-full h-[220px] rounded-t-[10px] overflow-hidden ${sizeSlide === 'small'? 'sm:block' : 'lg:block'}`}>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' height={8}/>
                <Skeleton variant='text' width={80} height={10}/>
                <Skeleton variant='text' width={60} height={10}/>
              </div>
            </div>
            <div className='hidden xl:block w-full h-[220px] rounded-t-[10px] overflow-hidden'>
              <Skeleton variant='rectangular' height={140} />
              <div className='h-20 pt-[15px] px-3'>
                <Skeleton variant='text' height={8}/>
                <Skeleton variant='text' width={80} height={10}/>
                <Skeleton variant='text' width={60} height={10}/>
              </div>
            </div>
            
    </div>
  )
}

export default CardWidthSaleSlideSkeleton