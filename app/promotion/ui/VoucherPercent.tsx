'use client'
import Image from 'next/image'
import React from 'react'
interface VoucherPercentProps {
    color?: string, 
    className?: string
}
const VoucherPercent:React.FC<VoucherPercentProps> = ({color, className}) => {
  return (
    <div className={` ${className ?? ''}`}>
        {color === 'blue' ?
          <Image 
            src={'/images/promotion/img-footer-voucher-blue.svg'}
            height={178}
            width={66}
            alt='img-footer-voucher-blue.svg'
            className='w-auto h-[129px] sm:h-[178px] object-contain'
          />
        :
          <Image 
              src={'/images/promotion/img-footer-voucher-orange.svg'}
              height={178}
              width={66}
              alt='img-footer-voucher-orange.svg'
              className='w-auto h-[129px] sm:h-[178px] object-contain'
            />
        }
    </div>
  )
}

export default VoucherPercent