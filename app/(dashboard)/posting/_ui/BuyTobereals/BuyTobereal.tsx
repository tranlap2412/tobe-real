import './style.css'
import Image from 'next/image'
function BuyTobereal({ data }: { data: any }) {
    return (
        <div className='Box-UserTobereal w-[325px] md:w-[360px] lg:w-[619px] flex justify-between items-center hover:shadow-lg'>
            <div className='infomations-UserTB flex items-start gap-2'>
                <Image
                    src={data?.imsUser}
                    alt='UserTB'
                    width={37}
                    height={37}
                    className='w-[37px] h-[auto]'
                />
                <div className='ContentTobereal '>
                    <p className='text-black text-base font-medium'>{data?.Name}</p>
                    <div className='UserContentTB flex flex-col pt-2 pl-2 gap-1'>
                        <p className='text-contentTB'>Project: {data?.project}</p>
                        <p className='text-contentTB'>Location: {data?.location}</p>
                        <p className='text-contentTB'>Content: {data?.content}</p>
                    </div>
                </div>
            </div>
            <button className='btn_BuyTB mt-10 hover:shadow-lg'>Buy</button>
        </div>
    )
}

export default BuyTobereal
 