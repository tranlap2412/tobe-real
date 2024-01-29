import React from 'react'
import Footer from './components/Footer'
import WrapperHeader from './components/WrapperHeader'
function MainLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <div className='relative'>
            <WrapperHeader />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
