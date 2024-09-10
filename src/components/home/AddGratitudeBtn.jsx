import React from 'react'

const AddGratitudeBtn = ({ onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className='w-[82px] h-[98px] rounded-xl bg-soft-green flex flex-col justify-center items-center p-4 shadow-md'>
                <p className=' text-medium-soft-green font-semibold text-[10px]'>Registra tu gratitud del dia</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path className='fill-dark-green' fillRule="evenodd" d="M0 15C0 9.476 4.475 5 10 5c5.518 0 9.999 4.476 9.999 10s-4.476 10-10 10S0 20.524 0 15Zm8.8 1.03v3.8h2.23v-3.8h3.8V13.8h-3.8V10H8.8v3.8H5v2.23h3.8Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default AddGratitudeBtn