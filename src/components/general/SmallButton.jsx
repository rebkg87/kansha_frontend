import React from 'react'

const SmallButton = ({ onClick, buttonText, buttonStyle, iconButton, label }) => {
    return (
        <div className="">
            <button
                onClick={onClick}
                className={`${buttonStyle} w-[95px] h-[45px] text-h6 font-bold font-barlow rounded-full`} >
                <img src={iconButton} alt={label} />
                {buttonText}
            </button>
        </div>
    )
}


export default SmallButton