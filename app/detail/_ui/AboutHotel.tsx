import React from 'react'

interface AboutHotelProps {
    description: string
    listAbout: {
        title: string
        content: string[]
    }[]
}

const AboutHotel: React.FC<AboutHotelProps> = ({ description, listAbout }) => {
    return (
        <div className='flex flex-col gap-4'>
            {listAbout.map((contentItem: any, index: number) => (
                <div key={index}>
                    <h5 className='font-bold mb-3'>{contentItem.title}</h5>
                    {index === 0 ? (
                        <p className='pl-2 font-medium text-[10px] text-[#969696]'>
                            {contentItem.content[0]}
                        </p>
                    ) : (
                        <ol className='list-decimal pl-4'>
                            {contentItem.content.map(
                                (item: string, itemIndex: number) => {
                                    return (
                                        <li
                                            key={itemIndex}
                                            className='font-medium text-[10px] text-[#969696]'>
                                            {item}
                                        </li>
                                    )
                                }
                            )}
                        </ol>
                    )}
                </div>
            ))}
            <p className='font-medium text-[10px] text-[#969696] pt-8'>{description}</p>
        </div>
    )
}

export default AboutHotel
