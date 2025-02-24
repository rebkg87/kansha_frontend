import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();


    setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/login");
        }, "500");
    }, "3000");

    return (
        <section className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-medium-soft-green/50 to-white p-8'>
            <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="icons"
                    initial={{ scale: 0, opacity: 0}}
                    animate={{ scale: 1, opacity: 1}}
                    exit={{ scale: 7 , opacity: 0, filter: "blur(5px)", transition: { ease: "easeIn", duration: 0.22 } }}
                    
                >
                
                    <img
                        className="logo"
                        src="\assets\images\logo\logo-vert.png"
                        alt="StudyBoard"
                    />
                </motion.div>)}
            </AnimatePresence>
        </section>
    );
};

export default FrontPage;
