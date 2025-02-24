import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Loader from "../components/general/Loader";

const OAutjRedirectHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {setToken} = useUser()


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        console.log("Token recibido:", token);

        if (token) {
            setToken(token)
            console.log("Redirigiendo al home...", token);
            navigate("user/home");
        } else {
            console.error("Token no encontrado. Redirigiendo al login...");
            navigate("/login");
        }
    }, [navigate, location, setToken]);

    return <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-medium-soft-green/50 to-white p-8'>
        <Loader/>
    </div>;
};

export default OAutjRedirectHandler;
