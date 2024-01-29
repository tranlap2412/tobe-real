import Image from 'next/image'
import './style.css'
function Properties({ data }: { data: any }) {
    return (
        <div className='group-properties'>
            <Image
                className='hidden w-[auto] lg:block'
                width={12}
                height={39}
                src={data?.img}
                alt='properties'
            />
            <div className='box-propertie'>
                <p className='content-propertie text-Calculate text-base md:text-xl '>
                    {data?.content}
                </p>
            </div>
        </div>
    )
}

export default Properties
