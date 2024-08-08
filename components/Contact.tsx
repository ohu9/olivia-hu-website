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
        <div className={classNames("flex flex-col-reverse text-[#403830]",
                                    "md:flex-row gap-20 w-full h-[600px] mt-[250px]",
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
                className='object-contain w-full lg:ml-32 lg:w-[40%]'/>
            <div>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .4}}
                    className="mt-5 font-playfair tracking-[.8rem] text-[80pt]">
                    contact
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .7}}
                    className="mt-5 ml-4 font-ebg tracking-[.1rem]">
                    Let&apos;s get in touch &mdash; I'd love to talk more.
                </motion.div>
                <div className="flex flex-col gap-2 my-6">
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