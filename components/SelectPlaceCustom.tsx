'use client'
import React, { memo, useEffect, useRef, useState } from 'react'
import ArrowDown from '@/icons/Arrow/ArrowDown'
const SelectPlaceCustom = () => {
    const [isShow, setIsShow] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    const toggleShow = () => {
        setIsShow(!isShow)
    }
    const handleClickOutside = (event:MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutside)
        return () => document.removeEventListener('mousedown',handleClickOutside)
    },)
  return (
    <div className='relative group h-7 sm:h-10 hidden sm:block' ref={selectRef}>
        <div className='w-[150px] h-7 sm:h-10 relative border border-[#C4C4C4] 
        flex justify-between items-center px-4 rounded-[5px] cursor-pointer 
        hover:shadow-md transition duration-200 select-none z-[1]'
        onClick={toggleShow} onFocus={toggleShow} onBlur={toggleShow}>
            <span>jakarta</span>
            <ArrowDown />
        </div>
        
            <ul className={`absolute top-8 sm:top-12 right-0 shadow-gray w-[200px]
                rounded-md py-2 after:h-3 bg-white transition-all duration-300 z-[2]
                after:bg-transparent after:block after:absolute after:-top-3 after:right-0 after:w-[150px] ${
                    isShow? 'opacity-100 block' : 'opacity-0 hidden'
                }`}>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
                <li className='px-5 cursor-pointer hover:bg-[#ebe7e7] select-none'>jakarta</li>
            </ul>
    </div>
  )
}

export default memo(SelectPlaceCustom)