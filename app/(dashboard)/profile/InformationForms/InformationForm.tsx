import './style.css'
import React, { useState } from 'react'
function InformationForm() {
    const [formData, setFormData] = useState({
        country: '',
        IDCard: '',
        Email: '',
        Phone: '',

        birthdate: {
            day: '',
            month: '',
            year: ''
        },
        address: ''
    })

    const handleInputChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target

        // Check if the input belongs to birthdate
        if (name.startsWith('birthdate.')) {
            const [birthdateField, field] = name.split('.')
            setFormData({
                ...formData,
                birthdate: {
                    ...formData.birthdate,
                    [field]: value
                }
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Handle form submission logic here
        console.log('Submitted:', formData)
    }
    return (
        <div className='wrap-Informations'>
            <div className='bg-TitleInformation flex items-center'>
                <h2 className='top-title-Information pl-16'>Information</h2>
            </div>
            <div className='Gr-form-Informations flex flex-col items-center'>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <p className='text-Information-input'>ID: 0AE9CC3C6</p>
                    <div className='flex justify-between items-center '>
                        <label className='text-Information-input' htmlFor='country'>
                            Country:
                        </label>
                        <select
                            className='input-style pl-5 min-w-[180px]'
                            id='country'
                            name='country'
                            value={formData.country}
                            onChange={handleInputChange}>
                            <option value=''>Enter country</option>
                            <option value='usa'>USA</option>
                            <option value='canada'>Canada</option>
                            <option value='uk'>United Kingdom</option>
                            <option value='vn'>VietNam</option>
                        </select>
                    </div>
                    <div className='flex justify-between items-center'>
                        <label className='text-Information-input' htmlFor='IDCard'>
                            ID Card:
                        </label>
                        <input
                            className='input-style pl-5 min-w-[180px]'
                            type='text'
                            id='IDCard'
                            name='IDCard'
                            value={formData.IDCard}
                            onChange={handleInputChange}
                            placeholder='Enter your IDCard'
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <label className='text-Information-input' htmlFor='Email'>
                            Email:
                        </label>
                        <input
                            className='input-style pl-5 min-w-[180px]'
                            type='email'
                            id='Email'
                            name='Email'
                            value={formData.Email}
                            onChange={handleInputChange}
                            placeholder='Enter your Email'
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <label className='text-Information-input' htmlFor='Email'>
                            Phone:
                        </label>
                        <input
                            className='input-style pl-5 min-w-[180px]'
                            type='number'
                            id='Phone'
                            name='Phone'
                            value={formData.Phone}
                            onChange={handleInputChange}
                            placeholder='Enter your Phone'
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <label className='text-Information-input' htmlFor='birthdate'>
                            Birthdate:
                        </label>
                        <div className='Gr-birthdate flex gap-2 pr-8'>
                            <input
                                className='input-style !max-w-11'
                                type='number'
                                id='birthdate-day'
                                name='birthdate.day'
                                value={formData.birthdate.day}
                                onChange={handleInputChange}
                                placeholder='Day'
                            />
                            <input
                                className='input-style !max-w-11'
                                type='number'
                                id='birthdate-month'
                                name='birthdate.month'
                                value={formData.birthdate.month}
                                onChange={handleInputChange}
                                placeholder='Month'
                            />
                            <select
                                className='input-style !max-w-11'
                                id='birthdate-year'
                                name='birthdate.year'
                                value={formData.country}
                                onChange={handleInputChange}>
                                <option value=''>Year</option>
                                <option value='1980'>1980</option>
                                <option value='1990'>1990</option>
                                <option value='2000'>2000</option>
                                <option value='2010'>2010</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <label className='text-Information-input' htmlFor='address'>
                            Address:
                        </label>
                        <textarea
                            className='input-style pl-5 min-w-[180px]'
                            id='address'
                            name='address'
                            value={formData.address}
                            onChange={
                                handleInputChange as React.ChangeEventHandler<HTMLTextAreaElement>
                            }
                            placeholder='Enter your address'
                        />
                    </div>
                    <button className='SaveInformation-Btn mt-11 ml-14 hover:shadow-lg' type='submit'>
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default InformationForm
