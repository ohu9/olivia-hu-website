"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialButton } from "./Buttons";
import classNames from "classnames";

const links = [
    {
        label: "Email",
        href: "mailto:oliviahu@gatech.edu",
        img: "/email.png",
    },
    {
        label: "GitHub",
        href: "https://github.com/ohu9",
        img: "/github.png",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/oliviahhu/",
        img: "/linkedin.png",
    }
]

export default function Contact() {
    return (
        <div className={classNames("flex flex-col-reverse text-[#403830] mt-[300px] mx-16 gap-12",
                                    "md:flex-row md:gap-20 w-full h-[600px] md:mt-[300px] md:mx-0",
        )}>
            <motion.img 
                initial={{ opacity: 0, y:15 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .3}}

                src='/projects/agora.png'
                alt='rocket drones image'
                width='800'
                height='800'
                className='object-cover md:min-h-[80%] w-full lg:ml-32 md:w-[40%] '/>
            <div>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .4}}
                    className="mt-5 font-playfair lg:tracking-[.8rem] xl:text-[80pt] lg:text-[65pt] tracking-[.4rem] text-[50pt]">
                    contact
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .7}}
                    className="mt-0 ml-2 md:mt-5 md:ml-4 font-ebg tracking-[.1rem]">
                    Let&apos;s get in touch &mdash; I'd love to talk more.
                </motion.div>
                <div className="flex flex-col gap-2 mt-12">
                    {links.map((link,i) => <>
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, x:30 }}
                            whileInView={{ opacity: 1, x:0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .8 + (.1*i)}}>
                                <SocialButton label={link.label} href={link.href} img={link.img} />
                        </motion.div>
                    </>)}
                </div>
            </div>
        </div>
    )
}