import React from "react";
const ButtonReg = ({ onClick, buttonText, buttonStyle, iconButton, label }) => {
    return (
        <div className="">
            <button
                onClick={onClick}
                className={`${buttonStyle} w-full h-[54px] text-h6 font-bold font-barlow rounded-[10px]`} >
                <img src={iconButton} alt={label} />
                {buttonText}
            </button>
        </div>
    )
}

export default ButtonReg;
