import React from 'react'

export const Greeting = ({ greeting, name }) => {
    return (
        <div className='flex flex-row justify-around bg-gradient-to-b from-medium-soft-green to-soft-green pt-5 h-[109px] w-full'>
            <div>
                <h5 className='font-bold text-medium-green text-[24px] mb-[-12px]'> {greeting} </h5>
                <h5 className='font-bold text-medium-soft-green text-[24px]'> {name} </h5>
            </div>
            <div className='h-[70px] w-[70px] relative'>
                <button className='ring-2 rounded-full items-center justify-center ring-dark-green overflow-hidden h-full w-full flex relative group'>
                    <img className='h-[63px] w-[63px] object-cover rounded-full' src='\profile-picture-example.jpg' alt='profile-picture-greeting' />
                    <div className='absolute inset-0 flex items-center justify-center  bg-dark-green bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <svg className='fill-white/60 h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path  d="M2.388 14.554c-.188.21-.297.485-.304.767-.05 2.142-.123 4.24-.058 6.092.014.304.253.55.557.557.535.015 1.092.029 1.664.029 1.403 0 2.908-.043 4.428-.08a1.2 1.2 0 0 0 .767-.303 134.606 134.606 0 0 0 8.218-8.039l-7.242-7.235a134.427 134.427 0 0 0-8.03 8.212ZM16.344 2.001c-.673 0-1.346.231-1.874.694-.782.673-1.549 1.353-2.308 2.04l7.104 7.106a154.9 154.9 0 0 0 2.04-2.308 2.896 2.896 0 0 0 .355-3.242 9.34 9.34 0 0 0-3.943-3.943 2.937 2.937 0 0 0-1.375-.347Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}
