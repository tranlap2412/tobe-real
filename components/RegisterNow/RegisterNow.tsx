'use client'

import './style.css'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { SlArrowDown } from 'react-icons/sl'
function RegisterNow() {
    return (
        <div className='Gr-RegisterNow p-3 md:p-5'>
            <p className='text-register'>Register Now</p>
            <div className='Asset-Gr'>
                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,
                       
                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px',
                            marginTop: '8px'
                        },
                        '& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                            {
                                marginRight: '40px'
                            },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Asset type' />
                            <div className='absolute top-3 right-5 pt-[10px]'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />

                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,

                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px',
                            marginTop: '8px'
                        },
                        '& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                            {
                                marginRight: '40px'
                            },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Interior' />
                            <div className='absolute top-3 right-5 pt-[10px]'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />
                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,

                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px',
                            marginTop: '8px'
                        },
                        '& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                            {
                                marginRight: '40px'
                            },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Asset' />
                            <div className='absolute top-3 right-5 pt-[10px]'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />
                <button className='REGISTERED-btn wrap-btn'>REGISTERED</button>
            </div>
        </div>
    )
}
const top100Films = [
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 }
]

export default RegisterNow
