'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/modules'
import React, { useState } from 'react'
import './style.css'
import Image from 'next/image'
// icon
import { IoAdd, IoRemoveOutline } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
// mui
import Skeleton from '@mui/material/Skeleton'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
// fetch data
import ManagementServices from './ui/ManagementServices/ManagementServices'
import TrancesNews from './ui/TrancesNews/TrancesNews'
import Properties from './ui/properties/properties'
import SlKatherine from './ui/SlKatherine/SlKatherine'
import ShowRoomSl from './ui/ShowRoomSl/ShowRoomSl'
import Calculates from './ui/Calulates/Calulates'
import { CALCULATES_DT } from './CalculatesDT'
import { ShowRoom_HOTEL } from './showRoom'
import { Testimonials } from './katherrinesData'
import { GR_properties } from './propertiesGr'
import { Services_TOBE } from './frame'
import { Traces_NEWS } from './News'
import { tabContents } from './FrequentlyQuestions'
// compoment
import RegisterNow from '@/components/RegisterNow/RegisterNow'
import MainLayout from '@/layouts/MainLayout'
import classNames from 'classnames'

// main Apartment
function Apartment() {
    // state

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const [visibleContentIndex, setVisibleContentIndex] = useState<number | null>(null)

    const [titleIconStates, setTitleIconStates] = useState<number[]>(
        Array(tabContents.length).fill(1)
    )
    const [textIconStates, setTextIconStates] = useState<number[]>(
        Array(tabContents[0].content.length).fill(3)
    )

    const handleTabClick = (tabIndex: number) => {
        setActiveTabIndex(tabIndex)
        setVisibleContentIndex(null)
        setTitleIconStates((prevStates) =>
            prevStates.map((state, index) => (index === tabIndex ? 2 : state))
        )
    }

    const handleSubContentClick = (subContentIndex: number) => {
        setVisibleContentIndex(
            visibleContentIndex === subContentIndex ? null : subContentIndex
        )
        setTextIconStates((prevStates) =>
            prevStates.map((state, index) =>
                index === subContentIndex ? (state === 3 ? 4 : 3) : state
            )
        )
    }
    // icon FAQ
    const getTitleIcon = (tabIndex: number) => {
        // Check if the current tab is active and return the appropriate icon
        return tabIndex === activeTabIndex && titleIconStates[tabIndex] === 2 ? (
            <IoAdd />
        ) : (
            <IoRemoveOutline />
        )
    }

    const getTextIcon = (subContentIndex: number) => {
        return textIconStates[subContentIndex] === 3 ? <SlArrowDown /> : <SlArrowUp />
    }

    // state
    const [isShowContent, setIsShowContent] = useState(true)

    return (
        <MainLayout>
            <div className='wrapper bg-white mb-32'>
                <div className='aprtment-wrap h-[650px] md:h-[450px]'>
                    <div className='Apartment-Solution container flex-col  md:flex-row'>
                        <div className='title-Apartment text-center md:text-left'>
                            Empty House & Apartment Solutions
                        </div>
                        <RegisterNow />
                    </div>
                </div>
                <div className='Management-Services container'>
                    <h2 className='text-black font-bold text-center text-2xl md:text-[32px]'>
                        Apartment Management Services by S - HOME
                    </h2>

                    <div className='Gr-Services grid grid-cols-1 gap-0 md:grid-cols-3 '>
                        {Services_TOBE?.map((card) => (
                            <ManagementServices data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
                <div className='Earnings-wrap container gap-10'>
                    {CALCULATES_DT?.map((card) => (
                        <Calculates data={card} key={card?.id} />
                    ))}
                </div>
                <div className='wrap-activities container gap-16'>
                    <h3 className='title-Calculates text-xl md:text-2xl text-center'>
                        All about your units activities at your fingertips
                    </h3>
                    {/* flex flex-col gap-5 lg:flex-row */}
                    <div className='activities flex flex-col gap-5 xl:flex-row'>
                        <div className='mkttop flex flex-col gap-5 md:flex-row'>
                            <div className='g-activies p-0 lg:p-3'>
                                <Image
                                    width={86.79}
                                    height={86.85}
                                    className='w-[86.79px] h-[86.85px]'
                                    src={'/images/apartment/mkt-activitie.png'}
                                    alt='activie'
                                />

                                <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                    Marketing and Market Reach
                                </h4>
                                <ul>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Agent Partner
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Corporate Partners
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Online Property Listing Partner
                                    </li>
                                </ul>
                            </div>
                            <div className='g-activies p-0 lg:p-3'>
                                <Image
                                    width={86.79}
                                    height={86.85}
                                    className='w-[86.79px] h-[86.85px]'
                                    src={'/images/apartment/clean-activitie.png'}
                                    alt='activie'
                                />

                                <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                    Clear Unit Description
                                </h4>
                                <p className='text-activie text-Calculate text-base md:text-xl'>
                                    Photography and Content Writing are clearly complete
                                    and professional
                                </p>
                                <ul>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Our team of photographers will take 360 ​​photos,
                                        facility videos, and detailed photos of your unit
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        The description and completeness of the unit was
                                        written by our content writer in detail.
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        With all the information listed on your property
                                        page, tenants will find it easy and confident to
                                        rent your unit online.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mktbottom flex flex-col gap-5 md:flex-row'>
                            <div className='g-activies p-0 lg:p-3'>
                                <Image
                                    width={86.79}
                                    height={86.85}
                                    className='w-[86.79px] h-[86.85px]'
                                    src={'/images/apartment/flexlble-activitie.png'}
                                    alt='activie'
                                />

                                <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                    Flexible Payment Options
                                </h4>

                                <ul>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Virtual Account / Bank Transfer
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Credit card
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Installments by Credit Card
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Monthly and annual rental installments without a
                                        credit card
                                    </li>
                                </ul>
                            </div>
                            <div className='g-activies p-0 lg:p-3'>
                                <Image
                                    width={86.79}
                                    height={86.85}
                                    className='w-[86.79px] h-[86.85px]'
                                    src={'/images/apartment/services-activitie.png'}
                                    alt='activie'
                                />

                                <h4 className='title-activie title-Calculates text-xl md:text-2xl text-center lg:text-left'>
                                    Service Standardization
                                </h4>

                                <ul>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Guaranteed unit standardization
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Accommodation Equipment (Wifi Ready, linen,
                                        toiletries, etc.)
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Customer Service 7 days a week
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Integrity and Transparency
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Trusted legal entity company
                                    </li>
                                    <li className='text-activie text-Calculate text-base md:text-xl '>
                                        Technician and Service Services 7 days a week
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrap-MarketingPartners container gap-6 lg:gap-8'>
                    <h3 className='title-Calculates text-xl md:text-2xl p-0 text-center lg:p-8'>
                        S - HOME Online Marketing Partner
                    </h3>

                    <div className='Top-Logos w-full flex flex-col gap-2 items-center justify-center lg:gap-9 md:flex-row '>
                        <div className='flex gap-2 lg:gap-9'>
                            <Image
                                width={142}
                                height={38}
                                className='w-[142px] h-[auto]'
                                src={'/images/apartment/logo-1.png'}
                                alt='top-logo'
                            />
                            <Image
                                width={72}
                                height={38}
                                className='w-[72px] h-[auto]'
                                src={'/images/apartment/logo-2.png'}
                                alt='top-logo'
                            />
                            <Image
                                width={120}
                                height={33}
                                className='w-[120px] h-[auto]'
                                src={'/images/apartment/logo-3.png'}
                                alt='top-logo'
                            />
                        </div>
                        <div className='flex gap-2 lg:gap-9'>
                            <Image
                                width={105}
                                height={38}
                                className='w-[105px] h-[auto]'
                                src={'/images/apartment/logo-4.png'}
                                alt='top-logo'
                            />
                            <Image
                                width={98}
                                height={38}
                                className='w-[98px] h-[auto]'
                                src={'/images/apartment/logo-5.png'}
                                alt='top-logo'
                            />
                        </div>
                    </div>
                    <div className='Bottom-Logos w-full flex flex-col gap-2 items-center justify-center lg:gap-9 md:flex-row '>
                        <div className='flex gap-2 lg:gap-9'>
                            <Image
                                width={115}
                                height={38}
                                className='h-[auto] w-[115px]'
                                src={'/images/apartment/logo-6.png'}
                                alt='bottom-logo'
                            />
                            <Image
                                width={179}
                                height={41}
                                className='h-[auto] w-[179px]'
                                src={'/images/apartment/logo-7.png'}
                                alt='bottom-logo'
                            />
                        </div>
                        <div className='flex gap-2 lg:gap-9'>
                            <Image
                                width={62}
                                height={25}
                                className='h-[auto] w-[62px]'
                                src={'/images/apartment/logo-8.png'}
                                alt='bottom-logo'
                            />

                            <Image
                                width={201}
                                height={31}
                                className='h-[auto] w-[201px]'
                                src={'/images/apartment/logo-9.png'}
                                alt='bottom-logo'
                            />
                        </div>
                    </div>
                </div>
                <div className='wrap-properties container'>
                    <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                        Whose properties do we market?
                    </h3>
                    <Image
                        width={684}
                        height={2}
                        className='line-propertie hidden h-[auto] lg:block'
                        src={'/images/apartment/svg/line-propertie.svg'}
                        alt='properties'
                    />
                    <div className='propertie-g flex gap-14 flex-col lg:flex-row'>
                        {GR_properties?.map((card) => (
                            <Properties data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
                <div className='wrap-Testimonials container'>
                    <h3 className='title-Calculates text-xl md:text-2xl pb-8'>
                        Testimonials
                    </h3>
                    <div className='slider-wrapper w-full'>
                        <Swiper
                            className='sliders-katherrine flex'
                            loop={false}
                            pagination={true}
                            navigation={{
                                prevEl: '.custom_prev',
                                nextEl: '.custom_next'
                            }}
                            modules={[Navigation, Pagination]}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1
                                },
                                550: {
                                    slidesPerView: 1
                                },
                                960: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 2
                                }
                            }}
                            // initialSlide={2}
                            spaceBetween={50}
                            slidesPerView={1}>
                            {Testimonials?.map((card) => (
                                <SwiperSlide key={card?.id}>
                                    <SlKatherine data={card} />
                                </SwiperSlide>
                            ))}

                            <span className='arrow-back mr-4  flex slick-arrow custom_prev'>
                                <Image
                                    width={20}
                                    height={20}
                                    className='w-[auto]'
                                    src={'/images/apartment/svg/slick-arrow-left.svg'}
                                    alt='slick-arrow-r'
                                />
                            </span>
                            <span className='arrow-next flex slick-arrow custom_next'>
                                <Image
                                    width={20}
                                    height={20}
                                    className='w-[auto]'
                                    src={'/images/apartment/svg/slick-arrow-right.svg'}
                                    alt='slick-arrow-r'
                                />
                            </span>
                        </Swiper>
                    </div>
                </div>
                <div className='Wrap-DevloperManagement container gap-5'>
                    <div className='nav-DevloperManagements flex-col items-center w-full gap-10'>
                        <div className='flex gap-10 justify-center'>
                            <button
                                onClick={() => setIsShowContent(true)}
                                className='title-Calculates text-xl md:text-2xl pb-6'>
                                Official Developer Partner
                            </button>

                            <button
                                onClick={() => setIsShowContent(false)}
                                className='title-Calculates text-xl md:text-2xl pb-6 '>
                                Building Management
                            </button>
                        </div>
                        <div className='pl-0 line-wrap flex justify-center gap-14 md:gap-2 md:pl-10'>
                            <div className={`${isShowContent ? '' : 'opacity-0'}`}>
                                <Image
                                    className='w-[336px] h-[auto]'
                                    src={'/images/apartment/line-DevMana.png'}
                                    height={2}
                                    width={336}
                                    alt='line'
                                />
                            </div>
                            <div className={`${isShowContent ? 'opacity-0' : ''}`}>
                                <Image
                                    className='w-[336px] h-[auto]'
                                    src={'/images/apartment/line-DevMana.png'}
                                    height={2}
                                    width={336}
                                    alt='line'
                                />
                            </div>
                        </div>

                        {isShowContent && (
                            <div className='w-full'>
                                <Swiper
                                    className='sliders-Dev'
                                    loop={false}
                                    pagination={true}
                                    navigation={{
                                        prevEl: '.custom_preva',
                                        nextEl: '.custom_nexta'
                                    }}
                                    modules={[Navigation, Pagination]}
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 1
                                        },
                                        550: {
                                            slidesPerView: 2
                                        },
                                        960: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 4
                                        }
                                    }}
                                    // initialSlide={2}
                                    spaceBetween={20}
                                    slidesPerView={2}>
                                    {ShowRoom_HOTEL?.map((card) => (
                                        <SwiperSlide key={card?.id}>
                                            <ShowRoomSl data={card} />
                                        </SwiperSlide>
                                    ))}

                                    <span className='arrow-back mr-4  flex slick-arrow custom_preva'>
                                        <Image
                                            width={20}
                                            height={20}
                                            className='w-[auto]'
                                            src={
                                                '/images/apartment/svg/slick-arrow-left.svg'
                                            }
                                            alt='slick-arrow-r'
                                        />
                                    </span>
                                    <span className='arrow-next flex slick-arrow custom_nexta'>
                                        <Image
                                            width={20}
                                            height={20}
                                            className='w-[auto]'
                                            src={
                                                '/images/apartment/svg/slick-arrow-right.svg'
                                            }
                                            alt='slick-arrow-r'
                                        />
                                    </span>
                                </Swiper>
                            </div>
                        )}

                        {!isShowContent && (
                            <div className='wrap-Logo-Manage flex flex-col justify-center align-center w-full min-h-[300px] '>
                                <div className='TopLogos-Management flex justify-center'>
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management1.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management2.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management3.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management4.png'
                                        }
                                        alt='logoPartner'
                                    />
                                </div>
                                <div className='BottomLogos-Managemant flex justify-center'>
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management5.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management6.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management7.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management8.png'
                                        }
                                        alt='logoPartner'
                                    />
                                    <Image
                                        width={138}
                                        height={80}
                                        className='w-[70px] h-[auto] lg:w-[138px]'
                                        src={
                                            '/images/apartment/logoPartner-Management9.png'
                                        }
                                        alt='logoPartner'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='wrap-TracesNews container gap-7'>
                    <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                        S - HOME Traces In The News
                    </h3>

                    <Swiper
                        className='gr-news sliders-Dev w-full'
                        loop={false}
                        pagination={true}
                        navigation={{
                            prevEl: '.custom_prevb',
                            nextEl: '.custom_nextb'
                        }}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            300: {
                                slidesPerView: 1
                            },
                            550: {
                                slidesPerView: 2
                            },
                            960: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 4
                            }
                        }}
                        // initialSlide={2}
                        spaceBetween={20}
                        slidesPerView={1}>
                        {Traces_NEWS?.map((card) => (
                            <SwiperSlide key={card?.id}>
                                <TrancesNews data={card} />
                            </SwiperSlide>
                        ))}
                        <span className='arrow-back mr-4  flex slick-arrow custom_prevb'>
                            <Image
                                width={20}
                                height={20}
                                className='w-[auto]'
                                src={'/images/apartment/svg/slick-arrow-left.svg'}
                                alt='slick-arrow-r'
                            />
                        </span>
                        <span className='arrow-next flex slick-arrow custom_nextb'>
                            <Image
                                width={20}
                                height={20}
                                className='w-[auto]'
                                src={'/images/apartment/svg/slick-arrow-right.svg'}
                                alt='slick-arrow-r'
                            />
                        </span>
                    </Swiper>
                    <button className='btn-SeeMore wrap-btn'>See More ➔</button>
                </div>
                <div className='apartmentHouse container flex-col lg:!flex-row'>
                    <div className='wrap-content-apartment pb-10 flex flex-col items-center lg:items-start'>
                        <h3 className='title-Calculates text-xl md:text-2xl text-center lg:!text-left'>
                            Is your apartment & house empty?
                        </h3>
                        <p className='textapartment text-center lg:!text-left'>
                            Dont win it, its better to make money. Come on! Just hand it
                            over to Travelio!
                        </p>
                        <button className='register-now-btn wrap-btn'>
                            REGISTER NOW ➔
                        </button>
                    </div>
                    <Image
                        width={427}
                        height={278}
                        className='h-[auto]'
                        src={'/images/apartment/apartmentHouse.png'}
                        alt='apartmentHouse'
                    />
                </div>

                <div className='Wrap-FAQ container'>
                    <h3 className='title-Calculates text-xl md:text-2xl pb-8 text-center'>
                        Frequently Asked Questions(FAQ)
                    </h3>
                    <div className='flex flex-col gap-12 lg:flex-row'>
                        <div className='questions max-w-[420px] md:min-w-[490px]'>
                            {tabContents.map((tab, tabIndex) => (
                                <button
                                    className='text-questions title-Calculates text-start text-xl flex md:text-2xl w-[364px] md:w-[434px]'
                                    key={tabIndex}
                                    onClick={() => handleTabClick(tabIndex)}>
                                    {getTitleIcon(tabIndex)}
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        <div className='content-answers flex flex-col'>
                            <ul>
                                {tabContents[activeTabIndex].content?.map(
                                    (subContent, subContentIndex) => (
                                        <li
                                            key={subContent.id}
                                            className={classNames(
                                                'list-item max-w-[420px] md:min-w-[490px] flex-col text-black text-base font-bold font-Montserrat'
                                            )}>
                                            <div
                                                className='flex justify-between'
                                                onClick={() =>
                                                    handleSubContentClick(subContentIndex)
                                                }>
                                                <span className='content-text-answers max-w-[360px]'>
                                                    {subContent.text}
                                                </span>
                                                <div className='rotate-180 origin-center delay-100'>{getTextIcon(subContentIndex)}</div>
                                            </div>
                                            {visibleContentIndex === subContentIndex && (
                                                <div className='show-content max-w-[430px] text-black text-[13px] font-medium font-Montserrat'>
                                                    {
                                                        tabContents[activeTabIndex]
                                                            .showContent[subContentIndex]
                                                    }
                                                </div>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </MainLayout>
    )
}

export default Apartment
