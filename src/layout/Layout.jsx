import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="overflow-hidden ">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout