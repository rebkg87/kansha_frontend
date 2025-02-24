import React from 'react'
import Navbar from '../components/general/Navbar'
import { Footer } from '../components/general/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { NavbarBotton } from '../components/userLayout/NavbarBotton'
import { Greeting } from '../components/home/Greeting'
import WeekCalendar from '../components/home/WeekCalendar'

export const UserLayout = () => {
    const authToken = localStorage.getItem("authToken")
    if (!authToken) {
        return <Navigate to={"/login"} />
    }
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Greeting className="w-max" greeting={"Buenos días"} name={"Rebeca"} />
            <div className="m-4">
                <WeekCalendar />
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
            <NavbarBotton/>
        </div>
    )
}
