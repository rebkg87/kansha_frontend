import React from 'react'

const SmallButton = ({ onClick, buttonText, buttonStyle}) => {
    return (
        <div className="">
            <button
                onClick={onClick}
                className={`${buttonStyle} text-h6 font-bold font-barlow rounded-full`} >
                {buttonText}
            </button>
        </div>
    )
}


export default SmallButton