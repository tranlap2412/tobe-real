/* eslint-disable @next/next/no-img-element */
'use client'
import './styles.css'
import './mobi.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { api_content } from './product'
import { grid } from './grid'
import Main from './ui/Grid/page'
import Page from './ui/Product/page'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import MainLayout from '@/layouts/MainLayout'

export default function House() {
    return (
        <MainLayout>
            <div className='product_resgister'>
                <div className='background'>
                    <img src={'/images/house/Page.png'} alt='' />
                </div>
                <div className='menu'>
                    <div className='text_searching'>Searching for! House for rent!</div>
                    <div className='overlap'>
                        <div className='text_resgister'>Resgister Now</div>
                        <Autocomplete
                            disablePortal
                            id='combo-box'
                            options={Asset_type}
                            sx={{
                                width: 300,
                                '& .MuiOutlinedInput-root': {
                                    padding: '10',
                                    borderRadius: '30px',
                                    margin: '10px'
                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label='Asset type'
                                    placeholder='Asset type'
                                />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            id='combo-box'
                            options={interior}
                            sx={{
                                width: 300,
                                '& .MuiOutlinedInput-root': {
                                    padding: '10',
                                    borderRadius: '30px',
                                    margin: '10px'
                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label='Interior'
                                    placeholder='Interior'
                                />
                            )}
                        />

                        <Autocomplete
                            disablePortal
                            id='combo-box'
                            options={Asset}
                            sx={{
                                width: 300,
                                '& .MuiOutlinedInput-root': {
                                    padding: '10',
                                    borderRadius: '30px',
                                    margin: '10px'
                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label='Asset '
                                    placeholder='Asset'
                                />
                            )}
                        />

                        <button className='button'>
                            <a href='#' className='registered'>
                                REGISTERED
                            </a>
                        </button>
                    </div>
                </div>

                <div className='product_menu'>
                    <div className='product_menu_btn'>
                        <div className='container_menu'>
                            <div className='content_trusted'>
                                Trusted Real Estate Partner!
                            </div>
                            <h1 className='text_leading'>
                                Leading in its field, Home Marketing by Travelio provides
                                a wide marketing reach by combining Online Real Time
                                Availability and Offline Networks. Get transparency and
                                ease in monitoring your home rental through the LioPartner
                                Application.
                            </h1>
                        </div>
                        <div className='img-frame'>
                            <img src={'/images/house/svg/Frame.svg'} alt='' />
                        </div>
                    </div>
                </div>
                <div className='content_tobe'>
                    <div className='to-be-real'>
                        Home Marketing Benefits by Smart REAL
                    </div>
                    <div className='slider_tobe'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className='myswiper'>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Professional Photographer
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            Your unit will be photographed by our team of
                                            professional photographers to capture the best
                                            aspects of your unit.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/1.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Professional Content Writer
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            Content is the salesman in the online world.
                                            Our content writers will describe each unit
                                            uniquely highlighting the best aspects.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/2.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            No. 1 in Indonesia
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            ................. is the number 1 and largest
                                            site for residential rentals. Serving tens of
                                            thousands of rentals every month.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/3.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Property Partner Site
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            Marketing through leading property sites in
                                            Indonesia.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/4.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Passive Income
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            Monthly rent
                                            <br />
                                            Annual Rent
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/5.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Search Engine Rank
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            ................. has the first page ranking
                                            in search engines mostly for apartment rental
                                            keywords.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/6.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Corporate Partner
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            ................... has been dedicated to
                                            helping hundreds of our corporate partners in
                                            providing accommodation for expatriate and
                                            intercity workers.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/7.svg' alt='' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product_color'>
                                    <p className='professional'>
                                        <span className='content_text'>
                                            Agent Partner
                                            <br />
                                        </span>
                                        <span className='span'>
                                            <br />
                                        </span>
                                        <span className='over_text'>
                                            <br />
                                        </span>
                                        <span className='span'>
                                            Agent Partners are not our competitors, but
                                            partners. We collaborate with property agents
                                            throughout Indonesia.
                                        </span>
                                    </p>
                                    <img src='/images/house/svg/8.svg' alt='' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='content_api'>
                    <div className='text-api'>Servis Pemasaran Rumah oleh TO BE REAL</div>
                    <div className='container_grid'>
                        {api_content?.map((card) => (
                            <Main data={card} key={card?.id} />
                        ))}
                    </div>
                    <div className='container_card'>
                        {grid?.map((card) => (
                            <Page data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

const Asset_type = [
    { label: 'Apartments' },
    { label: 'House' },
    { label: 'Villas' },
    { label: 'Room' },
    { label: 'Hostels' },
    { label: 'Guesthouse' }
]
const interior = [{ label: 'Fully Furnished' }]
const Asset = [
    { label: 'Jakarta' },
    { label: 'Bogor' },
    { label: 'Depok' },
    { label: 'Tangerang' },
    { label: 'Bekasi' },
    { label: 'Karawang' },
    { label: 'Bandung' },
    { label: 'Surabaya' },
    { label: 'Semarang' },
    { label: 'Makassar' },
    { label: 'Yogyakarta' },
    { label: 'Cikarang' },
    { label: 'Medan' },
    { label: 'Batam' },
    { label: 'Others' }
]
