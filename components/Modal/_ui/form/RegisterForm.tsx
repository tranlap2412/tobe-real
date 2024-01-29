'use client'
import React, { useState } from 'react'
import Input from '@/components/Input'
import InputPassword from '@/components/InputPassword'
import SocialLogin from '../SocialLogin'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { switchModal } from '@/redux/features/modal-slice'

function RegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className='h-full w-full flex flex-col items-center sm:justify-center'>
            <div className='text-center mb-3'>
                <p className='text-[24px] font-semibold'>Create an account</p>
                <p className='text-sm text-[#343434]'>Connect with your friends today!</p>
            </div>
            {/* form input */}
            <div className='w-full px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center gap-3'>
                <Input
                    id={'username'}
                    onChange={(e: any) => {
                        setUsername(e.target.value)
                    }}
                    type={'text'}
                    placeholder='Enter Your Username'
                    value={username}
                />
                <Input
                    id={'email'}
                    onChange={(e: any) => {
                        setEmail(e.target.value)
                    }}
                    type={'email'}
                    placeholder='Enter your Email'
                    value={email}
                />
                <Input
                    id={'phoneNumber'}
                    onChange={(e: any) => {
                        setPhoneNumber(e.target.value)
                    }}
                    type={'number'}
                    placeholder='Enter your Phone Number'
                    value={phoneNumber}
                />
                <InputPassword
                    id={'password'}
                    onChange={(e: any) => {
                        setPassword(e.target.value)
                    }}
                    placeholder='Enter your Password...'
                    value={password}
                />
                <button className='bg-gradient-left h-10 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'
                onClick={() => dispatch(switchModal('register'))}>
                    Sign Up
                </button>
            </div>
            
            <div className='w-full px-6 sm:px-10 xl:px-20'>
                <SocialLogin />
            </div>
        </div>
    )
}

export default RegisterForm
