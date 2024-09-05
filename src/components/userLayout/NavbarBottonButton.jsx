import React from 'react'

const NavbarBottonButton = ({ nvButton, labelNvButton }) => {
    return (
        <div className='group flex flex-col justify-center items-center'>
            <button className="h-[30px] w-[30px] flex items-center justify-center">
                <img
                    src={nvButton}
                    alt={labelNvButton}
                />
            </button>
            <p className=' text-paragraphs text-dark-green group-active:font-bold group-active:text-medium-soft-green group-hover:font-bold group-hover:text-medium-soft-green'> {labelNvButton} </p>
        </div>
    )
}

export default NavbarBottonButton