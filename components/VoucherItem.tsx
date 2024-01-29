import React from 'react'
import Image from 'next/image'
import VoucherPercent from '@/app/promotion/ui/VoucherPercent'
interface VoucherItemProps {
    reverse?: boolean
    percent: string
    fromDay: string
    endDay: string
    title: string
    imageUrl: string
}
const VoucherItem: React.FC<VoucherItemProps> = ({reverse, percent, fromDay, endDay, title, imageUrl }) => {
    return (
        <div className='h-[130px] w-[275px] sm:h-[178px] sm:w-[378px] relative top-0 left-0 z-0 bg-voucher object-contain bg-contain bg-no-repeat drop-shadow-xl'>
            <div className={`flex items-center h-full gap-2 w-full pr-[53px] sm:pr-[88px] ${
                reverse ? 'flex-row-reverse' : 'flex-row'
            }`}>
                <Image
                    src={imageUrl}
                    width={165}
                    height={131}
                    alt={imageUrl}
                    className={`h-[91px] w-auto sm:h-[131px] object-cover  ${
                        reverse? '-ml-5' : 'ml-0 -mr-3'
                    }`}
                />
                {/* context */}
                <div className={`flex flex-col h-full py-2 sm:py-4 ${
                    reverse? 'pl-6 -mr-1 sm:mr-0 items-start' : 'items-end -ml-12 pr-2 sm:pr-0 sm:ml-0'
                }`}>
                    <p className={`font-montserrat text-[15px] font-bold leading-5 sm:min-w-[123px] ${
                        reverse ? 'text-start min-w-[118px]' : 'text-end '
                    }`}>
                        {title} promotions
                    </p>
                    <span className='block mt-5 sm:mt-[32px]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='38'
                            height='4'
                            viewBox='0 0 38 4'
                            fill='none'>
                            <path
                                d='M37.3 2.23999H-0.0100098'
                                stroke={`${reverse ? '#8DB6FF' : '#F9BF6B'}`}
                                strokeWidth='3'
                                strokeMiterlimit='10'
                            />
                        </svg>
                    </span>
                    <p className='font-montserrat font-bold text-[24px] sm:text-[36px] leading-8 sm:leading-[52px] text-center'>
                        {percent}
                    </p>
                    <p className='font-montserrat text-[10px] text-center text-nowrap sm:mt-2 text-black'>
                        {fromDay} - {endDay}
                    </p>
                </div>
            </div>

            <div className='absolute top-0 right-0 z-0 bg-voucher rounded-[30px] h-full'></div>
            <VoucherPercent className='absolute top-0 right-0' color={reverse ? 'blue' : ''}/>
            <p className='font-montserrat font-bold text-[24px] sm:text-[36px] text-center -rotate-90
                    absolute top-[50%] -translate-y-[50%] right-0 h-full max-h-[38px] sm:max-h-[50px] pl-1'>
                {percent}
            </p>
        </div>
    )
}

export default VoucherItem
