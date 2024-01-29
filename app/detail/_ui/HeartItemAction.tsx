'use client'
import React, { useState } from 'react'
import Image from 'next/image'
interface HeartItemActionProps {
    liked: boolean
} 
const HeartItemAction:React.FC<HeartItemActionProps> = ({liked}) => {
    const [likedState, setLikedState] = useState(liked)
    const toggleLiked = () => {
        setLikedState(!likedState)
    }
    return (
        <div
            className='sm:h-[44px] h-9 bg-white rounded-[5px] shadow-gray flex justify-center items-center cursor-pointer group ml-3 sm:ml-0 sm:px-0 px-2'
            onClick={toggleLiked}>
            <Image
                src={`/images/home/vector/${
                    likedState ? 'liked-heart' : 'heart-white'
                }.svg`}
                height={30}
                width={26}
                className='w-auto h-auto sm:scale-150 group-hover:drop-shadow-md transition duration-200'
                alt='liked-heart'
            />
        </div>
    )
}

export default HeartItemAction
