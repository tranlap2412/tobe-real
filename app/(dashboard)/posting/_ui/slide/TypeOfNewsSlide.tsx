'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { dataTypeNewsProperty } from '../../_model/dataPosting'
import { IoIosArrowDown } from 'react-icons/io'
import '../../_style/posting-page.css'
import '../../_style/type-of-news.css'
import {
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseMove
} from '@/assets/js/handleDragSlide'

interface TypeOfNewsSlideProps {
    list: dataTypeNewsProperty[]
}
const TypeOfNewsSlide: React.FC<TypeOfNewsSlideProps> = ({ list }) => {
    const [isShow, setIsShow] = useState(false)
    const handleSetIsShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div
            className={`block-slide-card__type-news-wrapper show-card__shadow ${
                isShow ? 'show' : ''
            }`}>
            <div
                className='w-full h-[57px] flex justify-between items-center px-3 sm:px-6 border border-primary/50 rounded-[4px] bg-white 
              cursor-pointer hover:shadow-md transition duration-200 group absolute top-0 left-0 z-[1]'
                onClick={handleSetIsShow}>
                <p className='text-[14px] leading-tight sm:text-[16px]'>Cost for each type of news</p>   
                <IoIosArrowDown
                    size={20}
                    className={`group-hover:drop-shadow-md transition-all duration-300 ${
                        isShow ? '-rotate-180' : ''
                    }`}
                />
            </div>

            {/* show info Benefits and annual account maintenance fees */}
            {/* max-w-[960px] */}
            <div
                className={`block-slide-card__type-news posting-slide__container absolute top-0 left-0 w-full h-[545px] pt-[57px] 
             bg-white rounded-b-[4px] px-6 z-0  overflow-x-auto  ${
                 isShow ? 'show' : ''
             }`}
                onMouseDown={(e) => handleMouseDown(e, 'block-slide-card__type-news')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, 'block-slide-card__type-news')}>
                <div className='h-full py-6 flex gap-[22px] min-w-[1390px]'>
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={`posting-card__vip-bg min-w-[260px] max-w-[260px] h-[418px] border border-primary/50
                        pb-2 text-center rounded-2xl flex-grow-0`}>
                            <p className={`text-white font-semibold pt-3 flex items-center justify-center mb-5 relative ${
                                index > 2 ? 'after:absolute after:bottom-0 after:left-[10%] after:block after:w-[80%] after:h-px after:bg-black after:bg-opacity-65' :''}`}>
                                {item.title}
                            </p>
                            <p className='text-center font-bold text-[10px] leading-4 mb-4'>
                                Description of where it appears
                            </p>
                            <p className={`px-6 text-[10px] leading-[15px] mb-4 ${
                                item.desc && 'min-h-[90px]'
                            }`}>
                                {item.desc}
                            </p>
                            <div className='list-type-news'>
                                <div className='type-news__item'>
                                    <p className='text-[10px] leading-4 font-bold'>
                                        Price/Week <br /> {item.price} <br /> <span className='font-normal'>(Not include VAT)</span>
                                    </p>
                                </div>

                                <div className='type-news__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                        Inside page <br />
                                        <span className='font-normal uppercase'>
                                            {item.insidePage ? 'yes' : 'no'}
                                        </span>
                                    </p>
                                </div>

                                <div className='type-news__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                        According to the project <br />
                                        <span className='font-normal uppercase'>
                                            {item.according ? 'yes' : 'no'}
                                        </span>
                                    </p>
                                </div>

                                <div className='type-news__item'>
                                    <p className='font-semibold text-[10px] leading-[15px] uppercase'>
                                        SHARE FANPAGES <br />
                                        <span className='font-normal '>
                                            {item.according ? 'yes' : 'no'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TypeOfNewsSlide
