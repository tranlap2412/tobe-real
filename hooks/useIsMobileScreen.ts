'use client'
import { useEffect, useState } from 'react'
export const useIsMobileScreen = () => {
    const [width, setWidth] = useState(1024)
    const handleWindowChange = () => { 
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        if (typeof window !== 'undefined') {
             window.addEventListener('load', handleWindowChange)
        }

        updateWidth()

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('load', handleWindowChange)
            }
        }
    }, [])
    return width < 640
}
