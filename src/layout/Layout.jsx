import { Outlet } from "react-router-dom"
import Navbar from "../components/general/Navbar"
import { Footer } from "../components/general/Footer"

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout