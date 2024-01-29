import React from 'react'
import Image from 'next/image'
function OthersBottomCard() {
    return (
        <div className='container mx-auto px-3 md:px-7 xl:px-[70px] pt-6 pb-[88px]'>
            {/* Card */}
            <div className='mb-6'>
                <h2 className='text-[18px] sm:text-xl sm:leading-[24px] leading-[22px] font-bold font-montserrat mb-2'>
                    3 Benefits to Stay at Apartmen
                </h2>
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-[76px] h-auto md:h-[280px] lg:h-[220px] w-full bg-gradient-card rounded-[10px] py-4 px-5  md:py-6 md:pr-[30px] md:pl-[70px]'>
                    <Image
                        src={'/images/home/bottom-card/capa_1.png'}
                        width={179}
                        height={161}
                        className='w-[120px] sm:w-[179px] h-auto object-cover flex-shrink-0'
                        alt='capa_1.png'
                    />
                    <div>
                        <p className='text-[12px] sm:text-[13px] font-bold font-montserrat sm:leading-4 leading-tight mb-5'>
                            Strategic location <br />
                            Easy access to public transportation <br />A bunch of
                            exclusive facilities that improve your quality of life
                        </p>
                        <p className='text-[10px] sm:text-[13px] font-medium font-montserrat leading-tight sm:leading-4'>
                            Located in strategic areas, you can access apartment buildings
                            more easily. Some of them are also integrated to public
                            transportation access such as Commuter Line, TransJakarta, MRT
                            and LRT. Not only that, apartment buildings also provide
                            facilities to escalate the quality of your lifestyle. 24 hours
                            security, minimarket, jogging track, kids playground, swimming
                            pool, fitness center, sauna, basketball and tennis court are
                            just to name a few. Last but not least, stunning city views
                            are something you can enjoy every day right from your balcony.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='mb-6'>
                <h2 className='text-[18px] sm:text-xl sm:leading-[24px] leading-[22px] font-bold font-montserrat mb-2'>
                    Why You Should Choose Apartment By ............?
                </h2>
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-[76px] h-auto md:h-[280px] lg:h-[220px] w-full bg-gradient-card rounded-[10px] py-4 px-5  md:py-6 md:pr-[30px] md:pl-[70px]'>
                    <Image
                        src={'/images/home/bottom-card/capa_2.png'}
                        width={169}
                        height={149}
                        className='w-[120px] sm:w-[169px] h-auto object-cover flex-shrink-0'
                        alt='capa_2.png'
                    />
                    <div>
                        <p className='text-[12px] sm:text-[13px] font-bold font-montserrat sm:leading-4 leading-tight mb-5'>
                            A wide selection of units both fully furnished and unfurnished{' '}
                            <br />
                            A fully equipped unit <br />
                            Available for daily, monthly and yearly rent <br />
                            Provide 3 type of classes: standard & premium <br />
                            Yearly installment without credit card
                        </p>
                        <p className='text-[10px] sm:text-[13px] font-medium font-montserrat leading-tight sm:leading-4'>
                            Travelio is providing wide selections of fully furnished units
                            and affordable unfurnished units as well. Apartment by
                            Travelio is professionally managed by a hospitality expert
                            team. Not only that, you can make daily, monthly or yearly
                            booking with 3 different types of class, standard & premium
                            that will satisfy your needs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='mb-6'>
                <h2 className='text-[18px] sm:text-xl sm:leading-[24px] leading-[22px] font-bold font-montserrat mb-2'>
                    3 Benefits to Stay at Apartmen
                </h2>
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-[76px] h-auto md:h-[280px] lg:h-[220px] w-full bg-gradient-card rounded-[10px] py-4 px-5  md:py-6 md:pr-[30px] md:pl-[70px]'>
                    <Image
                        src={'/images/home/bottom-card/capa_3.png'}
                        width={158}
                        height={167}
                        className='w-[120px] sm:w-[158px] h-auto object-cover flex-shrink-0'
                        alt='capa_3.png'
                    />
                    <div>
                        <p className='text-[12px] sm:text-[13px] font-medium font-montserrat leading-4 mb-5'>
                            These are the benefits of renting ................. Apartments
                            daily, monthly and yearly: the units that we manage are
                            already standardized and complete with amenities, linen of
                            fantastic quality, wifi, as well as furniture like AC, TV,
                            kitchenware and silverware. Our prices are also competitive
                            compared to other unit operators
                        </p>
                        <p className='text-[10px] sm:text-[13px] font-medium font-montserrat leading-tight sm:leading-4'>
                            For those who rent monthly and yearly in Travelio, units will
                            also already have been standardized, furnished and will
                            already have kitchenware. If renting more than one month, you
                            can also pay per month. If you rent yearly, you can also use
                            our instalment payment scheme without needing a credit card.
                            We also provide the option to rent apartments without linen
                            and cleaning included.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OthersBottomCard
