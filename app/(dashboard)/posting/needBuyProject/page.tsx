import React from 'react'
import './style.css'
import DashboardLayout from '../../_ui/layout/DashboardLayout'
import BuyTobereal from '../_ui/BuyTobereals/BuyTobereal'
import { NeedTobereal_BUY } from './Buy-ToberealNeed'
const NeedBuyProject = () => {
    return (
        <DashboardLayout title='Customers need to buy - need to rent'>
            <div className='wrap-NeedBuyProjects flex flex-col gap-14 mt-20'>
                <div className='flex flex-col justify-center items-center gap-6 p-5'>
                    <div className='SelectSearch w-[318px] md:w-full xl:w-[619px] '>
                        <label className='textLabel-Select font-bold' htmlFor='Province'>
                            Select Province/City:
                        </label>
                        <input type='text' id='Province' className='inputSelect' />
                    </div>
                    <div className='SelectSearch w-[318px] md:w-full xl:w-[619px]'>
                        <label className='textLabel-Select font-bold' htmlFor='District'>
                            Select District:{' '}
                        </label>
                        <input type='text' id='District' className='inputSelect' />
                    </div>

                    <div className='SelectSearch w-[318px] md:w-[619px] items-center'>
                        <button className='btn-SearchBuy'>search</button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    {NeedTobereal_BUY?.map((card) => (
                        <BuyTobereal data={card} key={card?.id} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default NeedBuyProject
