"use client"
import React, { useState } from 'react'
import EyeShowIcon from '@/icons/Form/EyeShowIcon'
import EyeHiddenIcon from '@/icons/Form/EyeHiddenIcon'

interface InputPasswordProps {
    id: string
    onChange: any
    value: string
    label?: string
    placeholder?: string
    type?: string
    noEye?: boolean
}

const Input: React.FC<InputPasswordProps> = ({
    id,
    onChange,
    value,
    label,
    placeholder,
    type,
    noEye
}) => {
    const [ishowPassword, setIsShowPassword] = useState("password")

    const toggleShowPassword = () => {
        setIsShowPassword((prev) => {
            if(prev === 'password') {
                return 'text'
            } 
            return 'password'
        })
    }
    return (
        <div className='w-full relative'>
            {label && (
                <label
                    htmlFor={id}
                    className='text-[14px] text-[#695C5C] font-montserrat block md:pb-1'>
                    {label}
                </label>
            )}
            <input
                id={id}
                value={value}
                type={ishowPassword}
                onChange={onChange}
                className='input border-black/40 h-10 rounded-[10px] placeholder:text-black/70 text-sm'
                placeholder={placeholder}
            />
            {!noEye && <span className='absolute right-2 bottom-0 z-[1] cursor-pointer p-[10px] hover:drop-shadow-lg'
            onClick={toggleShowPassword}>
                {ishowPassword==='password' ? <EyeShowIcon /> : <EyeHiddenIcon />}
            </span>}
        </div>
    )
}

export default Input
