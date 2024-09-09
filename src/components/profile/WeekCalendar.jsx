import React from 'react'

const WeekCalendar = () => {
    return (
            <div class="flex flex-shrink w-[100%] justify-center items-center bg-white md:justify-center rounded-lg ">

                <button className="rounded-full bg-medium-soft-green flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <path className=' rotate-0 fill-soft-green' d="M5.767 7.147 4.353 8.56l7.707 7.706 7.707-7.706-1.413-1.414-6.293 6.207-6.294-6.207Z" />
                    </svg>
                </button>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 10 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Dom </p>
                        </div>
                    </div>
                </div>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 11 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Lun </p>
                        </div>
                    </div>
                </div>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 12 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Mar</p>
                        </div>
                    </div>
                </div>

                <div class="flex group bg-soft-green shadow-xl rounded-lg mx-1 cursor-pointer justify-center relative h-17">
                    <span class="flex h-3 w-3 absolute -botton-1 -center-1">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-medium-soft-green opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-medium-soft-green"></span>
                    </span>
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-medium-green group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 13 </p>
                            <p class="text-medium-green group-hover:text-medium-soft-green text-sm transition-all duration-150"> Mié </p>
                        </div>
                    </div>
                </div>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 14 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Jue </p>
                        </div>
                    </div>
                </div>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 15 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Vie </p>
                        </div>
                    </div>
                </div>

                <div class="flex group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center">
                    <div class="flex items-center ">
                        <div class="text-center">
                            <p class="text-gray-800 group-hover:text-medium-soft-green font-bold transition-all duration-150 text-h5"> 16 </p>
                            <p class="text-gray-800 group-hover:text-medium-soft-green text-sm transition-all duration-150"> Sáb </p>
                        </div>
                    </div>
                </div>
                <button className="rounded-full bg-medium-soft-green flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <path className=' rotate-0 fill-soft-green' d="M5.767 7.147 4.353 8.56l7.707 7.706 7.707-7.706-1.413-1.414-6.293 6.207-6.294-6.207Z" />
                    </svg>
                </button>
        </div>
    )
}

export default WeekCalendar