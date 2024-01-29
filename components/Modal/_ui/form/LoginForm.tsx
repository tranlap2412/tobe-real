'use client'
import React, { useState } from 'react'
import Input from '@/components/Input'
import InputPassword from '@/components/InputPassword'
import SocialLogin from '../SocialLogin'
import CustomCheckbox from '@/components/CustomCheckbox'
import { useRouter } from 'next/navigation'
import { switchModal } from '@/redux/features/modal-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

function LoginForm() {
    const router = useRouter()
    const dispath = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSetRemember =() => {
        setRemember(!remember)
    }
    return (
        <div className='h-full w-full flex flex-col items-center sm:justify-center md:gap-0'>
            <p className='text-[24px] font-semibold mb-4'>Hi, Welcome Back! 👋</p>

            {/* form input */}
            <div className='w-full px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center gap-3 lg:gap-2'>
                {/* email */}
                <Input
                    id={'email'}
                    onChange={(e: any) => {
                        setEmail(e.target.value)
                    }}
                    label='Email'
                    type={'email'}
                    placeholder='Enter your Email...'
                    value={email}
                />
                {/* password */}
                <InputPassword
                    id={'password'}
                    onChange={(e: any) => {
                        setPassword(e.target.value)
                    }}
                    label='Password'
                    placeholder='Enter your Password...'
                    value={password}
                />

                {/* remember & fogot password */}
                <div className='w-full flex justify-between sm:justify-center py-2 md:py-0  sm:mt-2'>
                    {/* remember me*/}
                        <CustomCheckbox 
                            isChecked={remember}
                            onChange={handleSetRemember}
                            label='Remember Me'
                        />
                    {/* fogot password */}
                    <div 
                        className='text-[#E86969] sm:ml-10 hover:underline cursor-pointer text-[14px]'
                        onClick={() => dispath(switchModal('forgot'))}>
                        Forgot Password?
                    </div>
                </div>
                <button className='bg-gradient-left h-10 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'
                onClick={() => router.push('/')}>
                    Login
                </button>
            </div>

            {/* login with social */}
            <div className="w-full px-6 sm:px-10 xl:px-20">
                <SocialLogin />
            </div>
        </div>
    )
}

export default LoginForm
