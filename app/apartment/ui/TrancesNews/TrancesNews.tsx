'use client'

import './style.css'
import Image from 'next/image'
function TrancesNews({ data }: { data: any }) {
    return (
        <div className='wrap-infomations ml-8 sm:ml-0'>
            <div className='box-img-review flex flex-col items-end'>
                <div className='box-review flex justify-center items-center'>
                    {data?.star}
                </div>
                <Image
                    width={247}
                    height={139}
                    className='h-[auto]'
                    src={data?.img}
                    alt='img infomations'
                />
            </div>
            <div className='content-news'>
                <p className='text-news'>{data?.news}</p>
                <p className='text-news title-news'>{data?.title}</p>
            </div>
        </div>
    )
}

export default TrancesNews
