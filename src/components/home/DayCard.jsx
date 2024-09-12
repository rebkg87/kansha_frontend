import React from 'react'

const DayCard = ({ dayWeek, dayNumber, isToday }) => {
    return (
        <div
            className={`flex ${isToday ? 'bg-soft-green shadow-xl relative' : 'group hover:bg-soft-green hover:bg-opacity-25 hover:shadow-lg'} 
        rounded-lg mx-1 transition-all duration-150 cursor-pointer justify-center p-2`}
        >
            {isToday && (
                <span className="flex justify-center items-center h-2 w-2 absolute -bottom-1 ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medium-soft-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-medium-soft-green"></span>
                </span>
            )}
            <div className="flex items-center">
                <div className="text-center">
                    <p className={`${isToday ? 'text-medium-green' : 'text-gray-800 group-hover:text-medium-soft-green' } font-bold transition-all duration-150 text-h5`}
                    > {dayNumber}</p>
                    <p className={`${isToday ? 'text-medium-green' : 'text-gray-800 group-hover:text-medium-soft-green' } text-sm transition-all duration-150`}
                    >{dayWeek}</p>
                </div>
            </div>
        </div>
    )
}

export default DayCard