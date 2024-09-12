import { useState } from "react";
import InputV2 from "./InputV2";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    const { user, clearToken } = useUser()

    const navigate = useNavigate()

    const profileClick = () => {
        navigate("/user/home")
    }

    const logoutClick = () => {
        clearToken();
        navigate("/login");
    };

    return (
        <nav className="font-barlow text-navbar leading-navbar active:font-bold text-medium-green w-full h-[43px] p-1 bg-soft-green">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                    <img
                        className="h-[37px]"
                        src="/assets/images/logo/logo-icon.png"
                        alt="kansha-logo"
                    />
                </div>
                <div className="flex items-center gap-2 mr-2">
                    <InputV2 />
                    <button className="h-[30px] w-[30px] rounded-full bg-zinc-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" heighzt="20" fill="none" viewBox="0 0 24 24">
                            <path className="fill-light-gray" d="M10.953 19.895c-.583 0-1.056.473-1.056 1.05 0 .582.473 1.055 1.056 1.055h2.104c.583 0 1.056-.473 1.056-1.056a1.05 1.05 0 0 0-1.056-1.049h-2.104ZM12.002 2c-.499 0-.991.006-1.49.013C8 2.065 5.882 3.891 5.7 6.275a53.559 53.559 0 0 0-.136 5.582 3.4 3.4 0 0 1-1.03 2.54c-.09.09-.18.174-.265.258-1.438 1.412-.492 3.763 1.567 3.938a75.306 75.306 0 0 0 12.325 0c2.06-.168 3.011-2.526 1.567-3.938-.09-.09-.181-.174-.266-.259a3.424 3.424 0 0 1-1.03-2.539 53.583 53.583 0 0 0-.135-5.582c-.182-2.384-2.3-4.21-4.812-4.262A103.96 103.96 0 0 0 12.002 2Z" />
                        </svg>

                    </button>
                    {!user && (
                        <button className="h-[30px] w-[30px] rounded-full bg-medium-soft-green flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className="fill-soft-green"
                                    d="M7.39 13.328c-1.807.259-3.24 1.76-3.363 3.586a9.26 9.26 0 0 0 0 1.168c.123 1.827 1.556 3.328 3.364 3.586 1.506.215 3.013.326 4.52.332h.178a32.786 32.786 0 0 0 4.52-.332c1.808-.258 3.241-1.759 3.364-3.586.012-.166.018-.332.018-.504v-.166a7.2 7.2 0 0 0-.018-.504c-.123-1.827-1.556-3.327-3.364-3.586a32.32 32.32 0 0 0-4.612-.332 33.153 33.153 0 0 0-4.606.338ZM12.004 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                                />
                            </svg>
                        </button>
                    )}

                    {user && (
                        <button onClick={logoutClick} className="h-[30px] w-[30px] rounded-full bg-medium-soft-green flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path className="fill-soft-green" d="M14.185 8.467a.954.954 0 0 1 1.348 1.348L13.348 12l2.185 2.185a.954.954 0 0 1-1.348 1.348L12 13.348l-2.185 2.185a.95.95 0 0 1-1.348 0 .954.954 0 0 1 0-1.348L10.652 12 8.467 9.815a.954.954 0 0 1 1.348-1.348L12 10.652l2.185-2.185ZM12 2C6.474 2 2 6.48 2 12s4.474 10 10 10 10-4.48 10-10S17.525 2 12 2Z" />
                            </svg>

                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
