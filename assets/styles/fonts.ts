import { Montserrat, Inter,IBM_Plex_Sans, Poppins, Lato} from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin', 'vietnamese'],
    weight: ['200', '300', '400', '500', '600', '700']
})

export const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const ibmPlex = IBM_Plex_Sans({  
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '500', '600']
})

export const popins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
export const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900']
})