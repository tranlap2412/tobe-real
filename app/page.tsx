'use client'
import MainLayout from '@/layouts/MainLayout'

import HotelResidence from './ui/HotelResidence'
import RealEstateSale from './ui/RealEstateSale'
import HotelLioStay from './ui/HotelLioStay'
import MonthlyCheaperPrice from './ui/MonthlyCheaperPrice'
import FindBestUnit from './ui/FindBestUnit'
import PremiumRoom from './ui/PremiumRoom'
import FindApartment from './ui/FindApartment'
import WeeklyHotDeals from './ui/WeeklyHotDeals'
import BestSellingApartment from './ui/BestSellingApartment'
import RecommendedApartments from './ui/RecommendedApartments'
import RecommendedHouse from './ui/RecommendedHouse'
import LookingForPlace from './ui/LookingForPlace'
import OthersBottomCard from './ui/OthersBottomCard'
import HeadingSlideBlock from '@/components/HeadingSlideBlock'


export default function Home() {
    return (
        <MainLayout>
            {/* Heading block with filter */}
            <HeadingSlideBlock 
            imageUrl={'/images/home/img-content-headblock.png'} 
            title='Utility and quality'
            description='Create a good living or working environment, with the right amenities and quality for you'
            />

            {/* content */}
            <div className='h-full pb-8 sm:pb-16'>
                {/* Hotel Residence */}
                <HotelResidence />

                {/* Real Estate Sales */}
                <RealEstateSale />

                {/* Stay with Thematic and Instagram Ambience at LioStay */}
                <HotelLioStay />

                {/* Stay Monthly For Cheaper Prices */}
                <MonthlyCheaperPrice />

                {/* Find Best Units for Staycation */}
                <FindBestUnit />

                {/* Premium */}
                <PremiumRoom />

                {/* Find Apartment that fits your budget! */}
                <FindApartment />

                {/* Weekly Hot Deals */}
                <WeeklyHotDeals />

                {/* Best Selling Apartment Buildings  */}
                <BestSellingApartment />

                {/* Recommended Apartments */}
                <RecommendedApartments />

                {/* Recommended Houses 🏠 */}
                <RecommendedHouse />

                {/* Looking for a place to stay */}
                <LookingForPlace />

                {/* 3 Benefits to Stay at Apartment */}
                <OthersBottomCard />
            </div>
        </MainLayout>
    )
}
