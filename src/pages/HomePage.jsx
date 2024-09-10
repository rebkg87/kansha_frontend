import { Greeting } from "../components/home/Greeting"
import { AffirmationCard } from "../components/home/AffirmationCard"
import WeekCalendar from "../components/home/WeekCalendar"
import AddGratitudeBtn from "../components/home/AddGratitudeBtn"
import { useNavigate } from "react-router-dom"

const Home = ({ }) => {

    const navigate = useNavigate()
    const handleAddGratitudeClick = () => {
        navigate('/user/gratitude')
    }
    return (
        <div className="flex flex-col">
            <Greeting className="w-max" greeting={"Buenos días"} name={"Rebeca"} />
            <div className="m-4 mb-[-20px]">
                <WeekCalendar />
            </div>
            <div className="p-11">
                <AffirmationCard />
            </div>
            <div className='mt-[-20px] ml-11 mb-5'>
                <AddGratitudeBtn onClick={handleAddGratitudeClick} />
            </div>
        </div>
    )
}

export default Home