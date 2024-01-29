'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { formatter, upperCaseFirstChar } from '@/lib/helper'
import Place from '@/icons/Header/Blockhead/Place'
import Link from 'next/link'
interface CardRecommendedProps {
    id?: number
    typeRoom: string
    type: string
    title: string
    place?: string
    imageUrl: string
    liked?: boolean
    latest?: boolean
    point?: number
    price?: any
    bestSelling?: boolean
}
const CardRecommended: React.FC<CardRecommendedProps> = ({
    id,
    typeRoom,
    type,
    title,
    place,
    imageUrl,
    liked,
    latest,
    point,
    price,
    bestSelling
}) => {
    const [likedState, setLikedState] = useState(liked)
    const toggleLiked = () => {
        setLikedState(!likedState)
    }
    return (
        <Link href={'/detail/1'} className='w-full h-[220px] select-none cursor-pointer'>
            <div className=' shadow-gray rounded-[10px] relative'>
                <Image
                    src={imageUrl}
                    width={247}
                    height={140}
                    alt='hotel-image'
                    className='bg-cover object-cover w-full h-[140px] rounded-t-[10px] bg-center'
                />

                <div className='absolute top-2 left-2 '>
                    {/* Place */}
                    {(type !== 'apartment' || bestSelling) && (
                        <div className='w-3 h-3 rounded-md flex justify-center items-center bg-[#E3E3E3] '>
                            <Place className='w-[5.5px] h-[7.5px]' />
                        </div>
                    )}
                    {/* Apartment New || Point*/}
                    {type === 'apartment' && latest ? (
                        <div className='w-9 h-5 rounded-[5px] flex justify-center items-center bg-white shadow-gray'>
                            <p className='text-[12px] font-montserrat text-[#ff0000] font-medium'>
                                New
                            </p>
                        </div>
                    ) : (
                        point && (
                            <div className='w-9 h-5 rounded-[5px] flex justify-center items-center bg-[#FAFF00] shadow-gray'>
                                <p className='text-[12px] font-montserrat font-medium'>
                                    {point}.0
                                </p>
                            </div>
                        )
                    )}
                </div>

                {/* icon heart */}
                {!bestSelling && (type === 'apartment' || type === 'house') && (
                    <div className='absolute top-2 right-2 '>
                        <div
                            className='w-9 h-8 bg-white rounded-[5px] shadow-gray flex justify-center items-center'
                            onClick={toggleLiked}>
                            <Image
                                src={`/images/home/vector/${
                                    likedState ? 'liked-heart' : 'heart-white'
                                }.svg`}
                                height={19}
                                width={22}
                                className='w-auto h-auto'
                                alt='liked-heart'
                            />
                        </div>
                    </div>
                )}
                {/* body */}
                <div className='bg-white rounded-b-[10px] h-full relative'>
                    {/* yellow tag */}
                    <div className='flex justify-start absolute -top-3 left-0'>
                        <div
                            className={`flex items-center rounded-[5px] px-[10.5px] py-1 bg-primary shrink w-[134px] h-[23px] ${
                                bestSelling ? 'justify-center' : 'justify-between'
                            }`}>
                            <p className='font-montserrat text-[11px] font-medium text-nowrap overflow-hidden line-clamp-1'>
                                {bestSelling ? 'Best Seller 🏅' : typeRoom}
                            </p>
                            <span
                                className={`self-center text-[10px] ${
                                    bestSelling ? 'hidden' : ''
                                }`}>
                                🏨
                            </span>
                        </div>
                    </div>
                    {/* content */}
                    <div className='px-3 pt-[14px] h-20'>
                        <div className={` ${bestSelling ? 'mb-0' : 'mb-[6px]'}`}>
                            <p
                                className={`font-bold text-[10px]  font-montserrat ${
                                    bestSelling ? 'leading-3' : 'leading-[10px]'
                                }`}>
                                {title} {place && <span>- {place}</span>} <br />
                            </p>
                            {bestSelling && (
                                <p className='font-medium hidden sm:block text-[10px] leading-[10px] font-montserrat mb-[2px]'>
                                    Start from
                                </p>
                            )}
                        </div>

                        {/* Group price */}
                        {price && (
                            <div className='ml-px'>
                                {Object.keys(price).map((item, index) => (
                                    <p
                                        className='font-medium text-[10px] leading-tight font-montserrat'
                                        key={index}>
                                        {upperCaseFirstChar(item)} :{' '}
                                        {formatter.format(price[item])}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Group desc with icon */}
                        {type === 'house' && (
                            <div className='flex justify-start items-center gap-[10px] mt-1'>
                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={'/images/home/vector/house-yellow.svg'}
                                        width={8}
                                        height={7}
                                        alt='house-yellow'
                                        className='w-auto h-auto'
                                    />
                                    <span className='text-[7px] font-montserrat font-medium'>
                                        House
                                    </span>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={'/images/home/vector/bed-yellow.svg'}
                                        width={10}
                                        height={6}
                                        alt='bed-yellow'
                                        className='w-auto h-auto'
                                    />
                                    <span className='text-[7px] font-montserrat font-medium'>
                                        4BR
                                    </span>
                                </div>

                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={'/images/home/vector/furnished.svg'}
                                        width={13}
                                        height={5}
                                        alt='furnished'
                                        className='w-auto h-auto'
                                    />
                                    <span className='text-[7px] font-montserrat font-medium'>
                                        Unfurnished
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardRecommended
