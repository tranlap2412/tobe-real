import React, { useState } from 'react'
import Image from 'next/image'
import './style.css'
import { IoAdd } from 'react-icons/io5'
import IconEdit from '/public/dashboard/images/profile/svg/EditNameUser.svg'

function LinkWebsite() {
    // State để lưu trạng thái của tab được chọn
    const [activeTab, setActiveTab] = useState<string>('tab2')

    // Hàm xử lý sự kiện khi tab được click
    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }
    return (
        <div className='wrap-LinkWebsites'>
            <div className='bg-TitleLinkWebsite flex items-center'>
                <h2 className='top-title-LinkWebsite pl-16'>LinkWebsite</h2>
            </div>
            <div className='Gr-form-LinkWebsites flex flex-col items-center p-5 '>
                {/* Tabs */}
                <div className='flex flex-col gap-2 items-center'>
                    <div className='flex flex-col items-center'>
                        <div
                            className='btn-LinkWebsite flex items-center justify-between pl-8 pr-4'
                            onClick={() => handleTabClick('tab1')}
                            style={{
                                backgroundColor:
                                    activeTab === 'tab1' ? '#ccc' : 'transparent'
                            }}>
                            <p className='text-black text-sm font-medium'>
                                Link website:
                            </p>
                            <Image
                                width={14}
                                height={16}
                                className='Icon-EditName w-[14px] h-[auto]'
                                src={IconEdit}
                                alt='IconEdit'
                            />
                        </div>
                    </div>
                    <div>
                        {activeTab === 'tab1' && (
                            <div className='box-form-input flex flex-col items-center justify-center '>
                                <div className='Gr-input-bor flex items-end'>
                                    <input
                                        className='input-Link'
                                        type='text'
                                        id='IconAddLink1'
                                    />
                                    <label htmlFor='IconAddLink1'>
                                        <IoAdd />
                                    </label>
                                </div>
                                <div className='flex items-end'>
                                    <input
                                        className='input-Link'
                                        type='text'
                                        id='IconAddLink2'
                                    />
                                    <label htmlFor='IconAddLink2'>
                                        <IoAdd />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className='btn-LinkWebsite flex items-center justify-between pl-8 pr-4'
                        onClick={() => handleTabClick('tab2')}
                        style={{
                            backgroundColor: activeTab === 'tab2' ? '#ccc' : 'transparent'
                        }}>
                        <p className='text-black text-sm font-medium'>
                            Social network link
                        </p>
                        <Image
                            width={14}
                            height={16}
                            className='Icon-EditName w-[14px] h-[auto]'
                            src={IconEdit}
                            alt='IconEdit'
                        />
                    </div>

                    <div>
                        {activeTab === 'tab2' && (
                            <div className='box-form-input flex flex-col items-center justify-center '>
                                <div className='Gr-input-bor flex items-end'>
                                    <input
                                        className='input-Link'
                                        type='text'
                                        id='IconAddLink3'
                                    />
                                    <label htmlFor='IconAddLink3'>
                                        <IoAdd />
                                    </label>
                                </div>
                                <div className='flex items-end'>
                                    <input
                                        className='input-Link'
                                        type='text'
                                        id='IconAddLink4'
                                    />
                                    <label htmlFor='IconAddLink4'>
                                        <IoAdd />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LinkWebsite
