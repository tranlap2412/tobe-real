'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import AddNewBank from '../_ui/AddNewBank'

const DepositPage = () => {
    const [ amount, setAmount ] = useState('')
    const [ isShowAddBank, setIsShowAddBank ] = useState(false)
    const handleToggleShowBank = () => {
        setIsShowAddBank(!isShowAddBank)
    }
  return (
    <DashboardLayout title='Desposit'>
        <div className='w-full mx-auto pt-7 sm:pt-14 flex items-start justify-center'>
            <div className='h-full max-md:container'>
                {/* head */}
                {/* <div className="desposit-head md:w-[620px] md:max-w-[620px] mb-4 mx-3 md:mx-0"> */}
                <div className="md:w-[620px] md:max-w-[620px] mb-4 mx-3 md:mx-0 h-[61px] rounded-lg 
                bg-gradient-to-b from-[#FADC54] to-[#DA8D03] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                        <div className='w-full h-full flex items-center gap-5 pl-5'>
                            <Image 
                                src={'/images/main-logo.png'}
                                height={24}
                                width={62}
                                alt='main-logo'
                                className='drop-shadow-[5px_5px_15px_0_rgb(255,255,255)] w-[62px] h-auto object-contain'
                            />
                            <div>
                                <p className='text-sm font-semibold'>Wallet TOBE REAL</p>
                                <p className='font-bold'>0 Đ</p>
                            </div>
                        </div>
                </div>

                {/* content */}
                <div className='px-6 md:px-9'>
                    {/* form amount */}
                    <div className='mb-5'>
                        <label htmlFor="amount" className='text-sm sm:text-[16px] leading-tight font-medium mb-2 sm:mb-1 block'>Amout to deposit</label>
                        <input type="text"
                            id='amount'
                            value={amount} 
                            placeholder={`0 Đ`}
                            onChange={(e:any) => setAmount(e.target.value)}
                            className='w-full h-[45px] rounded-[5px] border border-black/10 bg-[#eee]
                            text-black/50 text-xl font-medium pl-9 focus:outline-none'
                        />
                    </div>  
                    <div className='mb-3 sm:mb-8'>
                        <p className='text-sm sm:text-[16px] leading-tight font-medium mb-2 sm:mb-1 block'>From money source</p>
                        <div className='shadow-md h-12 bg-[#fff4c0] border border-black/10 px-8 
                        flex items-center justify-between rounded-[8px] mb-3'>
                            <div className='flex justify-center items-center'>
                                <Image 
                                    src={'/dashboard/images/das-posting/vietcombank.png'}
                                    height={23}
                                    width={24}
                                    alt='vietcombank-logo'
                                    className='w-6 h-auto object-contain'
                                />
                                <p className='text-sm font-semibold ml-4'>Vietcombank</p>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7" fill="#FFD510" stroke="black"/>
                                </svg>
                            </span>
                        </div>
                        <div className='shadow-md h-12 bg-[#fff4c0] border border-black/10 px-8 
                        flex items-center justify-center rounded-[8px] cursor-pointer hover:shadow-md
                        transition duaration-200' onClick={handleToggleShowBank}>
                            <span className='mr-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                    <path d="M10.5 2.5V19.5" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                                    <path d="M19 11L2 11" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </span>
                            <p className='font-semibold text-sm'>Add bank</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-8'>
                        <button className='bg-gradient-right h-10 w-full rounded-[10px] max-w-[283px] mt-3 font-semibold hover:shadow-lg 
                            transition duration-200 hover:opacity-85 flex justify-center items-center'>
                                Withdraw
                        </button>
                    </div>

                    {/* table history */}
                    <div className='min-h-[292px] w-full shadow-gray bg-[#eee] rounded-lg relative font-inter mb-14'>
                        <div className='grid grid-cols-10 rounded-lg bg-white shadow-gray h-[30px] px-3 sm:px-7'>
                            <span className='col-span-1 flex justify-center items-center font-medium 
                            sm:text-[16px] text-sm leading-tight'>STT</span>
                            <span className='sm:col-span-3 col-span-4 flex justify-center items-center font-medium pl-5 
                            sm:text-[16px] text-sm leading-tight'>Day</span>
                            <span className='col-span-3 flex justify-center items-center font-medium 
                            sm:text-[16px] text-sm leading-tight'>Quatity</span>
                            <span className='sm:col-span-3 col-span-2 flex justify-center items-center font-medium 
                            sm:text-[16px] text-sm leading-tight'>Status</span>
                        </div>  

                        {/* row */}
                        <div className='grid grid-cols-10 h-[46px] border-b border-black/30 sm:mx-7 mx-3'>
                            <span className='col-span-1 flex justify-center items-center font-medium
                            sm:text-[16px] text-sm leading-tight'>1</span>
                            <span className='sm:col-span-3 col-span-4 flex justify-center items-center font-medium pl-5
                            sm:text-[16px] text-sm leading-tight'>30/10/2023</span>
                            <span className='col-span-3 flex justify-center items-center font-medium
                            sm:text-[16px] text-sm leading-tight'>5 Đ</span>
                            <span className='sm:col-span-3 col-span-2 flex justify-center items-center font-medium
                            sm:text-[16px] text-sm leading-tight'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M9.35788 17.9959C8.54761 18.0401 7.79394 17.7263 7.37466 17.166L0.331748 7.75584C-0.328363 6.87407 0.0273924 5.66602 1.12584 5.05816C2.22314 4.45077 3.64789 4.67229 4.30685 5.55406L9.19155 12.0864L15.6367 1.16492C16.2148 0.184648 17.6049 -0.264645 18.7398 0.160141C19.8746 0.584927 20.3262 1.7233 19.7487 2.70309L11.4202 16.8282C11.0391 17.475 10.2808 17.92 9.44046 17.9901C9.41332 17.9925 9.38618 17.9944 9.35903 17.9959H9.35788Z" fill="#FFD510"/>
                                </svg>
                            </span>
                        </div>
                        
                    </div>
                </div>

                {/* add bank */}
                <AddNewBank isShowAddBank={isShowAddBank} onClick={handleToggleShowBank} />
            </div>
        </div>
    </DashboardLayout>
  )
}

export default DepositPage

