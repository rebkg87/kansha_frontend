import React from "react";
const ButtonReg = ({ onClick, buttonText, buttonStyle, imgButtonStyle, iconButton, label }) => {
    return (
        <div className="flex justify-between">
            <button
                onClick={onClick}
                className={`${buttonStyle} w-full h-[54px] text-h6 font-bold font-barlow rounded-[10px] flex gap-1 justify-center items-center`} >
                {buttonText}
                <img className={imgButtonStyle} src={iconButton} alt={label} />
            </button>
        </div>
    )
}

export default ButtonReg;
