import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const usePut = (endpoint) => {
    const [putData, setPutData] = useState(null)
    const [triggerFetch, setTriggerFetch] = useState(false)


    const executePut = (data) => {
        setPutData(data)
        setTriggerFetch(true)
    }

    const { data, error, loading, fetch } = useFetch(endpoint,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: putData ? JSON.stringify(putData) : null,
        },
        triggerFetch 
    )

    useEffect(()=>{
        if (triggerFetch) {
            fetch()
            setTriggerFetch(false)
        }
    },[triggerFetch, fetch])

    return { data, error, loading, executePut }

} 

export default usePut