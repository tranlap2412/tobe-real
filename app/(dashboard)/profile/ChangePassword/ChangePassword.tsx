import { useState } from 'react'
import './style.css'
import Image from 'next/image'
// icon
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
function ChangePassword() {
    // State để lưu trạng thái của các trường mật khẩu và kiểu hiển thị
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [showPassword3, setShowPassword3] = useState(false)

    // Hàm xử lý sự kiện khi form được submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Kiểm tra logic ở đây (ví dụ: kiểm tra mật khẩu mới và mật khẩu xác nhận)
        if (newPassword !== confirmNewPassword) {
            alert("New Password and Confirm New Password don't match")
            return
        }

        // Gửi yêu cầu đổi mật khẩu tới server hoặc xử lý logic tương ứng
        console.log('Password change request submitted')
    }
    const handleTogglePassword = (inputNumber: number) => {
        switch (inputNumber) {
            case 1:
                setShowPassword1(!showPassword1)
                break
            case 2:
                setShowPassword2(!showPassword2)
                break
            case 3:
                setShowPassword3(!showPassword3)
                break
            default:
                break
        }
    }
    return (
        <div className='wrap-changePasswords'>
            <div className='bg-TitlechangePassword flex items-center'>
                <h2 className='top-title-changePassword pl-16'>Change the password</h2>
            </div>
            <div className='Gr-form-changePasswords flex flex-col items-center'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-1'>
                            <label
                                className='textLabelPassword'
                                htmlFor='currentPassword'>
                                Current Password:
                            </label>
                            <div className='flex'>
                                <input
                                    className='Input-Password'
                                    type={showPassword1 ? 'text' : 'password'}
                                    id='currentPassword'
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword1(!showPassword1)}>
                                    {showPassword1 ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='textLabelPassword' htmlFor='newPassword'>
                                New Password:
                            </label>
                            <div className='flex'>
                                <input
                                    className='Input-Password'
                                    type={showPassword2 ? 'text' : 'password'}
                                    id='newPassword'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword2(!showPassword2)}>
                                    {showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label
                                className='textLabelPassword'
                                htmlFor='confirmNewPassword'>
                                Confirm New Password:
                            </label>
                            <div className='flex'>
                                <input
                                    className='Input-Password'
                                    type={showPassword3 ? 'text' : 'password'}
                                    id='confirmNewPassword'
                                    value={confirmNewPassword}
                                    onChange={(e) =>
                                        setConfirmNewPassword(e.target.value)
                                    }
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword3(!showPassword3)}>
                                    {showPassword3 ? <FaRegEye /> : <FaRegEyeSlash />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <a href='#' className='ForgotA textLabelPassword'>
                        Forgot your password?
                    </a>

                    <div className='flex justify-center'>
                        <button className='btn-submit-password hover:shadow-lg' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
