'use client'
import React, { useState } from 'react'
import { dataCardPackageProperty } from '../../_model/dataPosting'
import { IoIosArrowDown } from "react-icons/io";
import '../../_style/posting-page.css'
import '../../_style/posting-card-package.css'
import { handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } from '@/assets/js/handleDragSlide';

interface PostingPackageSlideProps {
    list: dataCardPackageProperty[]
}
const PostingPackageSlide: React.FC<PostingPackageSlideProps> = ({ list }) => {
    const [isShow, setIsShow] = useState(false)
    const handleSetIsShow = () => {
        setIsShow(!isShow)
    }   
    return (
        <div className={`block-slide-card__package-wrapper show-card__shadow ${
            isShow ? 'show' : ''
        }`}>
            <div
                className='w-full h-[57px] flex justify-between items-center px-3 sm:px-6 border border-primary/50 rounded-[4px] bg-white 
              cursor-pointer hover:shadow-md transition duration-200 group absolute top-0 left-0 z-[1]' onClick={handleSetIsShow}>
                <p className='text-[14px] leading-tight sm:text-[16px]'>Posting package</p>
                <IoIosArrowDown size={20} className={`group-hover:drop-shadow-md transition-all duration-300 ${
                    isShow ? '-rotate-180' : ''
                    }`} />      
            </div>

            {/* show info Benefits and annual account maintenance fees */}
            {/* max-w-[960px] */}
            <div className={`block-slide-card__package posting-slide__container absolute top-0 left-0 w-full h-[440px] pt-[57px] 
             bg-white rounded-b-[4px] px-6 z-0 overflow-x-auto ${isShow ? 'show' : ''}` }
                onMouseDown={(e) => handleMouseDown(e, 'block-slide-card__package')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, 'block-slide-card__package')}
            >
                <div className='h-full py-6 flex gap-[22px]  min-w-[1960px]'>
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={`posting-card__vip-bg min-w-[260px] max-w-[260px] h-[320px] 
                        pt-1 pb-2 text-center rounded-2xl flex-grow-0`}>
                            <p className='uppercase text-white font-semibold h-[60px] flex items-center justify-center'>
                                Package {item.package}
                            </p>
                            <div className='list-card-package'>
                                <div
                                    className='card-package__item'>
                                    <p className='text-[15px] leading-[16px] font-semibold'>
                                        {item.price} <br /> <span className='text-[10px] leading-[15px]'>(Not include VAT)</span>
                                    </p>
                                </div>
                                
                                <div className='card-package__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                        Posting bonus <br />
                                        {item.bonus && (
                                            <span className='font-normal'>
                                                {item.bonus} (VND)
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className='card-package__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                        Total balance <br />
                                        {item.total && (
                                            <span className='font-normal'>
                                                {item.total} (VND)
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className='card-package__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                        Total balance <br />
                                        {item.time && (
                                            <span className='font-normal'>
                                                {item.time}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <button className='postcart-vip__btn mt-6'>Buy NOW</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostingPackageSlide
