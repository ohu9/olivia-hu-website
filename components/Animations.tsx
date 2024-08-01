'use client';
import { motion } from "framer-motion";

export function Hello() {
    return (
        <motion.img 
            src='/hello.png'
            className="ml-32 mt-20 xl:w-[35vw] w-[45vw] object-cover absolute z-20"
            initial={{ x: 25, opacity:0 }}
            animate={{ x: 0 , opacity:1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -10 }}
    />
    )
}

export function Goat() {
    return (
    <div className="flex items-center absolute mt-20 right-0">
        <motion.img 
            src='/goat.png' 
            className="ml-9 xl:w-[800px] lg:w-[600px] object-cover absolute z-10"
            initial={{ y:-50 }} 
            animate={{ y:0 }}
            whileHover={{ x: -6, y: -10 }}
            transition={{ duration: 1 }}/>
        <motion.div
            className='hidden md:block xl:w-[47vw] md:w-[40vw] xl:h-[55vh] h-[40vh] bg-[#c6edff] rounded-l-[4rem]' 
            initial={{ y:-20 }} 
            animate={{ y:0 }}
            transition={{duration: .8 }}/>
    </div>)
}