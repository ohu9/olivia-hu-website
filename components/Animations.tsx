'use client';
import { motion } from "framer-motion";
import Image from "next/image";

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
    <>
        <motion.div 
            initial={{ y:-100, opacity:0 }} 
            animate={{ y:0, opacity:1 }}
            transition={{ duration: .8, delay:.2 }}
            className="absolute z-10 w-[43vw] h-52 mt-[40vh] ml-24 bg-white">
            <p className="font-playfair text-black text-[96pt] text-center">OLIVIA HU</p>
        </motion.div>
        <div className="flex absolute right-0 top-0">
            <motion.div
                className="h-[100vh] w-[53vw] z-10"
                initial={{ y:-50, opacity:0 }} 
                animate={{ y:0, opacity:1 }}
                whileHover={{ x: -6, y: -10 }}
                transition={{ duration: 1 }}>
                <Image
                    src='/goat.png' 
                    alt='goat drawing'
                    width='1500'
                    height='1500'
                    className="object-cover absolute z-10 right-0 mt-16" />
            </motion.div>
            <div className="w-[50vw] h-[820px] bg-[#EEE9E2] absolute z-0 right-0  my-[45px] mr-16" />
        </div>

        <div className="absolute ml-[30vw] mt-[66vh] text-right flex flex-col gap-2 font-inter">
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
    </>)
}