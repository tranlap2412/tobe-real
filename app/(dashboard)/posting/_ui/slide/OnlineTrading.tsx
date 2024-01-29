'use client'
import React, { useState } from 'react'
import { dataOnlineTradingProperty } from '../../_model/dataPosting'
import { IoIosArrowDown } from 'react-icons/io'
import '../../_style/posting-page.css'
import '../../_style/online-trading.css'

interface OnlineTradingSlideProps {
    list: dataOnlineTradingProperty[]
}
const OnlineTrading: React.FC<OnlineTradingSlideProps> = ({ list }) => {
    const [isShow, setIsShow] = useState(false)
    const handleSetIsShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div
            className={`block-slide-card__online-trading-wrapper show-card__shadow ${
                isShow ? 'show' : ''
            }`}>
            <div
                className='w-full h-[57px] flex justify-between items-center px-3 sm:px-6 border border-primary/50 rounded-[4px] bg-white 
              cursor-pointer hover:shadow-md transition duration-200 group absolute top-0 left-0 z-[1]'
                onClick={handleSetIsShow}>
                <p className='text-[14px] leading-tight sm:text-[16px]'>Create an online trading platform</p>   
                <IoIosArrowDown
                    size={20}
                    className={`group-hover:drop-shadow-md transition-all duration-300 ${
                        isShow ? '-rotate-180' : ''
                    }`}
                />
            </div>

            {/* show info Benefits and annual account maintenance fees  */}
            {/* max-w-[960px]  */}
            <div
                className={`block-slide-card__online-trading posting-slide__container absolute top-0 left-0 w-full h-[414px] pt-[57px] 
             bg-white rounded-b-[4px] px-6 z-0  overflow-x-auto  ${
                 isShow ? 'show' : ''
             }`}>
                <div className='h-full py-6 flex gap-[22px] min-w-[540px]'>
                    {list.map((item, index) => (    
                        <div
                            key={index}
                            className={`posting-card__vip-bg min-w-[260px] max-w-[260px] h-[291px] border border-primary/50
                        pb-2 text-center rounded-2xl flex-grow-0`}>
                            <p className='text-white text-[15px] leading-[22px] font-semibold pt-3 flex items-center justify-center 
                            pb-[6px] mb-3 mx-6 border-b border-white  '>
                                {item.title}
                            </p>
                            <p className='text-center font-bold text-[10px] leading-[15px] mb-3'>
                                Suitable object <br /> <span className='font-normal'>appears</span>
                            </p>
                            
                            <div className='list-online-trading'>

                                <div className='online-trading__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                    Introducing the trading floor <br />
                                        <span className='font-normal'>
                                            {item.introducing ? 'Yes': 'No'}
                                        </span>
                                    </p>
                                </div>

                                <div className='online-trading__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                    Path Map <br />
                                        <span className='font-normal'>
                                            {item.pathMap ? 'Yes': 'No'}
                                        </span>
                                    </p>
                                </div>

                                <div className='online-trading__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                    List of trading floors <br />
                                        <span className='font-normal'>
                                            {item.listTradingFloor ? 'Yes': 'No'}
                                        </span>
                                    </p>
                                </div>

                                <div className='online-trading__item'>
                                    <p className='font-semibold text-[10px] leading-[15px]'>
                                    Contact <br />
                                        <span className='font-normal'>
                                            {item.contact ? 'Yes': 'No'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OnlineTrading
