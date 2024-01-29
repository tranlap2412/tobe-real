'use client'
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ModalComponent from '@/components/Modal/ModalComponent'
const WrapperHeader = ({fixedOnMbile}:{fixedOnMbile ?: boolean}) => {
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [isShowModal, setIsShowModal] = useState(true)
    const handleSetSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    }
    const handleToggleModal = () => {
        setIsShowModal(!isShowModal)
        console.log('isShowModal :>> ', isShowModal);
      }
    return (
        <div>
            <Header showSidebar={handleSetSidebar}  fixedOnMbile={fixedOnMbile}/>
            <Sidebar isShow={isShowSidebar} hiddenSidebar={handleSetSidebar} />
            <ModalComponent />
        </div>
    )
}

export default WrapperHeader
