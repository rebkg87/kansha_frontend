import { Greeting } from "../components/home/Greeting"
import { AffirmationCard } from "../components/home/AffirmationCard"
import WeekCalendar from "../components/home/WeekCalendar"
import AddGratitudeBtn from "../components/home/AddGratitudeBtn"
import { useNavigate } from "react-router-dom"
import useGet from "../customHooks/useGet"
import { AnimatePresence, motion } from "framer-motion"

const Home = ({ }) => {

    const navigate = useNavigate()

    const { data: dataUser } = useGet(`/users/user`)
    console.log(dataUser);

    const handleAddGratitudeClick = () => {
        navigate('/user/gratitude')
    }

    return (

        <div className="flex flex-col">
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}>
                    <div className="p-11">
                        <AffirmationCard />
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className='mt-[-20px] ml-11 mb-5'>
                <AddGratitudeBtn onClick={handleAddGratitudeClick} />
            </div>
        </div>

    )
}

export const dataContextUser = () => Home(dataUser)

export default Home