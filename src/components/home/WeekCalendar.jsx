import { addDays, addWeeks, format, isSameDay, startOfWeek, subWeeks } from 'date-fns'
import React, { useState } from 'react'
import DayCard from './DayCard'
import { es } from 'date-fns/locale'

const WeekCalendar = () => {

    const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }))

    const goToPreviousWeek = () => {
        setCurrentWeekStart(prevWeek => subWeeks(prevWeek, 1))
    }

    const goToNextWeek = () => {
        setCurrentWeekStart(prevWeek => addWeeks(prevWeek, 1))
    }

    const today = new Date()
    const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => {
        const dayDate = addDays(currentWeekStart, index)
        const isToday = isSameDay(dayDate, today)
        return {
            dayNumber: format(dayDate, 'd', { locale: es }),
            dayWeek: format(dayDate, 'EEE', { locale: es }),
            isToday
        }
    })

    return (
        <div className="flex flex-shrink w-[100%] justify-center items-center bg-white md:justify-center rounded-lg ">

            <button onClick={goToPreviousWeek} className="p-1 text-h4 rounded-full bg-medium-soft-green flex items-center justify-center text-center text-soft-green">
                ￩
            </button>

            {daysOfTheWeek.map((day, index) => (
                <DayCard key={index} dayNumber={day.dayNumber} dayWeek={day.dayWeek} isToday={day.isToday} />
            ))}

            <button onClick={goToNextWeek} className="p-1 text-h4 rounded-full bg-medium-soft-green flex items-center justify-center text-center text-soft-green">
                ￫
            </button>

        </div>
    )
}

export default WeekCalendar