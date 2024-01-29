'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/redux/store'
import Confident from '@/icons/Dashboard/Confident'
interface AddNewBankProps {
    isShowAddBank: boolean
    onClick: () => void
}
const AddNewBank: React.FC<AddNewBankProps> = ({ isShowAddBank, onClick }) => {
    const isShowLeftSidebar = useAppSelector(
        (state) => state.leftsidebarReducer.isShowLeftSidebar
    )
    const [cardInfo, setCardInfo] = useState({
        cardNumber: '',
        date: '',
        code: '',
        cardFullName: '',
        addressCard: '',
        zipCode: ''
    })
    const handleChange = (e: any) => {
        const { name, value } = e.nativeEvent.target
        setCardInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div
            className={`modal-wrapper w-full xl:w-[calc(100%-var(--leftsidebar-width))] h-screen fixed 
                top-0 left-0 xl:left-[var(--leftsidebar-width)] justify-center items-start
            transition-all duration-600 z-10 ${
                isShowAddBank ? 'visible opacity-100' : 'invisible opacity-0'
            } 
            ${isShowLeftSidebar ? 'lg:pl-[var(--leftsidebar-width)] xl:pl-0' : ''}`}
            onClick={onClick}>
            {/* container modal invisible-scrollbar */}
            <div
                className={`modal-container max-w-full sm:max-w-[565px] sm:min-h-[600px] min-h-screen max-sm:max-h-[calc(100vh-var(--navbar-height))]
                bg-white flex-1 sm:mx-auto sm:mt-[calc(var(--navbar-height)+20px)] sm:rounded-xl shadow-[0_5px_15px_0_rgba(0,0,0,0.5)] 
                transition-all delay-100 duration-500 z-10 pb-3 sm:pt-0 pt-[var(--navbar-height)] overflow-y-auto invisible-scrollbar
                ${
                    isShowAddBank ? 'translate-y-0' : '-translate-y-52'
                }`}
                onClick={(e) => e.stopPropagation()}>
                {/* card wrapper */}
                <div className='h-full w-full px-4 sm:px-12 pt-5 pb-12 flex flex-col gap-8 relative '>
                    {/* ttile */}
                    <div>
                        <p className='font-medium text-[15px] sm:text-[18px] mb-2 sm:mb-4'>
                            Add tags
                        </p>
                        <div
                            className='flex items-center bg-gradient-to-b from-[#FFC700] to-[rgba(255, 255, 255, 0.00)]
                            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[4px] h-[60px] px-2 sm:px-4 gap-4'>
                            <Confident />
                            <p className='font-medium text-sm sm:text-[15px]'>
                                Your card information will be kept confidential
                            </p>
                        </div>
                    </div>
                    {/* Card details */}
                    <div className='relative'>
                        <p className='font-medium text-[15px] sm:text-[18px] mb-2 sm:mb-4'>
                            Card details
                        </p>
                        {/* Form details */}
                        <div className='flex flex-col gap-5'>
                            <input
                                name='cardNumber'
                                value={cardInfo.cardNumber}
                                type='text'
                                onChange={handleChange}
                                className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 placeholder:font-medium text-sm bg-[#e3e3e3]'
                                placeholder='Card number'
                            />
                            <div className='flex gap-x-3'>
                                <input
                                    name='date'
                                    value={cardInfo.date}
                                    type='date'
                                    onChange={handleChange}
                                    className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 text-black/70 uppercase
                                    placeholder:font-medium text-sm bg-[#e3e3e3] sm:basis-[70%] basis-[50%] pr-3'
                                    placeholder='Expiration date (MM/YY)'
                                />
                                <input
                                    name='code'
                                    value={cardInfo.code}
                                    type='text'
                                    onChange={handleChange}
                                    className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 
                                    placeholder:font-medium text-sm bg-[#e3e3e3] sm:basis-[30%] basis-[50%]'
                                    placeholder='Code CVV'
                                />
                            </div>

                            <input
                                name='cardFullName'
                                value={cardInfo.cardFullName}
                                type='text'
                                onChange={handleChange}
                                className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 placeholder:font-medium text-sm bg-[#e3e3e3]'
                                placeholder='Full name of the cardholder'
                            />
                        </div>
                        {/* Visa image */}
                        <div className='w-12 h-4 absolute top-3 right-0'>
                            <Image src={'/dashboard/images/deposit/visa_logo.png'} alt={'visa_logo'} sizes='(max-width: 1200px) 50vw, 33vw' fill={true} />
                        </div>
                    </div>

                    {/* Address for credit/debit card registration */}
                    <div>
                        <p className='font-medium text-[15px] sm:text-[18px] mb-2 sm:mb-5 leading-tight'>
                            Address for credit/debit card registration
                        </p>
                        <div className='flex flex-col gap-5 sm:gap-7'>
                            <input
                                name='addressCard'
                                value={cardInfo.addressCard}
                                type='text'
                                onChange={handleChange}
                                className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 placeholder:font-medium text-sm bg-[#e3e3e3]'
                                placeholder='Address'
                            />
                            <input
                                name='zipCode'
                                value={cardInfo.zipCode}
                                type='text'
                                onChange={handleChange}
                                className='input pl-3 sm:pl-6 h-12 border-0 rounded-[4px] font-semibold placeholder:text-black/70 placeholder:font-medium text-sm bg-[#e3e3e3]'
                                placeholder='Address'
                            />
                        </div>
                    </div>

                    {/* button submit */}
                    <button className='bg-gradient-to-r from-[#F7E75A] to-[#FFC702] h-10 w-full rounded-md max-w-[312px]
                     mx-auto font-semibold hover:shadow-lg transition duration-200 hover:opacity-85'>
                        Submit
                    </button>

                    {/* close modal icon */}
                    <div className='absolute sm:top-2 sm:right-2 top-1 right-1 cursor-pointer hover:drop-shadow-md transition-all duration-300 block sm:hidden'
                        onClick={onClick}>
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

export default AddNewBank
