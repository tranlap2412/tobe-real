import HeadingSlideBlock from '@/components/HeadingSlideBlock'
import MainLayout from '@/layouts/MainLayout'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import VoucherPercent from './ui/VoucherPercent'
import VoucherItem from '@/components/VoucherItem'
export const metadata: Metadata = {
    title: 'Promotion'
}
function Promotion() {
    return (
        <MainLayout>
            {/* Heading block with filter */}
            <HeadingSlideBlock
                imageUrl={'/images/home/img-content-headblock-2.svg'}
                title='Chect out All ongoing promo'
                promotion
            />
            <div className='container mx-auto pl-3 sm:pl-5 md:px-32 pb-32'>
                {/* items */}
                <div className='mb-4 md:mb-12'>
                    <p className='font-montserrat font-bold text-xl mb-5'>Daily Promo</p>
                    {/* voucher */}
                    <VoucherItem 
                        percent={'25%'}
                        fromDay={'20/10/2024'}
                        endDay={'12/12/2024'}
                        title={'Daily rental'}
                        imageUrl={'/images/promotion/img-voucher-1.png'}
                    />
                </div>


                {/* items */}
                <div className='mb-4 md:mb-12'>
                    <p className='font-montserrat font-bold text-xl mb-5'>
                        Monthly Promo
                    </p>
                    {/* voucher */}
                    <VoucherItem 
                        reverse
                        percent={'30%'}
                        fromDay={'20/10/2024'}
                        endDay={'12/12/2024'}
                        title={'Monthly rental'}
                        imageUrl={'/images/promotion/img-voucher-2.png'}
                    />
                </div>

                {/* items */}
                <div className='mb-4 md:mb-12'>
                    <p className='font-montserrat font-bold text-xl mb-5'>
                        Monthly Promo
                    </p>
                    {/* voucher */}
                    <VoucherItem 
                        reverse
                        percent={'50%'}
                        fromDay={'20/10/2024'}
                        endDay={'12/12/2024'}
                        title={'Monthly rental'}
                        imageUrl={'/images/promotion/img-voucher-2.png'}
                    />
                </div>
            </div>
        </MainLayout>
    )
}

export default Promotion
