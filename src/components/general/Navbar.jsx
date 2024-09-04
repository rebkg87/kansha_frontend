import { useState } from "react";
import InputV2 from "./InputV2";

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
