'use client'
import './style.css'
import RegisterNow from '@/components/RegisterNow/RegisterNow'
import Image from 'next/image'
// fetch data
import { JENIS_apartemen } from './Jenis'
import ShowJenisGr from './ui/ShowJenisGr/ShowJenisGr'
import { Difference } from './Differences'
import TableDifference from './ui/TableDifference/TableDifference'
import MainLayout from '@/layouts/MainLayout'
import { useRouter } from 'next/navigation'
//
function Property() {
    const router = useRouter()
    return (
        <MainLayout>
            <div className='wrapper bg-white'>
                <div className='home-wrap h-[650px] md:h-[450px]'>
                    <div className='Home-Solution container flex-col md:flex-row'>
                        <div className='title-Home text-center md:text-left'>
                            Chect out All ongoing promo
                        </div>
                        <RegisterNow />
                    </div>
                </div>
                <div className='Jenis-wrap container flex flex-col gap-10'>
                    <h3 className='title-reuse text-center md:text-left'>
                        Apa Jenis Unit Anda?
                    </h3>
                    <div className='Apartemen-Jenis-Gr flex flex-col justify-center gap-7 lg:flex-row'>
                        {JENIS_apartemen?.map((card) => (
                            <ShowJenisGr data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
                <div className='Wrap-Service-Options container flex flex-col gap-10'>
                    <h3 className='title-reuse text-center md:text-left'>
                        Our Service Options
                    </h3>
                    <div className='PropertyManagement-wrap flex flex-col-reverse gap-10 w-full justify-between lg:flex-row'>
                        <Image
                            width={306}
                            height={304}
                            className='w-[412px] h-[auto]'
                            src={'/images/property/SerOptions.png'}
                            alt=''
                        />
                        <div className='informations-PM flex flex-col justify-between max-w-[493px] gap-10 items-center md:gap-0 md:items-start '>
                            <div className='content-PM flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center md:text-left'>
                                    Property Management
                                </h4>
                                <p className='text-PM text-center md:text-left'>
                                    Professional management for your unit. Without any
                                    hassle, fully furnished and standardized. Can be
                                    rented daily, monthly and annually.
                                </p>
                            </div>
                            <button className='seeMore-btn wrap-btn'
                             onClick={() => router.push('/apartment')}>See More</button>
                        </div>
                    </div>
                    <div className='PropertyManagement-wrap flex flex-col gap-10 w-full justify-between lg:flex-row'>
                        <div className='informations-PM flex flex-col justify-between max-w-[493px] gap-10 items-center md:gap-0 md:items-start '>
                            <div className='content-PM flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center md:text-left'>
                                    S - HOME Realty
                                </h4>
                                <p className='text-PM text-center md:text-left'>
                                    Professional management for your unit. Without any
                                    hassle, fully furnished and standardized. Can be
                                    rented daily, monthly and annually.
                                </p>
                            </div>
                            <button className='seeMore-btn wrap-btn'
                            onClick={() => router.push('/promotion')}>See More</button>
                        </div>
                        <Image
                            width={412}
                            height={277}
                            className='w-[412px] h-[auto]'
                            src={'/images/property/RealtyOptions.png'}
                            alt='RealtyOptions img'
                        />
                    </div>
                </div>
                <div className='wrap-Differences container !p-0'>
                    <button className='Difference-btn title-Home text-center md:text-left'>
                        Difference between Apartment Management by
                        <br />
                        ............... and Home Marketing by .............
                    </button>
                    <div className='wrap-Difference-table'>
                        {Difference?.map((card) => (
                            <TableDifference data={card} key={card?.id} />
                        ))}
                    </div>
                </div>
                <div className='wrap-houses container '>
                    <div className='House-wrap flex flex-col gap-10 w-full justify-between pb-36 lg:flex-row'>
                        <div className='informations-House flex flex-col justify-between max-w-[493px] gap-10 items-center md:gap-0 md:items-start '>
                            <div className='content-House flex flex-col gap-5 '>
                                <h4 className='title-reuse text-center md:text-left'>
                                    Is your apartment and house empty?
                                </h4>
                                <p className='text-PM text-center md:text-left'>
                                    Dont win it, its better to make money. Come on! Just
                                    hand it over to ....................!
                                </p>
                            </div>
                            <button className='registerNow-btn wrap-btn'>
                                REGISTER NOW ➔
                            </button>
                        </div>
                        <Image
                            width={306}
                            height={304}
                            className='w-[306px] h-[auto]'
                            src={'/images/property/money.png'}
                            alt='money'
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Property
