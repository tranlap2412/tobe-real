'use clent'
import './style.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react';


export default function Payment() {
    const [captcha, setCaptcha] = useState<string | null>();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(captcha)
        if (captcha) {
            console.log('ReCAPTCHA Verified!')
        }
    }
    return (
        <div className="Payment">
            <p className="text_card">You are entitled to a referral fee for properties that successfully join travelio.com. Please fill in the following details to expedite the payment process:</p>
            <Autocomplete
                disablePortal
                id="combo-box"
                options={Banks}
                sx={{
                    width: 400,
                    padding: 5,
                    '& .MuiOutlinedInput-root': {
                        padding: '10px',
                        borderRadius: '30px'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Bank" id="p-10" placeholder="Bank" />} />
            <form method="post" className="form_group" onSubmit={onSubmit}>
                <div className="p-2">
                    <label htmlFor="number" className="form_control">Bank Account number</label>
                    <input className="text" type="number" id="number" placeholder="Bank Account number" />
                </div>
                <div className="p-2">
                    <label htmlFor="text" className="form_control">Bank Account Name</label>
                    <input className="text" type="text" id="text" placeholder="Bank Account Name" />
                </div>
                <div className="p-2">
                    <label htmlFor="text" className="form_control">Bank Account Branch</label>
                    <input className="text" type="text" id="text" placeholder="Whatsapp" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">Bank Account City</label>
                    <input className="text" type="text" id="text" placeholder="Bank Account City" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">KTP</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="File Choice" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">KTP</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="Property Type" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">KTP Number</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="Property Type  " />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">NPWP Number</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="NPWP Number" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">NPWP Ownership</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="NPWP Ownership" />
                </div>
                <div className="p-2">
                    <label htmlFor="whatsapp" className="form_control">NPWP Address</label>
                    <textarea placeholder="NPWP Ownership" rows={4} cols={40} className='Address' />
                </div>
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} className="mx_auto" onChange={setCaptcha} />
            </form>
            <div className="payment_product">
                <div className="payment_card">
                    Payment is made in the following month (maximum 20th) after the property goes live.
                    <br />
                    Property is a new property that has never previously joined travelio.com and is not in active condition.
                    <br />
                    Owners of property have never registered at travelio.com.
                    <br />
                    Referral is not a family of one house and is not an affiliate of Travelio.
                    <br />
                    Travelio has the right to remove the reference fee if there is fraud from the program.
                </div>
                <div className="dengan_card">
                    <span className="dengan_text">
                        Dengan meng-klik Daftar, Anda telah menyetujui Syarat dan Ketentuan diatas dan telah membaca{" "}
                    </span>
                    <a href="https://www.travelio.com/en/privacy" rel="noopener noreferrer" target="_blank">
                        <span className="span">Kebijakan Privasi</span>
                    </a>
                    <span className="dengan_text">
                        {" "}
                        yang berlaku
                        <br />
                    </span>
                </div>
            </div>
        </div>
    );
}

const Banks = [
    { label: 'Agribank' },
    { label: 'VietinBank' },
    { label: 'Vietcombank' },
    { label: 'Sacombank' },
    { label: 'BIDV' },
    { label: 'Techcombank' },
    { label: 'MBBank ' },
    { label: 'MSB' },
    { label: 'TPBANK' },
    { label: 'VPBANK' },

];



