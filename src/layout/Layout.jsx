import { Outlet } from "react-router-dom"
import Navbar from "../components/general/Navbar"

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout