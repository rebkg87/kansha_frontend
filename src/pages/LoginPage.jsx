import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../customHooks/validationSchemas'
import usePost from '../customHooks/usePost'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import InputV3 from '../components/general/InputV3'
import emailIcon from '/assets/images/icons/inbox.svg'
import passwordIcon from '/assets/images/icons/lock.svg'
import googleIcon from '/assets/images/icons/icons8-logo-de-google.svg'
import ButtonReg from '../components/general/ButtonReg'

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    })

    const { error, executePost, data } = usePost("/auth/login")
    const { setToken } = useUser()
    const navigate = useNavigate()

    const onSubmit = (formData) => {
        executePost(formData)
    }

    useEffect(() => {
        if (data) {
            setToken(data.token)
            navigate("home")
        }
    }, [data, setToken, navigate])

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-medium-soft-green/50 to-white p-8'>
            <div className='flex flex-col justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[340px] h-[588px]'>
                <img src='/assets/images/logo/logo-icon.png' alt='logo' className='mx-auto mb-6'/>
                    <div className='flex flex-col justify-items-start'>
                        <h2 className='text-h2 text-left font-bold text-dark-green'>Iniciar Sesión</h2>
                        <p className=' text-long-paragrah text-gray text-left  mb-[44px]'>Inicie sesión para continuar en su cuenta.</p>
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px]'>
                            <InputV3 {...register("email")}
                                type="text"
                                id="email"
                                placeholder="Email"
                                iconInput={emailIcon}
                                labelInput="Email icon"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            <InputV3 {...register("password")}
                                type="text"
                                id="password"
                                placeholder="Contraseña"
                                iconInput={passwordIcon}
                                labelInput="Password icon"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        {error && (
                            <div className="p-1 m-[-25px] text-sm text-center text-red rounded-lg" role="alert">
                                <span className="font-medium">Hubo un error:</span> {error}
                            </div>
                        )}
                        <div className='mt-4'>
                            <ButtonReg type="submit" buttonStyle='bg-medium-soft-green text-white mt-6' buttonText="Inicia Sesión" imgButtonStyle="hidden" />
                            <p className='text-center font-medium text-[24px] m-2'> o </p>
                            <ButtonReg type="submit" buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Iniciar Sesión con Google" iconButton={googleIcon} imgButtonStyle='h-[20px] w-[20px]' />
                        </div>
                    </div>
                </form>
                <div className=' mt-36 text-center text-long-paragrah text-medium-green font-normal'>¿No tienes una cuenta? {" "}
                    <a href='/signup' className='text-long-paragrah text-dark-green font-medium underline'>Crea una</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage