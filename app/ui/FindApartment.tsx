import React, { useState } from 'react'
import Image from 'next/image'
import Place from '@/icons/Header/Blockhead/Place'
function FindApartment() {
    const [cityChoosed, setCityChoosed] = useState('')
    const [rangePrice, setrangePrice] = useState({
        lowest: '',
        highest: ''
    })
    return (
        <div>
            <div className='bg-white pt-4 pb-7 '>
                <div className='container mx-auto px-3 md:px-8 xl:px-[56px] xl:px-auto lg:pb-[56px]'>
                    {/* title */}
                    <div className='flex flex-col lg:flex-row lg:items-center items-start max-lg:min-h-10 lg:min-h-[56px] mb-4 lg:mb-5 pl-2 md:pl-0 xl:pl-[15px]'>
                        <h2 className='font-bold text-[18px] leading-tight lg:text-xl font-montserrat mb-1 lg:mb-0'>Find Apartment that fits your budget! 💳</h2>
                        <p className='text-[10px] leading-tight lg:ml-10 font-montserrat font-bold'> Price below is Monthly price</p>
                    </div>

                    {/* border */}
                    <div className='w-full xl:mx-auto xl:w-[965px] lg:h-[190px] shadow-[0_0_5px_0_rgba(240,185,11,0.50)] rounded-[20px]'>
                        <div className='h-full py-4 sm:py-[26px] flex flex-col lg:flex-row lg:gap-0 gap-3'>
                            {/* form */}
                            <div className='h-full w-full md:w-[300px] xl:w-[375px] px-4 sm:px-6 md:pl-5 xl:pl-[37px] flex flex-col sm:flex-row lg:flex-col lg:justify-between gap-3 lg:gap-0'>
                                {/* Choose City */}
                                <div className='flex flex-col gap-2'>
                                    <label
                                        htmlFor=''
                                        className='text-[13px] leading-tight font-bold '>
                                        Choose City
                                    </label>
                                    {/* input */}
                                    <div className='flex items-center gap-[9px]'>
                                        <input
                                            className='h-10 w-full sm:w-[219px] border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Location'
                                        />
                                        <div className='w-8 h-8 rounded-full bg-[#E3E3E3] flex justify-center items-center hover:shadow-md cursor-pointer hover:opacity-85 transition duration-200'>
                                            <Place />
                                        </div>
                                    </div>
                                </div>

                                {/* Input Price */}
                                <div className='flex flex-col gap-2 lg:gap-1 sm:w-full lg:w-auto'>
                                    <label
                                        htmlFor=''
                                        className='text-[13px] leading-tight font-bold  '>
                                        Input Price
                                    </label>

                                    {/* input */}
                                    <div className='grid grid-cols-2 gap-[13px]  w-full sm:w-full md:w-[219px] '>
                                        <input
                                            className='h-10 w-full border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Lowest'
                                        />
                                        <input
                                            className='h-10 w-full border border-[#cdcdcd] rounded-[10px] pl-3 text-sm placeholder:text-[#ACB1C6] focus:outline-none '
                                            type='text'
                                            placeholder='Highest'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Frequently Used Price */}
                            <div
                                className='h-full flex-grow xl:flex-grow-0 xl:w-[590px] relative px-4 sm:px-6 lg:pl-8 lg:pr-5 xl:pr-10
                                before:w-px before:absolute before:top-0 before:bottom-0 before:left-0 lg:before:bg-black/20 '>
                                <p className='text-[13px] leading-tight font-bold mb-2'>
                                    Frequently Used Price
                                </p>
                                {/* group btn option fillter */}
                                <div className='flex justify-between items-center mb-[23px] gap-2 sm:gap-[22px]'>
                                    {/* button Frequently Budget*/}
                                    <div className='w-full lg:w-[163px] h-full sm:h-[50px] py-1 sm:py-0 border border-[#cdcdcd] rounded-[10px] 
                                    flex items-center sm:flex-row flex-col sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <div className='min-w-[38px] h-[38px] sm:ml-[6px] bg-[#ebebeb] rounded-full flex items-center justify-center'>
                                            <Image
                                                src={'/images/home/vector/budget.svg'}
                                                width={24}
                                                height={21}
                                                className='w-4 h-auto sm:w-auto sm:h-auto'
                                                alt='budget.svg'
                                            />
                                        </div>
                                        <div className='flex-grow flex flex-col justify-between sm:items-start items-center py-1 sm:h-auto h-full w-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight '>
                                                Budget
                                            </p>
                                            <div className='block sm:hidden w-1/2 h-px bg-[#cdcdcd] my-[2px]'></div>
                                            <p className='text-[10px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 4.5
                                            </p>
                                        </div>
                                    </div>

                                    {/* button Frequently Popular*/}
                                    <div className='w-full lg:w-[163px] h-full sm:h-[50px] py-1 sm:py-0 border border-[#cdcdcd] rounded-[10px] 
                                    flex items-center sm:flex-row flex-col sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <Image
                                              src={'/images/home/vector/popular.svg'}
                                              width={38}
                                              height={38}
                                              className='w-[38px] h-[38px] sm:ml-[6px]'
                                              alt='popular.svg'
                                          />
                                        <div className='flex-grow flex flex-col justify-between sm:items-start items-center py-1 sm:h-auto h-full w-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight '>
                                                Popular
                                            </p>
                                            <div className='block sm:hidden w-1/2 h-px bg-[#cdcdcd] my-[2px]'></div>
                                            <p className='text-[10px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 4.5 - 7
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* button Frequently Luxury*/}

                                    <div className='w-full lg:w-[163px] h-full sm:h-[50px] py-1 sm:py-0 border border-[#cdcdcd] rounded-[10px] 
                                    flex items-center sm:flex-row flex-col sm:gap-3 hover:shadow-md cursor-pointer transition duration-200'>
                                        <div className='min-w-[38px] h-[38px] sm:ml-[6px] bg-[#ebebeb] rounded-full flex items-center justify-center'>
                                            <Image
                                                src={'/images/home/vector/budget.svg'}
                                                width={24}
                                                height={21}
                                                className='w-4 h-auto sm:w-auto sm:h-auto'
                                                alt='budget.svg'
                                            />
                                        </div>
                                        <div className='flex-grow flex flex-col justify-between sm:items-start items-center py-1 sm:h-auto h-full w-full'>
                                            <p className='text-[12px] sm:text-[14px] leading-tight '>
                                                Luxury
                                            </p>
                                            <div className='block sm:hidden w-1/2 h-px bg-[#cdcdcd] my-[2px]'></div>
                                            <p className='text-[10px] sm:text-[14px] leading-tight font-bold'>
                                                &#60;$ 7
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/* buton submit Frequently */}
                                <button className=' w-full px-8 py-[8.5px] bg-gradient-right font-montserrat leading-tight text-[18px] font-medium 
                                rounded-[30px] cursor-pointer hover:shadow-md hover:opacity-95 transition duration-200'>Find Accomondation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindApartment
