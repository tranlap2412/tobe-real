'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { dataCardVipProperty } from '../../_model/dataPosting'
import { IoIosArrowDown } from "react-icons/io";
import '../../_style/posting-page.css'
import '../../_style/posting-card-vip.css'
import { handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } from '@/assets/js/handleDragSlide';

interface PostCardVipSlideProps {
    list: dataCardVipProperty[]
}
const PostCardVipSlide: React.FC<PostCardVipSlideProps> = ({ list }) => {
    const [isShow, setIsShow] = useState(false)
    const handleSetIsShow = () => {
        setIsShow(!isShow)
    }   
    return (
        <div className={`block-slide-card__vip-wrapper show-card__shadow ${
            isShow ? 'show' : ''
        }`}>
            <div
                className='w-full h-[57px] flex justify-between items-center px-3 sm:px-6 border border-primary/50 rounded-[4px] bg-white 
              cursor-pointer hover:shadow-md transition duration-200 group absolute top-0 left-0 z-[1]' onClick={handleSetIsShow}>
                <p className='text-[14px] leading-tight sm:text-[16px]'>Benefits and annual account maintenance fees</p>
                <IoIosArrowDown size={20} className={`group-hover:drop-shadow-md transition-all duration-300 min-w-5 ${
                    isShow ? '-rotate-180' : ''
                    }`} />
            </div>

            {/* show info Benefits and annual account maintenance fees */}
            <div className={`block-slide-card__vip posting-slide__container absolute top-0 left-0 w-full h-[440px] pt-[57px] 
             bg-white rounded-b-[4px] px-6 z-0 overflow-x-auto  ${isShow ? 'show' : ''}`}
             onMouseDown={(e) => handleMouseDown(e, 'block-slide-card__vip')}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseLeave}
             onMouseMove={(e) => handleMouseMove(e, 'block-slide-card__vip')}   
            >
                <div className='h-full py-6 flex gap-[22px] min-w-[910px]'>
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={`min-w-[210px] max-w-[210px] h-[330px] 
                        pt-1 pb-5 text-center rounded-2xl ${
                            item.level === 99
                                ? 'posting-card__vip-bg--special'
                                : 'posting-card__vip-bg'
                        }`}>
                            <p className='uppercase text-white font-semibold h-9'>
                                {item.level === 99 ? 'special' : `vip ${item.level}`}
                            </p>
                            <div className='list-postcart-vip'>
                                <div
                                    className={`${
                                        item.level === 99
                                            ? 'postcart-vip__item--special'
                                            : 'postcart-vip__item'
                                    }`}>
                                    <p className='text-[11px] leading-4 font-semibold'>
                                        {item.price} <br /> (Not include VAT)
                                    </p>
                                </div>
                                <div
                                    className={`h-[55px] flex items-center justify-between px-6 ${
                                        item.level === 99
                                            ? 'postcart-vip__item--special'
                                            : 'postcart-vip__item'
                                    }`}>
                                    <p className='text-[10px] font-semibold leading-4'>
                                        Avatar <br /> Border
                                    </p>
                                    <Image
                                        src={item.borderUrl}
                                        height={31}
                                        width={35}
                                        alt={item.borderUrl}
                                        className='h-[31px] w-auto object-cover'
                                    />
                                </div>
                                {item.benefits.map((benefit, benefitIndex) => (
                                    <div
                                        key={benefitIndex}
                                        className={`${
                                            item.level === 99
                                                ? 'postcart-vip__item--special'
                                                : 'postcart-vip__item'
                                        }`}>
                                        <p className='font-semibold text-[7px] leading-[10px]'>
                                            {benefit.title} <br />
                                            {benefit.date && (
                                                <span className='font-normal'>
                                                    1 news/day
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button className='postcart-vip__btn mt-6'>Buy NOW</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostCardVipSlide
