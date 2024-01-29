'use clent'
import './style.css'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function OwnerData() {
    return (
        <div className='User'>
            <form method='post' className='form_group'>
                <div className='p-3'>
                    <label htmlFor='name' className='form_control'>
                        Full Name
                    </label>
                    <input className='text' type='text' id='name' placeholder='Name' />
                </div>
                <div className='p-3'>
                    <label htmlFor='phone' className='form_control'>
                        TelePhone
                    </label>
                    <input
                        className='text'
                        type='number'
                        id='phone'
                        placeholder='telepon'
                    />
                </div>
                <div className='p-3'>
                    <label htmlFor='email' className='form_control'>
                        Email
                    </label>
                    <input className='text' type='text' id='Email' placeholder='Email' />
                </div>
                <div className='p-3'>
                    <label htmlFor='whatsapp' className='form_control'>
                        Whatsapp
                    </label>
                    <input
                        className='text'
                        type='text'
                        id='Whatsapp'
                        placeholder='Whatsapp'
                    />
                </div>
            </form>

            <Autocomplete
                disablePortal
                id='combo-box'
                options={City}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin: '10px'
                    }
                }}
                renderInput={(params) => (
                    <TextField {...params} label='City' placeholder='City' />
                )}
            />
            <Autocomplete
                disablePortal
                id='combo-box'
                options={TOBEREAL}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10px',
                        borderRadius: '30px',
                        margin: '10px'
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='How did you know about TO BE REAL?'
                        placeholder='Select Source Type'
                    />
                )}
            />
            <Autocomplete
                disablePortal
                id='combo-box'
                options={Propertytype}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin: '10px'
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Property Type'
                        placeholder='Property Type'
                    />
                )}
            />
            <Autocomplete
                disablePortal
                id='combo-box'
                options={PropertyCon}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin: '10px'
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Property Condition'
                        placeholder='Property Type'
                    />
                )}
            />
        </div>
    )
}

const City = [
    { label: 'Jakarta' },
    { label: 'Bogor' },
    { label: 'Depok' },
    { label: 'Tangerang' },
    { label: 'Bekasi' },
    { label: 'Karawang' },
    { label: 'Bandung' },
    { label: 'Surabaya' },
    { label: 'Semarang' },
    { label: 'Makassar' },
    { label: 'Yogyakarta' },
    { label: 'Cikarang' },
    { label: 'Medan' },
    { label: 'Batam' },
    { label: 'Others' }
]
const TOBEREAL = [
    { label: 'Social media' },
    { label: 'Partner Banks' },
    { label: 'Facebook Forms' },
    { label: 'Radio' },
    { label: 'Car Stickers' },
    { label: 'Friend Referrals' },
    { label: 'Building Management' },
    { label: 'Banners/Billboards' },
    { label: 'Video inside an Elevator (Apt/Office)' },
    { label: 'Email Marketing' },
    { label: 'YouTube' },
    { label: 'Aviation Magazine' },
    { label: 'Magazine' },
    { label: 'Telemarketing' },
    { label: 'Events' },
    { label: 'Internal' },
    { label: 'Other' }
]
const Propertytype = [
    { label: 'Apartments' },
    { label: 'House' },
    { label: 'Villas' },
    { label: 'Room' },
    { label: 'Hostels' },
    { label: 'Guesthouse' }
]
const PropertyCon = [{ label: 'Completely Furnished' }, { label: 'Blank' }]
