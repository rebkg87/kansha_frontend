import React from 'react'
import Navbar from '../components/general/Navbar'
import { Footer } from '../components/general/Footer'
import { Outlet } from 'react-router-dom'
import { NavbarBotton } from '../components/userLayout/NavbarBotton'

export const UserLayout = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <NavbarBotton/>
        </div>
    )
}
