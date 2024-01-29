import React from 'react'
import './style.css'
import DashboardLayout from '../../_ui/layout/DashboardLayout'
import BuyTobereal from '../_ui/BuyTobereals/BuyTobereal'
import { UserTobereal_BUY } from './Buy-Tobereal'
const BuyProject = () => {
    return (
        <DashboardLayout title='Customers need to buy the project'>
            <div className='wrap-BuyProjects flex gap-14'>
                <div className='Gr-CustomersSelects flex flex-col justify-center items-center p-5'>
                    <div className='SelectSearch w-[318px] md:w-full xl:w-[619px]'>
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
                    <div className='SelectSearch w-[318px] md:w-full xl:w-[619px]'>
                        <label className='textLabel-Select font-bold' htmlFor='SLproject'>
                            Select project:{' '}
                        </label>
                        <input type='text' id='SLproject' className='inputSelect' />
                    </div>
                    <div className='SelectSearch w-[318px] md:w-[619px] items-center mt-7'>
                        <button className='btn-SearchBuy hover:shadow-lg'>search</button>
                    </div>
                    
                </div>
                <div className='Gr-UserTobereals flex flex-col justify-center items-center gap-2'>
                    {UserTobereal_BUY?.map((card) => (
                        <BuyTobereal data={card} key={card?.id} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default BuyProject
