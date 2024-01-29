'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image';
import DashboardLayout from '../../_ui/layout/DashboardLayout';



const PostOptionPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab: React.SetStateAction<number>) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout title='Post'>
      <div className='Posting mt-[30px] pl-[30px]'>
        <div className='Menu'>
          <a className="menu_li" href='/posting/sell'>
            <p>Sell</p>
            <Image
              src="/dashboard/images/posting/img/Sell.png"
              alt="" 
              className='w-[40px] h-[38px]'
              width={40}
              height={38} />
          </a>
          <a className="menu_li" href='/posting/lease'>
            <p>Lease</p>
            <Image
              src="/dashboard/images/posting/img/Lease.png"
              alt=""
              className='w-[40px] h-[38px]'
              width={40}
              height={38} />
          </a>
          <a className="menu_li" href='/posting/need'>
            <p>Need to rent, Need to buy</p>
            <Image
              src="/dashboard/images/posting/img/Need_to.png"
              alt=""
              className='w-[40px] h-[38px]'
              width={40}
              height={38} />
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default PostOptionPage