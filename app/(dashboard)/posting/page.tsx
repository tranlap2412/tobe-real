import React from 'react'
import DashboardLayout from '../_ui/layout/DashboardLayout'
import PostCardVipSlide from './_ui/slide/PostCardVipSlide';
import { dataCardVip, dataCardPackage, dataOnlineTrading, dataTypeNews } from './_model/dataPosting';
import PostingPackageSlide from './_ui/slide/PostingPackageSlide';
import TypeOfNewsSlide from './_ui/slide/TypeOfNewsSlide';
import OnlineTrading from './_ui/slide/OnlineTrading';
import PostButton from './_ui/PostButton';
const PostingPage = () => {
  return (
    <DashboardLayout title='Price list posted in news'>
        <div className='xl:container px-3 sm:px-4 xl:mx-auto'>      
          <div className='sm:px-5 xl:pl-8 px-4 pt-7 sm:pt-10 xl:pt-14 pb-14'>
            {/* Benefits and annual account maintenance fees */}
            <PostCardVipSlide list={dataCardVip} />
  
            {/* Posting package */}
            <PostingPackageSlide list={dataCardPackage} />
  
              {/* Cost for each type of news */}
              <TypeOfNewsSlide list={dataTypeNews} />
  
            {/* Create an online trading platform */}
            <OnlineTrading list={dataOnlineTrading} />
  
            <div className='mt-[80px]'><PostButton /></div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default PostingPage