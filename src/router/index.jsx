import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/HomePage";
import { UserLayout } from "../layout/UserLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import GratitudePage from "../pages/GratitudePage";
import FrontPage from "../pages/FrontPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "signup", element: <RegisterPage /> },
            { path: "login", element:<LoginPage/> },
            { path:"/", element: <FrontPage/>}
        ]
    },
    {
        path: "/user",
        element: <UserLayout/>,
        children: [
            { path: "home", element: <Home/> },
            { path: "gratitude", element: <GratitudePage/> }
        ]
    }
])

export default router