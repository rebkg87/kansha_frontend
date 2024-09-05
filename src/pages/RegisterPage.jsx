import React from 'react'
import InputV3 from '../components/general/InputV3'
import userIcon from '../../public/assets/images/icons/profile.svg';
import emailIcon from '../../public/assets/images/icons/inbox.svg'
import passwordIcon from '../../public/assets/images/icons/lock.svg'
import confirmpasswordIcon from '../../public/assets/images/icons/lock.svg'
import ButtonReg from '../components/general/ButtonReg'
import googleIcon from '../../public/assets/images/icons/icons8-logo-de-google.svg'


const RegisterPage = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-medium-soft-green/50 to-white p-8'>
            <div className='flex flex-col justify-center'>
                <form className='w-[340px] h-[588px]'>
                    <h2 className='text-h2 text-left font-bold text-dark-green mb-[44px]'>Regístrate</h2>
                    <div className='flex flex-col gap-[10px]'>
                        <InputV3
                            type="text"
                            id="name"
                            placeholder="Nombre y Apellido"
                            iconInput={userIcon}
                            labelInput="User icon"
                        />
                        <InputV3
                            type="text"
                            id="email"
                            placeholder="Email"
                            iconInput={emailIcon}
                            labelInput="Email icon"
                        />
                        <InputV3
                            type="text"
                            id="password"
                            placeholder="Contraseña"
                            iconInput={passwordIcon}
                            labelInput="Password icon"
                        />
                        <InputV3
                            type="text"
                            id="confirmpassword"
                            placeholder="Contraseña"
                            iconInput={confirmpasswordIcon}
                            labelInput="Password icon"
                        />
                        <ButtonReg type="button" buttonStyle='bg-medium-soft-green text-white mt-6' buttonText="Regístrate" imgButtonStyle="hidden" />
                        <p className='text-center font-medium text-[24px]'> o </p>
                        <ButtonReg type="button" buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Iniciar Sesión con Google" iconButton={googleIcon} imgButtonStyle='h-[20px] w-[20px]' />
                    </div>
                </form>
                <div className='flex pt-10 mt-12 gap-2 justify-center'>
                    <p className=' text-long-paragrah text-medium-green font-normal'>¿Ya tienes una cuenta?</p>
                    <a href='#' className='text-long-paragrah text-dark-green font-medium underline-offset-8'>Inicia Sesión</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage