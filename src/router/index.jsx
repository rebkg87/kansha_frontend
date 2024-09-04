import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/HomePage";
import { UserLayout } from "../layout/UserLayout";

const TemporaryLoginPage = () => <div>Página de inicio de sesión aún no creada</div>;


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <TemporaryLoginPage /> }
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