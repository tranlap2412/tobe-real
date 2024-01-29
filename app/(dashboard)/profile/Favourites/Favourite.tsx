import './style.css'
import Image from 'next/image'
import { USER_Jakartas } from './UserJakarta'

function Favourite() {
    return (
        <div className='Wrap-Favourite'>
            <div className='bg-TitleFavourite flex items-center'>
                <div className='flex pl-6 gap-5 items-center'>
                    <Image
                        width={25}
                        height={19}
                        className='w-[25px] h-[auto]'
                        src={'/dashboard/images/profile/HeartShape.png'}
                        alt='HeartShape'
                    />
                    <h2 className='top-title-Favourite'>Favourite</h2>
                </div>
            </div>
            <div className='Gr-form-Favourites flex flex-col items-center justify-center gap-3'>
                {USER_Jakartas.map((card, index) => (
                    <div
                        key={card.id}
                        className='wrap-gr-Favourites flex items-center justify-center gap-7 hover:shadow-lg'>
                        <div className='Gr-user-Jakartas flex items-center gap-1'>
                            <Image
                                width={31}
                                height={31}
                                className='w-[31px] h-[auto]'
                                src={card.Userimg}
                                alt='UserJakarta'
                            />
                            <div className='contentUsers-Favourite'>
                                <h4 className='w-[180px] text-black text-[10px] font-medium'>
                                    {card.UserName}
                                </h4>
                                <p className='w-[29px] text-black text-[7px] font-light'>
                                    Location
                                </p>
                            </div>
                        </div>
                        <Image
                            width={25}
                            height={19}
                            className='w-[25px] h-[auto]'
                            src={card.FavouriteImg}
                            alt='HeartShape'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favourite
