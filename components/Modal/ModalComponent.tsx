'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FrameLoginModal from './_ui/frame/FrameLoginModal'
import LoginForm from './_ui/form/LoginForm'
import RegisterForm from './_ui/form/RegisterForm'
import FrameRegisterModal from './_ui/frame/FrameRegisterModal'
import FrameForgotModal from './_ui/frame/FrameForgotModal'

import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/redux/features/modal-slice'
import ForgotForm from './_ui/form/ForgotForm'

const ModalComponent = () => {
    const isShowModal = useAppSelector((state) => state.modalReducer.isShowModal)
    const currentForm = useAppSelector((state) => state.modalReducer.currentForm)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div
            className={`modal-wrapper w-screen h-screen lg:bg-[#7f7f7f]/50 fixed top-0  left-0 z-10 justify-center items-start
        transition-all duration-600 ${
            isShowModal ? 'visible opacity-100' : 'invisible opacity-0'
        }`} onClick={() => dispatch(closeModal())}
        >
            {/* container */}
            <div className={`modal-container max-w-full lg:max-w-[950px] lg:min-h-[600px] min-h-screen bg-white flex-1 lg:mx-auto lg:mt-7 lg:rounded-xl
            grid grid-cols-12 overflow-hidden shadow-[0_5px_15px_0_rgba(0,0,0,0.5)] relative transition-all delay-100 duration-500 z-10 ${
                isShowModal ? 'translate-y-0' : '-translate-y-52'
            }`} onClick={(e) => e.stopPropagation()}
            >
                
                <div className='hidden lg:flex h-full w-full lg:col-span-5 col-span-5 bg-[#dce6ef] 
                justify-center items-center'>
                    {currentForm === 'login' && <FrameLoginModal />}
                    {currentForm === 'register' && <FrameRegisterModal />}
                    {currentForm === 'forgot' && <FrameForgotModal />}
                </div>

                <div className='h-full w-full max-sm:max-h-screen overflow-auto lg:col-span-7 col-span-12 relative
                pt-6 pb-3'>
                    {/* < /> */}
                    {currentForm === 'login' && <LoginForm />}
                    {currentForm === 'register' && <RegisterForm />}
                    {currentForm === 'forgot' && <ForgotForm />}

                    <div className='absolute sm:top-2 sm:right-2 top-1 right-1 cursor-pointer hover:drop-shadow-md transition-all duration-300'
                    onClick={() => dispatch(closeModal())}>
                        <Image
                            className='w-[30px] h-auto object-cover'
                            src={'/images/auth/close-icon.svg'}
                            height={30}
                            width={30}
                            alt='close-icon.svg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent
