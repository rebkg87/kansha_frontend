import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
    >
        <motion.div
            className="w-20 h-20 border-4 border-medium-soft-green border-t-transparent rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
    </motion.div>

)
}

export default Loader