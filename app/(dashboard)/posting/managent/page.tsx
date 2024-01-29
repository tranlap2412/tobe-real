import React from 'react'
import { POST_Managent } from './postManagent'
import ManamentPosts from './managentPosts/managentPosts'
import './style.css'

import DashboardLayout from '../../_ui/layout/DashboardLayout'
const Managent = () => {
    return (
        <DashboardLayout title='Post managent'>
            <div className='wrap-Managents container flex flex-col items-start gap-5 p-5 md:p-12'>
                {POST_Managent?.map((card) => (
                    <ManamentPosts data={card} key={card?.id} />
                ))}
            </div>
        </DashboardLayout>
    )
}

export default Managent
