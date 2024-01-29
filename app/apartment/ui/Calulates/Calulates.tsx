import './style.css'
import Image from 'next/image'
function Calculates({ data }: { data: any }) {
    return (
        <div className='wrap-Calculates '>
            <Image
                width={423}
                height={363}
                className='w-[423px] h-[auto]'
                src={data?.img}
                alt='caluate'
            />
            <div className='content-Calculate'>
                <h3 className='nth-title title-Calculates text-xl md:text-2xl text-center lg:text-right'>
                    {data?.name}
                </h3>
                <p className='nth-content text-Calculate text-base md:text-xl text-center lg:text-right'>
                    {data?.content}
                </p>
            </div>
        </div>
    )
}

export default Calculates
