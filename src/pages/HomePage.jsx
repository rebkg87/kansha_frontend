import ButtonReg from "../components/general/ButtonReg"
import InputV1 from "../components/general/InputV1"
import InputV3 from "../components/general/InputV3"
import { Greeting } from "../components/profile/Greeting";
import NavbarBottonButton from "../components/userLayout/NavbarBottonButton";
import userIcon from '/assets/images/icons/profile.svg';
import SmallButton from "../components/general/SmallButton"
import googleIcon from '../../public/assets/images/icons/icons8-logo-de-google.svg'
import {AffirmationCard} from "../components/profile/AffirmationCard"

const Home = ({ }) => {
    return (
        <div className="flex flex-col p-11 gap-3">
            <AffirmationCard/>
            
            <Greeting greeting={"Buenos días"} name={"Rebeca"}
            />

        </div>
    )
}

export default Home