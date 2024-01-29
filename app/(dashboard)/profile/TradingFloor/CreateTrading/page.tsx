'use client'
import classNames from 'classnames'
import DashboardLayout from '@/app/(dashboard)/_ui/layout/DashboardLayout'
import Image from 'next/image'
import React, { useState } from 'react'
import './style.css'
function CreateTrading() {
    const [selectedImageCT, setSelectedImageCT] = useState<File | null>(null)
    const [selectedImageCT1, setSelectedImageCT1] = useState<File | null>(null)

    const handleImageChangeCT = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT(file)
        }
    }
    const handleImageChangeCT1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]

        if (file) {
            setSelectedImageCT1(file)
        }
    }

    return (
        <DashboardLayout title='Create a trading platform for free'>
            <div className='CreateTrading-wrap container p-5 md:p-12 flex flex-col items-center md:items-start'>
                <div className='CreateTrading-container w-[142px] h-[142px] md:w-[226px] md:h-[226px]'>
                    <label
                        htmlFor='imageInput'
                        className={selectedImageCT ? 'has-image' : ''}>
                        <input
                            type='file'
                            id='imageInput'
                            accept='image/*'
                            onChange={handleImageChangeCT}
                        />

                        {selectedImageCT && (
                            <div
                                className='selected-image-preview w-[142px] h-[142px] md:w-[226px] md:h-[226px]'
                                style={{
                                    backgroundImage: `url(${URL.createObjectURL(
                                        selectedImageCT
                                    )})`
                                }}
                            />
                        )}
                        {!selectedImageCT && (
                            <div className='placeholder'>Choose Logo</div>
                        )}
                    </label>
                </div>
                <div className='Gr-wrap-inputCT p-0 md:p-5 xl:p-0'>
                    <div className='CT-grInput items-center md:items-start'>
                        <label
                            className='text-labelCT text-xs md:text-base'
                            htmlFor='NameTrading'>
                            Name of the trading platform
                        </label>
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full xl:w-[855.70px] md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name='NameTrading'
                            id='NameTrading'
                            placeholder='Name of the trading platform'
                        />
                    </div>
                    <div className='CT-grInput items-center md:items-start'>
                        <label
                            className='text-labelCT text-xs md:text-base'
                            htmlFor='DescriptionContent'>
                            Description content
                        </label>
                        <textarea
                            className='Description-Style w-[323px] h-[72px] md:w-full xl:w-[855.70px] md:h-[188px] text-labelCT text-xs md:text-base pl-2 md:pl-5 xl:pl-12 '
                            name='DescriptionContent'
                            id='DescriptionContent'
                            placeholder='Enter a description'
                        />
                    </div>
                    <div className='CT-grInput'>
                        <p className='text-labelCT text-xs md:text-base'>
                            Introductory photo
                        </p>
                        <div className='Image-Introductory w-[323px] h-[124px] md:w-full xl:w-[855.70px] md:h-[188px]'>
                            <label
                                htmlFor='imageIntroductory '
                                className={classNames('labelIntroductory', {
                                    selectedImageCT1
                                })}>
                                <input
                                    className='inputIntroductory'
                                    type='file'
                                    id='imageIntroductory '
                                    accept='image/*'
                                    onChange={handleImageChangeCT1}
                                />

                                {selectedImageCT1 && (
                                    <div
                                        className='Introductory-image-preview w-[323px] h-[124px] md:w-[855px] md:h-[188px]'
                                        style={{
                                            backgroundImage: `url(${URL.createObjectURL(
                                                selectedImageCT1
                                            )})`
                                        }}
                                    />
                                )}
                                {!selectedImageCT1 && (
                                    <div className='placeholder1 m-2 md:m-5'>0/10</div>
                                )}
                                <div className='overlayIntroductory m-2 md:m-5'>
                                    <Image
                                        className='iconCamera w-[19px] md:w-[50px] h-[auto]'
                                        width={50}
                                        height={37}
                                        alt='IconCameraBlack'
                                        src={
                                            '/dashboard/images/profile/IconCameraBlack.png'
                                        }
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='CT-grInput items-center md:items-start'>
                        <label className='text-labelCT text-xs md:text-base'>
                            Headquarters information
                        </label>
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Office address'
                        />
                        <div className='Child-input-informations flex justify-between w-[323px] md:w-full'>
                            <input
                                className='text-labelCT text-xs md:text-base w-[97px] h-[36px] md:w-[157px] xl:w-[257px] md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                                type='text'
                                name=''
                                id=''
                                placeholder='Province/city'
                            />
                            <input
                                className='text-labelCT text-xs md:text-base w-[97px] h-[36px] md:w-[157px] xl:w-[257px] md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                                type='text'
                                name=''
                                id=''
                                placeholder='County'
                            />
                            <input
                                className='text-labelCT text-xs md:text-base w-[97px] h-[36px] md:w-[157px] xl:w-[257px] md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                                type='text'
                                name=''
                                id=''
                                placeholder='Ward/Commune'
                            />
                        </div>
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='number'
                            name=''
                            id=''
                            placeholder='Phone'
                        />
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='number'
                            name=''
                            id=''
                            placeholder='Hotline:'
                        />
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Website:'
                        />
                    </div>
                    <div className='CT-grInput'>
                        <p className='text-labelCT text-xs md:text-base'>Website</p>
                        <Image
                            width={856}
                            height={855}
                            className='w-[323px] h-[auto] md:w-[856px]'
                            alt='MapHCM'
                            src={'/dashboard/images/profile/Map.jpg'}
                        />
                    </div>
                    <div className='CT-grInput md:pr-5 md:pl-5 xl:p-0'>
                        <p className='text-labelCT text-xs md:text-base'>
                            Branch information
                        </p>
                        <button className='AddBranch-CT hover:shadow-lg flex w-[323px] h-[36px] md:w-full xl:w-[855.70px] md:h-[50px] bg-gradient-to-b from-yellow-500 to-yellow-200 rounded-[5px] border justify-center gap-5 text-xs md:text-xl'>
                            <Image
                                width={32}
                                height={32}
                                className='w-[12px] md:w-[32px] h-[auto]'
                                alt='addBranch'
                                src={'/dashboard/images/profile/AddBranch-Icon2.png'}
                            />
                            Add branch
                        </button>
                    </div>
                    <div className='CT-grInput items-center md:items-start'>
                        <label className='text-labelCT text-xs md:text-base' htmlFor=''>
                            Contact person information
                        </label>
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Full name'
                        />
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Position'
                        />
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='email'
                            name=''
                            id=''
                            placeholder='Email'
                        />
                        <input
                            className='text-labelCT text-xs md:text-base w-[323px] h-[36px] md:w-full md:h-[50px] bg-neutral-200 rounded-[5px] border border-white border-opacity-10 pl-2 md:pl-5 xl:pl-12 '
                            type='text'
                            name=''
                            id=''
                            placeholder='Phone'
                        />
                    </div>
                    <div className='CT-grInput w-[323px] md:w-full md:pr-10 md:pl-10 xl:p-0 xl:w-[855.70px] flex items-center'>
                        <button className='Create-Btn hover:shadow-lg w-[283px] h-[40px] md:w-full xl:w-[749.73px] md:h-[70px] bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-[10px] text-black text-sm md:text-[32px] font-bold'>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
export default CreateTrading
