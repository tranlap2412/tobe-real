import React, { useState } from 'react'

import Place from '@/icons/Header/Blockhead/Place'
import FormSelect from '@/components/FormSelect'
import CustomCheckbox from '@/components/CustomCheckbox'
interface BookingRentProps {
    toggleTab: string
}
const furnishs = [
    { value: 'semua', label: 'Semua' },
    { value: 'full furnished', label: 'Full Furnished' }
]
const rooms = [
    { value: 'semua', label: 'Semua' },
    { value: 'studio', label: 'Studio' },
    { value: '1br', label: '1BR' },
    { value: '2br', label: '2BR' },
    { value: '3br+', label: '3BR+' }
]
const properties = [
    { value: 'semua', label: 'semua' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'room', label: 'Room' },
    { value: 'orthers', label: 'Orthers' }
]
const buyListCheckbox = [
    { value: 'full furnished', label: 'Full Furnished' },
    { value: 'semi furnished', label: 'Semi Furnished' },
    { value: 'unfurnished', label: 'Unfurnished' }
]

const BookingRent: React.FC<BookingRentProps> = ({ toggleTab }) => {

    const [searchInput, setSearchInput] = useState('')
    const [searchLocation, setSearchLocation] = useState('')
    const [flexible, setFlexible] = useState(false)
    const [furnishSelected, setFurnishSelected]: [
        furnishSelected: any[],
        setFurnishSelected: any
    ] = useState([])
    const [roomSelected, setRoomSelected]: [
        roomSelected: any[], 
        setRoomSelected: any
    ] = useState([])
    const [propertySelected, setPropertySelected]: [
        propertySelected: any[],
        setPropertySelected: any
    ] = useState([])
    const [buyListSelected, setBuyListSelected]:[
        buyListSelected: string[], 
        setBuyListSelected: any
    ] = useState([])

    const handleByOptionType = (optionType: string, value: any) => {
        switch (optionType) {
            case 'furnishs':
                handleSelected(furnishSelected, setFurnishSelected, value)
                break
            case 'rooms':
                handleSelected(roomSelected, setRoomSelected, value)
                break
            case 'properties':
                handleSelected(propertySelected, setPropertySelected, value)
                break
            case 'buylist':
                handleSelected(buyListSelected, setBuyListSelected, value)
                break
            default:
                throw new Error('Invalid option type!')
        }
    }

    const handleSelected = (arrSelected: string[], setSelected: any, value: string) => {
        if (arrSelected.includes(value)) {
            setSelected(arrSelected.filter((option: any) => option !== value))
        } else {
            setSelected([...arrSelected, value])
        }
    }   
    return (
        <>
            {toggleTab === 'rent' ? (
                <div className='flex flex-col gap-2 sm:gap-[20px] py-4 px-2 sm:p-4 h-full '>
                    {/* row 1 */}
                    <div className='flex flex-col lg:flex-row items-start justify-between gap-3'>
                        {/* group date */}
                        <div className='flex items-center justify-start lg:justify-center w-full lg:w-auto gap-4'>
                            <button
                                className='btn w-[94px] flex justify-center items-center font-montserrat font-medium text-[15px] text-[#2e2e2e] rounded-[10px]
                                                hover:opacity-90 hover:cursor-pointer hover:shadow-yellow transition-all duration-300 bg-gradient-right'>
                                <span>Daily</span>
                            </button>
                            <button
                                className='btn w-[94px] flex justify-center items-center font-montserrat font-medium text-[15px] text-[#2e2e2e] rounded-[10px]
                                                hover:opacity-90 hover:cursor-pointer hover:shadow-md transition duration-300 bg-[#eee]'>
                                <span>Monthly</span>
                            </button>
                            <button
                                className='btn w-[94px] flex justify-center items-center font-montserrat font-medium text-[15px] text-[#2e2e2e] rounded-[10px]
                                                hover:opacity-90 hover:cursor-pointer hover:shadow-md transition duration-300 bg-[#eee]'>
                                <span>Yearly</span>
                            </button>
                        </div>

                        <div className='w-full sm:w-auto flex flex-col-reverse sm:flex-row gap-2 sm:gap-6'>
                            {/* group search */}
                            <div className='flex items-center gap-3'>
                                <input
                                    className='border border-[#cdcdcd] rounded-[20px] bg-[#fefdfe] h-9 sm:h-10 w-56 sm:w-[219px] pl-3 text-sm text-[#acb1C6] focus:ring-0 focus:outline-none flex-1 sm:flex-0'
                                    type='text'
                                    id='search'
                                    placeholder='Location'
                                    value={searchInput}
                                    onChange={(e: any) => setSearchInput(e.target.value)}
                                />
                                <button className='rounded-full w-8 h-8 bg-[#e3e3e3] flex justify-center items-center hover:shadow-sm group transition duration-200'>
                                    <Place
                                        className={
                                            'group-hover:drop-shadow-title transition duration-200'
                                        }
                                    />
                                </button>
                            </div>

                            {/* group filter by day */}
                            <div className='flex items-center gap-2 sm:gap-6'>
                                <div
                                    className='h-9 px-1 xl:px-6 rounded-[20px] border border-[#cdcdcd] select-none flex justify-center items-center 
                                                cursor-pointer active:shadow-md min-w-[120px] text-[12px] sm:text-[15px] font-montserrat font-medium'>
                                    <span>03-01-2024</span>
                                </div>
                                <div
                                    className='h-9 px-1 xl:px-6 rounded-[20px] border border-[#cdcdcd] select-none flex justify-center items-center 
                                                cursor-pointer active:shadow-md min-w-[120px] text-[12px] sm:text-[15px] font-montserrat font-medium'>
                                    <span>03-02-2024</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className='w-full flex flex-col lg:flex-row gap-2 lg:gap-6 '>
                        {/* select type */}
                        <div className=' grid sm:grid-cols-3 grid-cols-2 -mx-1 sm:-mx-2 gap-y-1 w-auto lg:w-full'>
                            <div className='w-full px-1 sm:px-2 z-[3]'>
                                <FormSelect
                                    options={furnishs}
                                    optionType='furnishs'
                                    selectedOption={furnishSelected}
                                    onChange={handleByOptionType}
                                    title='Furnish Type'
                                />
                            </div>
                            <div className='w-full px-1 sm:px-2 z-[2]'>
                                <FormSelect
                                    options={rooms}
                                    optionType='rooms'
                                    selectedOption={roomSelected}
                                    onChange={handleByOptionType}
                                    title='Room Type'
                                />
                            </div>
                            <div className='w-full px-1 sm:px-2 sm:col-span-1 col-span-2 z-[1]'>
                                <FormSelect
                                    options={properties}
                                    optionType='properties'
                                    selectedOption={propertySelected}
                                    onChange={handleByOptionType}
                                    title='Property Type'
                                />
                            </div>
                        </div>

                        {/* check flexible & search now */}
                        <div className='flex items-center justify-between lg:justify-center  gap-2 ml-2 lg:ml-0'>
                            <CustomCheckbox
                                label='I am flexible with dates'
                                checkedColor='#00FF47'
                                isChecked={flexible}
                                onChange={() => setFlexible(!flexible)}
                                bolder
                            />
                            <button
                                className='h-10 sm:w-36 bg-gradient-bottom rounded-[20px] flex justify-between items-center px-1 sm:px-3 hover:shadow-md
                                            transition-all duration-300'>
                                <p className='hidden sm:block sm:min-w-[82px] text-sm font-medium'>
                                    Search Now
                                </p>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 32 32'
                                    fill='none'>
                                    <circle
                                        cx='16'
                                        cy='16'
                                        r='15.5'
                                        fill='#F0B90B'
                                        stroke='white'
                                    />
                                    <path
                                        d='M19.5003 9.4999C17.0152 7.01485 12.9851 7.01485 10.5001 9.4999C8.01505 11.9849 8.01505 16.0151 10.5001 18.5001C12.7015 20.7015 16.1158 20.95 18.5927 19.251L21.6909 22.7166C22.2176 23.3081 23.1333 23.3324 23.6925 22.7733L23.7735 22.6923C24.3326 22.1331 24.3083 21.2174 23.7168 20.6907L20.2512 17.5925C21.9529 15.1129 21.7017 11.7013 19.5003 9.4999ZM17.9552 16.955C16.3238 18.5865 13.6766 18.5865 12.0452 16.955C10.4137 15.3236 10.4137 12.6764 12.0452 11.045C13.6766 9.41346 16.3238 9.41346 17.9552 11.045C19.5894 12.6791 19.5867 15.3236 17.9552 16.955Z'
                                        fill='#FEFDFE'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col justify-between gap-3 lg:gap-[15px] p-4 min-h-[132px] '>
                    {/* row 1 */}
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-8'>
                        {/* location search */}
                        <div className='flex items-center gap-3 sm:basis-[50%] lg:max-w-[50%] w-full'>
                            <div className='flex items-center flex-1 border border-[#cdcdcd] rounded-[20px] bg-[#fefdfe] pr-[2px]'>
                                <input
                                    className='h-9 sm:h-10  w-full sm:w-[219px] pl-5 text-[#acb1C6] focus:ring-0 rounded-l-[20px] 
                                    focus:outline-none sm:flex-1 text-[10px] sm:text-[16px] placeholder:text-pimary flex-grow'
                                    type='text'
                                    id='search'
                                    placeholder='Input Area / Apartment Name'
                                    value={searchLocation}
                                    onChange={(e: any) =>
                                        setSearchLocation(e.target.value)
                                    }
                                />
                                {/* search icon */}
                                <div className='w-9 h-9'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='36'
                                        height='36'
                                        viewBox='0 0 32 32'
                                        fill='none'>
                                        <circle
                                            cx='16'
                                            cy='16'
                                            r='15.5'
                                            fill='#F0B90B'
                                            stroke='white'
                                        />
                                        <path
                                            d='M19.5003 9.4999C17.0152 7.01485 12.9851 7.01485 10.5001 9.4999C8.01505 11.9849 8.01505 16.0151 10.5001 18.5001C12.7015 20.7015 16.1158 20.95 18.5927 19.251L21.6909 22.7166C22.2176 23.3081 23.1333 23.3324 23.6925 22.7733L23.7735 22.6923C24.3326 22.1331 24.3083 21.2174 23.7168 20.6907L20.2512 17.5925C21.9529 15.1129 21.7017 11.7013 19.5003 9.4999ZM17.9552 16.955C16.3238 18.5865 13.6766 18.5865 12.0452 16.955C10.4137 15.3236 10.4137 12.6764 12.0452 11.045C13.6766 9.41346 16.3238 9.41346 17.9552 11.045C19.5894 12.6791 19.5867 15.3236 17.9552 16.955Z'
                                            fill='#FEFDFE'
                                        />
                                    </svg>
                                </div>
                            </div>
                            <button className='rounded-full min-w-8 w-8 h-8  bg-[#e3e3e3] flex justify-center items-center hover:shadow-sm group transition duration-200'>
                                <Place
                                    className={
                                        'group-hover:drop-shadow-title transition duration-200'
                                    }
                                />
                            </button>
                        </div>

                        {/* checkbox group */}
                        <div className='flex items-center gap-5 max-w-full overflow-x-auto snap-mandatory invisible-scrollbar'>
                            { buyListCheckbox && buyListCheckbox.map((itemCheck, index) => (
                                    <CustomCheckbox 
                                    key={index}
                                    isChecked={buyListSelected.includes(itemCheck.value)} 
                                    label={itemCheck.label} 
                                    onChange={()=> handleByOptionType('buylist', itemCheck.value)} 
                                    checkedColor='#00FF47'
                                    bolder
                                    />
                                ))
                            }
                        </div>
                    </div> 
                    {/* row 2 */}
                    <div className='max-w-[169px]'>
                        <FormSelect
                            options={properties}
                            optionType='properties'
                            selectedOption={propertySelected}
                            onChange={handleByOptionType}
                            title='Property Type'
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default BookingRent
