import { useForm } from "react-hook-form"
import GratitudeItems from "./GratitudeItems"
import { yupResolver } from "@hookform/resolvers/yup"
import { gratitudeFormSchema } from "../../customHooks/validationSchemas"
import usePost from "../../customHooks/usePost"
import { useNavigate } from "react-router-dom"
import useGet from "../../customHooks/useGet"
import useDelete from "../../customHooks/useDelete"
import usePut from "../../customHooks/usePut"
import { useEffect, useState } from "react"
import { useUser } from "../../context/UserContext"
import SmallButton from "../general/SmallButton"


const DailyGratitudeForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(gratitudeFormSchema) })

    const { user, setUser } = useUser()

    const { data: gratitudes, fetch: fetchGratitudes } = useGet(`/gratitudes/`)
    console.log(gratitudes)


    const onSubmit = (formData) => {
        executePost({ formData })
    }

    return (
        <div className='w-full h-screen bg-dark-green p-11'>
            <h5 className=' font-bold text-h5 text-soft-green'>Agradecimiento Diario</h5>
            <p className=' w-48 text-super-light-green text-xs'>Escribe aquí las 3 cosas por las que
                quieres agradecer hoy</p>
            <div className=" my-7 bg-super-light-green justify-center items-center flex rounded-full border-2 border-soft-green shadow-lg">
                <input {...register('gratitude')} className='w-full h-10 flex-1 border-0 outline-none bg-transparent pl-6 pr-2 placeholder:text-[10px] text-medium-green' type='text' placeholder='Agradezco por...' />
                <button type="submit" onClick={handleSubmit(onSubmit)} className="border-none rounded-full bg-medium-soft-green w-10 h-10 font-medium text-h4 text-soft-green cursor-pointer"> + </button>
            </div>

            <div>
                <GratitudeItems
                />
            </div>

            {/* <div>
                {gratitudes.map((gratitude) => ( 

                    <GratitudeItems
                        //key={gratitude.id}
                        //text={gratitude.gratitudeText}
                        //onDelete={() => handleDelete(gratitudes.id)}

                    />
                ))}
            </div> */}

            <div className="flex justify-center items-center ">
                <SmallButton buttonStyle={'bg-medium-soft-green h-12 w-28 text-center text-soft-green mt-12'} buttonText={"Guardar"} />
            </div>


        </div>
    )
}

export default DailyGratitudeForm