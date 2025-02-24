import React, { useEffect, useState } from 'react'
import InputV3 from '../components/general/InputV3'
import userIcon from '/assets/images/icons/profile.svg';
import emailIcon from '/assets/images/icons/inbox.svg'
import passwordIcon from '/assets/images/icons/lock.svg'
import confirmpasswordIcon from '/assets/images/icons/lock.svg'
import ButtonReg from '../components/general/ButtonReg'
import googleIcon from '/assets/images/icons/icons8-logo-de-google.svg'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import usePost from '../customHooks/usePost';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from '../customHooks/validationSchemas';
import { GOOGLE_CLIENT_ID } from '../config'
import Loader from '../components/general/Loader';



const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(signUpSchema),
    })

    const { error, executePost, data } = usePost("/auth/signup")
    const { setToken } = useUser()
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(null); 
    const [isGoogleAuth, setIsGoogleAuth] = useState(false);

    const onSubmit = (formData) => {
        executePost(formData)
    }

    useEffect(() => {
        if (data) {
            setToken(data.token)
            navigate("/user/home")
        }
    }, [data, setToken, navigate])

    const handleGoogleSignup = () => {
        setIsGoogleAuth(true);
        window.location.href = "http://localhost:3001/oauth2/authorization/google";
    };
    
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        
        if (token) {
            setIsGoogleAuth(true); 
        } else {
            setIsGoogleAuth(false);
        }
    }, []);
    

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-medium-soft-green/50 to-white p-8'>
            {isGoogleAuth ? (
                <Loader/>
            ) : (
            <div className='flex flex-col justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[340px] h-[588px]'>
                    <h2 className='text-h2 text-left font-bold text-dark-green mb-[44px]'>Regístrate</h2>
                    <div>
                        <div className='flex flex-col gap-[10px]'>
                            <InputV3 {...register("name")}
                                type="text"
                                id="name"
                                placeholder="Nombre y Apellido"
                                iconInput={userIcon}
                                labelInput="User icon"
                            />
                            {errors.name && !isGoogleAuth && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            <InputV3 {...register("email")}
                                type="text"
                                id="email"
                                placeholder="Email"
                                iconInput={emailIcon}
                                labelInput="Email icon"
                            />
                            {errors.email && !isGoogleAuth && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            <InputV3 {...register("password")}
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                iconInput={passwordIcon}
                                labelInput="Password icon"
                            />
                            {errors.password && !isGoogleAuth && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            <InputV3 {...register("confirmPassword")}
                                type="password"
                                id="confirmPassword"
                                placeholder="Repite tu contraseña"
                                iconInput={confirmpasswordIcon}
                                labelInput="Password icon"
                            />
                        </div>
                        {error && (
                            <div className="p-1 m-[-25px] text-sm text-center text-red-500 rounded-lg mt-2" role="alert">
                                <span className="font-bold">Hubo un error:</span> {error}
                            </div>
                        )}
                        {errorMessage && ( 
                            <div className="p-1 m-[-25px] text-sm text-center text-red-500 rounded-lg mt-4" role="alert">
                                <span className="font-bold">{errorMessage}</span>
                            </div>
                        )}
                        <div className='mt-10'>
                            <ButtonReg type="submit" buttonStyle='bg-medium-soft-green text-white mt-6' buttonText="Regístrate" imgButtonStyle="hidden" />
                            <p className='text-center font-medium text-[24px] m-2'> o </p>
                            <ButtonReg type="button" onClick={handleGoogleSignup} buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Regístrate con Google" iconButton={googleIcon} imgButtonStyle='h-[20px] w-[20px]' />
                        </div>
                    </div>
                </form>
                    <div className=' mt-20 text-center text-long-paragrah text-medium-green font-normal'>¿Ya tienes una cuenta? {" "}
                    <a href='/login' className='text-long-paragrah text-dark-green font-medium underline'>Inicia Sesión</a>
                </div>
            </div>
        )}
        </div>
    )
}

export default RegisterPage