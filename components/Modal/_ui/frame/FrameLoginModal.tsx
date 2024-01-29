'use client'
import React from 'react'
import Image from 'next/image'
const FrameLoginModal = () => {
  return (
      <div className='h-full relative max-h-[600px] w-full'>
          <div className='absolute top-24 left-4 z-0'>
              <Image className='object-contain w-auto h-[400px]' 
              src={"/images/auth/frame-1.svg"} width={350} height={440} alt='frame-1.svg' />
          </div>
          <div className='absolute top-6 right-1 z-[1]'>
              <Image className='object-contain w-auto h-[380px]' 
              src={"/images/auth/frame-2.svg"} width={350} height={410} alt='frame-2.svg' />
          </div>
          <div className='absolute bottom-6 left-1 z-[2]'>
              <Image className='object-contain w-auto h-[310px]' 
              src={"/images/auth/frame-3.svg"} width={365} height={310} alt='frame-3.svg' />
          </div>
          <Image
            className='object-contain absolute top-[50%] -translate-y-[50%] z-[3] left-[50%] -translate-x-[50%] md:w-[330px]'
            src={'/images/auth/frame-login.png'}
            width={472}
            height={317}
            alt='frame-login.png'
            />
      </div>
  )
}

export default FrameLoginModal