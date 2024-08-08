'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

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

export function Home() {
    return (
    <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start mx-24 md:absolute md:z-10 md:ml-20 lg:ml-24 lg:mt-[40vh] md:mt-[57vh] mt-[15vh]">
            <motion.div 
                initial={{ y:-80, opacity:0 }} 
                animate={{ y:0, opacity:1 }}
                transition={{ duration: .8, delay:.2 }}
                className="w-[60vw] md:w-[43vw] h-auto bg-white">
                <Image
                        src='/olivia_hu.png' 
                        alt='OLIVIA HU'
                        width='1500'
                        height='1500'
                        className="object-cover" />
                {/* <p className="font-playfair text-black text-[96pt] text-center">OLIVIA HU</p> */}
            </motion.div>
            <div className="mt-10 md:ml-20 text-center md:text-left flex flex-col gap-2 font-cormorant text-lg">
                <motion.div
                    initial={{ opacity:0, x:20 }} 
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, y:-20 }}
                    transition={{duration: 0.6, delay:0.8}}>
                    CS Undergraduate
                </motion.div>
                <motion.div
                    initial={{ opacity:0, x:20 }} 
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, y:-20 }}
                    transition={{duration: 0.6, delay:.9}}>
                    at Georgia Tech
                </motion.div>
                <motion.div
                    initial={{ opacity:0, x:20 }} 
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, y:-20 }}
                    transition={{duration: 0.6, delay:1.0}}>
                    aspiring graphics engineer 
                </motion.div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-auto md:absolute md:right-0 md:top-0 md:mt-0 mt-10 ">
            <motion.div
                className="lg:w-[53vw] md:w-[70vw] z-10 h-48"
                initial={{ y:-50, opacity:0 }} 
                animate={{ y:0, opacity:1 }}
                whileHover={{ x: -6, y: -10 }}
                transition={{ duration: 1 }}>
                <Image
                    src='/goat.png' 
                    alt='goat drawing'
                    width='1500'
                    height='1500'
                    className="object-cover md:right-0 md:mt-16 mt-8" />
            </motion.div>
            {/* tan box */}
            <motion.div 
                initial={{ opacity:0 }} 
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
                className="hidden md:block md:absolute md:z-0 md:right-0 md:w-[50vw] md:h-[820px] md:my-[45px] md:mr-16 mt-24 bg-[#EEE9E2]" />

            <div className="md:hidden absolute z-0 w-full h-96 mt-16 bg-[#EEE9E2]" />
        </div>
    </div>)
}