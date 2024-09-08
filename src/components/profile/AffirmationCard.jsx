import React, { useEffect, useState } from 'react'

export const AffirmationCard = () => {

    const [affirmation, setAffirmation] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fecthAffirmation = async () => {
        try {
            const response = await fetch('https://zenquotes.io/api/random')
            if (!response.ok) {
                throw new Error (`Error: ${response.status}`)
            }
            const data = await response.json()
            const newAffirmation = data[0].q

            localStorage.setItem("affirmation", newAffirmation)
            localStorage.setItem("affirmationDate", new Date().toISOString().split('T')[0])

            setAffirmation(newAffirmation)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        const storedAffirmation = localStorage.getItem("affirmation")
        const storedDate = localStorage.getItem("affimationDate")
        const today = new Date().toISOString().split('T')[0]
        if (!storedAffirmation || storedDate !== today) {
            fecthAffirmation()
        } else {
            setAffirmation(storedAffirmation)
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
    
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='w-full h-[171px] border-2 border-soft-green rounded-[20px] shadow-inner-inputV2 bg-medium-soft-green flex flex-col justify-center items-center p-8'>
            <h6 className=' text-h6 font-barlow font-bold text-dark-green mb-2 mt-[-20px]'>Afirmación Diaria</h6>
            <h5 className='text-h5 font-barlow font-bold text-soft-green text-center leading-h5'>{affirmation ? affirmation : 'No se pudo obtener la afirmación'}</h5>
        
        </div>
    )
}
