import React, { useEffect, useState } from 'react'
import affirmations from '../../data/affirmations.json'

export const AffirmationCard = () => {
        const [affirmation, setAffirmation] = useState({})
        const [loading, setLoading] = useState(true)

        const fetchAffirmation = () => {
            const randomIndex = Math.floor(Math.random() * affirmations.length)
            const randomAffirmation = affirmations[randomIndex]

            localStorage.setItem("affirmation", JSON.stringify(randomAffirmation))
            localStorage.setItem("affirmationDate", new Date().toISOString().split('T')[0])

            setAffirmation(randomAffirmation)
            setLoading(false)
        }

        useEffect(() => {
            const storedAffirmation = localStorage.getItem("affirmation")
            const storedDate = localStorage.getItem("affirmationDate")
            const today = new Date().toISOString().split('T')[0]

            if (!storedAffirmation || storedDate !== today) {
                fetchAffirmation()
            } else {
                setAffirmation(JSON.parse(storedAffirmation))
                setLoading(false)
            }
        }, [])

        if (loading) {
            return (
                <div className="flex items-center justify-center h-10 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/2 bg-dark-green h-2 animate-pulse"></div>
                </div>
            )
        }

        return (
            <div className='w-full h-[171px] border-2 border-soft-green rounded-[20px] shadow-inner-inputV2 bg-medium-soft-green flex flex-col justify-center items-center p-8'>
                <h6 className=' text-h6 font-barlow font-bold text-dark-green mb-2 mt-[-20px]'>Afirmación Diaria</h6>
                <h5 className='text-h5 font-barlow font-bold text-soft-green text-center leading-h5'>{affirmation.q}</h5>

            </div>
        )
    }
