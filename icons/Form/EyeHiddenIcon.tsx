'use client'
import Image from 'next/image'
function EyeHiddenIcon({ ...props }) {
    return (
        <Image
            width={18}
            height={18}
            src={'/images/auth/eye-hidden.png'}
            alt='eye-hidden.png'
        />
    )
}
export default EyeHiddenIcon
