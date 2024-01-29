'use client'

import './style.css'
import Image from 'next/image'
function ShowRoomSl({ data }: { data: any }) {
    return (
        <div className='show-room ml-8 sm:ml-0'>
            <Image
                width={242}
                height={139}
                className='h-[auto]'
                src={data?.img}
                alt='ShowRoom'
            />

            <div className='content-room-dev'>
                <h4 className='text-Dev'>{data?.title}</h4>
                <p className='text-room-dev text-Dev'>{data?.textContent}</p>
            </div>
        </div>
    )
}

export default ShowRoomSl
