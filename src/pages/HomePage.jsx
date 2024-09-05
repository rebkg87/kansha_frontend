import ButtonReg from "../components/general/ButtonReg"
import InputV1 from "../components/general/InputV1"
import InputV3 from "../components/general/InputV3"
import { AffirmationCard } from "../components/profile/AffirmationCard"
import userIcon from '../../public/assets/images/icons/profile.svg';
import { Greeting } from "../components/profile/Greeting";
import NavbarBottonButton from "../components/userLayout/NavbarBottonButton";
import homeIcon from '../../public/assets/images/icons/home.svg'
import SmallButton from "../components/general/SmallButton"
import googleIcon from '../../public/assets/images/icons/icons8-logo-de-google.svg'

const Home = ({ }) => {
    return (
        <div className=" flex flex-col p-11 gap-3">
            <ButtonReg type="button" buttonStyle='bg-medium-soft-green text-white' buttonText="Iniciar Sesión" imgButtonStyle="hidden" />
            <ButtonReg type="button" buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Iniciar Sesión con Google" iconButton={googleIcon} imgButtonStyle='h-[20px] w-[20px]' />

            <InputV1 placeholder={"Email"} />
            <AffirmationCard />
            <InputV3
                type="text"
                id="name"
                placeholder="Nombre y Apellido"
                iconInput={userIcon}
                labelInput="User icon"
            />
            <Greeting greeting={"Buenos días"} name={"Rebeca"}
            />
            <SmallButton buttonStyle='w-[95px] h-[45px] bg-medium-green text-super-light-green' buttonText="Guardar"/>

        </div>
    )
}

export default Home