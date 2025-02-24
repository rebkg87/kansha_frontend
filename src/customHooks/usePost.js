import React from 'react'
import { useUser } from '../context/UserContext'
import useFetch from './useFetch'

const usePost = (endpoint) => {
    const { token } = useUser()

    const { data, loading, error, fetch } = useFetch(
        endpoint,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` })
            }
        },
        false
    )

    const executePost = async (data) => {
        fetch({ body: JSON.stringify(data) })
    }
    

    return { data, loading, error, executePost };
}

export default usePost