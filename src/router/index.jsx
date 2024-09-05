import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/HomePage";
import { UserLayout } from "../layout/UserLayout";
import RegisterPage from "../pages/RegisterPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <RegisterPage /> }
        ]
    },
    {
        path: "/user",
        element: <UserLayout/>,
        children: [
            { path: "home", element: <Home/> }
        ]
    }
])

export default router