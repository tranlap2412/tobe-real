import React from 'react'
import './style.css'
import Image from 'next/image'
function TableDifference({ data }: { data: any }) {
    const iconPengelolaan = data?.iconPengelolaan
    const iconPemasaran = data?.iconPemasaran

    return (
        <div className='property-table-difference__items main grid grid-cols-3'>
            <div className='grid-item name-top bor-top bor-left !text-left !justify-start pl-5 '>
                {data?.name}
            </div>

            <div className='grid-item name-top bor-top bor-left bor-right'>
                {iconPengelolaan ? (
                    <Image
                        width={20}
                        height={20}
                        className='w-[20px] h-[auto]'
                        src={iconPengelolaan}
                        alt='Icon Pengelolaan'
                    />
                ) : (
                    <div className=' '>
                        <p>{data?.textPengelolaan}</p>
                    </div>
                )}
            </div>
            <div className='grid-item name-top bor-top bor-right'>
                {iconPemasaran ? (
                    <Image
                        width={20}
                        height={20}
                        className='w-[20px] h-[auto]'
                        src={iconPemasaran}
                        alt='Icon Pemasaran'
                    />
                ) : (
                    <div className=''>
                        <p>{data?.textPemasaran}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TableDifference
