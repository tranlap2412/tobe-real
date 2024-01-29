'use client'
import React, { useState } from 'react'
import Input from '@/components/Input'
import SocialLogin from '../SocialLogin'
import InputPassword from '@/components/InputPassword'
function ForgotForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [code, setCode] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [verify, setVerify] = useState(false)
    return (
        <div className='h-full w-full flex flex-col items-center sm:justify-center sm:gap-3'>
            <p className='text-[24px] font-bold mb-3 sm:mb-0'>
                {verify ? 'Enter new password' : 'Forgot Password?'}
            </p>

            {/* form input */}
            {!verify ? (
                <div className='w-full px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center gap-3 md:gap-6'>
                    {submitted ? (
                        <Input
                            id={'code'}
                            onChange={(e: any) => {
                                setCode(e.target.value)
                            }}
                            label='Code'
                            type={'text'}
                            placeholder='Code'
                            value={code}
                        />
                    ) : (
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
                    )}

                    <button
                        className='bg-gradient-left h-10 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'
                        onClick={() => {
                            submitted ? setVerify(true) : setSubmitted(true)
                        }}>
                        Submit
                    </button>
                </div>
            ) : (
                <div className='w-full px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center gap-3 md:gap-6'>
                    {/* password */}
                    <InputPassword
                        id={'password'}
                        onChange={(e: any) => {
                            setPassword(e.target.value)
                        }}
                        noEye
                        placeholder='Password...'
                        value={password}
                    />
                    {/* password */}
                    <InputPassword
                        id={'passwordConfirm'}
                        onChange={(e: any) => {
                            setPasswordConfirm(e.target.value)
                        }}
                        placeholder='Confirm Password...'
                        value={passwordConfirm}
                    />

                    <button className='bg-gradient-left h-10 w-full rounded-md max-w-[312px] mt-3 font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'>
                        Login
                    </button>
                </div>
            )}

            {/* login with social */}
            <div className='w-full px-10 xl:px-20'>
                <SocialLogin />
            </div>
        </div>
    )
}

export default ForgotForm
