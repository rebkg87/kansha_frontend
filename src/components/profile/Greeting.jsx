import React from 'react'

export const Greeting = (greeting, name) => {
    return (
        <div>
            <div>
                <h5> {greeting} </h5>
                <h5> {name} </h5>
            </div>
            <div className='h-[67px] w-[67px]'>
                <button className=' ring-2 ring-dark-green'>
                    <img src='\assets\images\icons\profile.svg' alt='profile-picture-greeting' />
                </button>
            </div>
        </div>
    )
}
