import React from 'react'
// import './style.css'
import { FaCheck } from 'react-icons/fa'
interface CustomCheckboxProps {
    label: string
    checkedColor?: string
    name?: string
    isChecked: boolean
    onChange: any
    smail?: boolean
    bolder?: boolean
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    label,
    checkedColor,
    isChecked,
    onChange,
    name,
    smail,
    bolder,
}) => {
    return (
        <label className='custom-checkbox-bkr form-control flex items-center relative'>
            <input
                type='checkbox'
                checked={isChecked}
                name={name}
                className={`appearance-none peer border border-[#cdcdcd] rounded-[3px] ${
                    smail ? 'min-w-[14px] w-[14px] h-[14px]': 'min-w-[18px] w-[18px] h-[18px]'
                }`}
                onChange={onChange}
            />
            <span className={`select-none text-[14px] cursor-pointer ml-2 flex-[100%] ${bolder ? 'font-montserrat font-semibold text-[13px] text-nowrap': ''}`}>{label}</span>
            <div className={`absolute peer-checked:scale-100 peer-checked:opacity-100 opacity-0 scale-0 transition duration-200 
            top-[50%] -translate-y-[50%] ${
                    smail ? 'left-[2px]': 'left-[3px]'
                }`}>
                <FaCheck size={11} color={checkedColor} />
            </div>
        </label>
    )
}

export default CustomCheckbox
