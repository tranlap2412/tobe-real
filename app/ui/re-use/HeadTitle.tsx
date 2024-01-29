import React from 'react'
import Image from 'next/image'
import '@/assets/styles/base.css'
import SelectPlaceCustom from '@/components/SelectPlaceCustom'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const listSelect = [
    { id: 1, title: 'Jakarta', active: true },
    { id: 1, title: 'Bandung', active: false },
    { id: 1, title: 'Tanegrang', active: false },
    { id: 1, title: 'Jakarta', active: false },
    { id: 1, title: 'Bandung', active: false },
    { id: 1, title: 'Tanegrang', active: false }
]
interface HeadTitleProps {
    title: string
    icon?: string
    desc?: string
    select?: boolean
    seeAll?: boolean
    discount?: string
    descBolder?: boolean
    saleDealBadge?: string
    iconHeight?: number
    iconWidth?: number
    bgTitle?: string
    maxWidhtTitle?: number
    iconInline?: boolean
    borderSelectColor?: string
    showSelectSlide?: boolean
}
const HeadTitle: React.FC<HeadTitleProps> = ({
    title,
    icon,
    desc,
    select,
    seeAll,
    discount,
    descBolder,
    saleDealBadge,
    iconHeight, // kích thước heigth icon
    iconWidth, // kích thước width icon
    bgTitle, // vd: bg-white
    maxWidhtTitle, // thay đổi max width cho title trên mobile
    iconInline, // tùy chọn inline cho icon
    borderSelectColor, // vd: border-white
    showSelectSlide
}) => {
    let Icon = null
    if (icon) Icon = icon
    return (
        <div className={`w-full ${bgTitle ? bgTitle : ''}`}>
            <div className='container mx-auto'>
                <div className='px-3 md:px-8 xl:px-[71px] min-h-[56px] flex justify-between sm:items-center sm:pb-2'>
                    {/* Title */}
                    <div className={`flex gap-3 items-center lg:items-baseline`}>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='flex gap-3 sm:items-end items-center'>
                                <h2
                                    className={`font-bold text-[18px] leading-tight lg:text-[20px] lg:leading-6 font-montserrat ${
                                        maxWidhtTitle ? 'maxwidth-title__head' : ''
                                    }`}>
                                    {title}
                                    {icon && iconInline && (
                                        <Image
                                            src={icon}
                                            width={iconWidth ?? 34}
                                            height={iconHeight ?? 29}
                                            alt={'Icon-Head.png'}
                                            className={`w-auto h-[21px] inline-block ml-3 sm:ml-0 sm:hidden ${
                                                iconHeight
                                                    ? 'lg:w-auto lg:h-auto'
                                                    : 'lg:w-[34px] lg:h-[29px]'
                                            }`}
                                        />
                                    )}
                                </h2>
                                {icon && (
                                    <Image
                                        src={icon}
                                        width={iconWidth ?? 34}
                                        height={iconHeight ?? 29}
                                        alt={'Icon-Head.png'}
                                        className={`w-auto  h-[31px] ${
                                            iconHeight
                                                ? 'lg:w-auto lg:h-auto'
                                                : 'lg:w-[34px] lg:h-[29px]'
                                        } ${iconInline ? 'sm:inline-block hidden' : ''}`}
                                    />
                                )}
                            </div>
                            {/* Show discount */}
                            {discount ? (
                                <p className='text-[10px] leading-tight ml-8 font-medium font-montserrat hidden sm:block'>
                                    Discount up to{' '}
                                    <span className='text-[32px] font-montserrat font-medium'>
                                        {discount}%!
                                    </span>
                                </p>
                            ) : desc ? (
                                <p
                                    className={`text-[10px] leading-tight mt-2 sm:mt-3 sm:ml-3 lg:ml-8  font-montserrat ${
                                        descBolder ? 'font-bold' : 'font-medium'
                                    }`}>
                                    {desc}
                                </p>
                            ) : null}
                            {/* for weekly deal (end in) */}
                            {saleDealBadge && (
                                <p className='text-[10px] leading-tight sm:ml-3 lg:ml-5 font-montserrat font-medium self-start sm:self-end mb-1 mt-1 sm:mt-0'>
                                    Ends In
                                </p>
                            )}
                        </div>
                        {/* Badge */}
                        {saleDealBadge && (
                            <div
                                className='bg-gradient-to-r from-[#FFBEBE] to-[#FF5151] from-10% w-[66px] sm:w-[115px] h-[15px] sm:h-[26px] rounded-[5px]
                            text-center align-middle  ml-2 sm:ml-16 select-none flex justify-center items-center self-center mb-4 sm:mb-0 sm:self-none'>
                                <p className='text-white font-montserrat text-[10px] sm:text-[13px] '>
                                    {saleDealBadge}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className='flex gap-2 lg:gap-4 items-center sm:self-auto self-start'>
                        {/* Select */}
                        {select && <SelectPlaceCustom />}
                        {/* Btn See all */}
                        {seeAll && (
                            <button
                                className='h-7 w-16 lg:h-10 lg:w-32 sm:bg-gradient-right sm:rounded-md flex justify-center items-center sm:items-center align-middle 
                            hover:sm:shadow-md text-[15px] font-montserrat font-medium sm:no-underline underline sm:mt-0 mt-1'>
                                See All
                            </button>
                        )}
                    </div>
                </div>
                {/* Select slide on mobile */}
                {select && showSelectSlide && (
                    <div className='block sm:hidden pl-8 mt-2'>
                        <Swiper
                            modules={[FreeMode]}
                            spaceBetween={12}
                            slidesPerView={'auto'}
                            className=''>
                            {listSelect.slice(0, 3).map((item, index) => (
                                <SwiperSlide key={index} className='max-w-[150px]'>
                                    <div
                                        className={`select-none flex justify-center items-center h-7 rounded-[5px] border   ${
                                            item.active && 'bg-gradient-right'
                                        } ${borderSelectColor ?? 'border-white'}`}>
                                        {item.title}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeadTitle
