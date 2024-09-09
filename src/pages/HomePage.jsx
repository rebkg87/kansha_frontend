import ButtonReg from "../components/general/ButtonReg"
import InputV1 from "../components/general/InputV1"
import InputV3 from "../components/general/InputV3"
import { Greeting } from "../components/profile/Greeting";
import NavbarBottonButton from "../components/userLayout/NavbarBottonButton";
import userIcon from '/assets/images/icons/profile.svg';
import SmallButton from "../components/general/SmallButton"
import googleIcon from '../../public/assets/images/icons/icons8-logo-de-google.svg'
import { AffirmationCard } from "../components/profile/AffirmationCard"
import WeekCalendar from "../components/profile/WeekCalendar";

const Home = ({ }) => {
    return (
        <div className="flex flex-col">
            <Greeting className="w-max" greeting={"Buenos días"} name={"Rebeca"} />
            <div className="m-4 mb-[-20px]">
                <WeekCalendar />
            </div>
            <div className="p-11">
                <AffirmationCard />

            </div>

        </div>
    )
}

export default Home