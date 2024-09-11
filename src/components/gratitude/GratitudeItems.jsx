import React from 'react'
import delete_icon from '/assets/images/icons/remove.svg'
import edit_icon from '/assets/images/icons/edit.svg'

const GratitudeItems = ({ text }) => {
    return (
        <div>
            <div className='flex items-center my-3 gap-2 '>

                <div className='flex flex-1 items-center cursor-pointer'>
                    <p className='text-white text-xs mr-4'> {text}</p>
                </div>

                <div className=' flex flex-row gap-2'>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none" viewBox="0 0 24 24">
                        <path fill="#338065" d="M2.388 14.554c-.188.21-.297.485-.304.767-.05 2.142-.123 4.24-.058 6.092.014.304.253.55.557.557.535.015 1.092.029 1.664.029 1.403 0 2.908-.043 4.428-.08a1.2 1.2 0 0 0 .767-.303 134.606 134.606 0 0 0 8.218-8.039l-7.242-7.235a134.427 134.427 0 0 0-8.03 8.212ZM16.344 2.001c-.673 0-1.346.231-1.874.694-.782.673-1.549 1.353-2.308 2.04l7.104 7.106a154.9 154.9 0 0 0 2.04-2.308 2.896 2.896 0 0 0 .355-3.242 9.34 9.34 0 0 0-3.943-3.943 2.937 2.937 0 0 0-1.375-.347Z" />
                    </svg>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="red" d="M8.846 16.21v-5.266a1.049 1.049 0 1 1 2.098 0v5.266a1.049 1.049 0 1 1-2.098 0Zm4.21 0v-5.266c0-.583.472-1.049 1.049-1.049.583 0 1.055.473 1.055 1.05v5.265a1.05 1.05 0 0 1-1.055 1.05 1.045 1.045 0 0 1-1.05-1.05ZM4.106 5.154a1.05 1.05 0 0 0-1.05 1.056c0 .583.473 1.05 1.05 1.05h.725a56.83 56.83 0 0 0 .11 10.66c.2 1.884 1.593 3.426 3.393 3.75a20.503 20.503 0 0 0 7.319 0c1.8-.324 3.192-1.872 3.393-3.75.376-3.537.415-7.112.117-10.66h.725c.583 0 1.056-.474 1.056-1.05 0-.583-.473-1.056-1.056-1.056H4.105ZM9.895 2a1.05 1.05 0 0 0-1.05 1.056c0 .583.473 1.055 1.05 1.055h4.209a1.056 1.056 0 0 0 0-2.111h-4.21Z" />
                    </svg>

                </div>
            </div>
            <hr className='border-medium-soft-green' />
        </div>
    )
}

export default GratitudeItems