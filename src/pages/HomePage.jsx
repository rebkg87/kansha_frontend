import ButtonReg from "../components/general/ButtonReg"
import InputV1 from "../components/general/InputV1"
import InputV3 from "../components/general/InputV3"
import { AffirmationCard } from "../components/profile/AffirmationCard"
import userIcon from '../../public/assets/images/icons/profile.svg';
import { Greeting } from "../components/profile/Greeting";

const Home = ({ }) => {
    return (
        <div className=" flex flex-col p-11 gap-4">
            <ButtonReg type="button" buttonStyle='bg-medium-soft-green text-white' buttonText="Iniciar Sesión" />
            <ButtonReg type="button" buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Iniciar Sesión con Google" />

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

        </div>
    )
}

export default Home