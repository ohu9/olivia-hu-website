"use client";
import { motion } from "framer-motion";
import { SocialButton } from "./Buttons";
import classNames from "classnames";
import email_img from '/email.png'

const links = [
    {
        id: 1,
        label: "Email",
        href: "mailto:oliviahu@gatech.edu",
        img: "/email.png",
    },
    {
        id: 2,
        label: "GitHub",
        href: "https://github.com/ohu9",
        img: "/github.png",
    },
    {
        id: 3,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/oliviahhu/",
        img: "/linkedin.png",
    },
    {
        id: 4,
        label: "Resume",
        href: "https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view",
        img: "/resume.png",
    }
]

export default function Contact() {
    return (
        <div className={classNames("flex flex-col w-full h-[600px] pt-[120px] mx-16 gap-16 text-[#403830]", 
                                   "lg:flex-row-reverse xl:mx-[15vw] lg:mr-28 lg:gap-[10vw] lg:mt-[150px] md:items-start",
        )}>
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
                    Let&apos;s get in touch &mdash; I&apos;d love to talk more.
                </motion.div>
                <div className="flex flex-col gap-2 mt-12">
                    {links.map((link,i) => 
                    <>
                        <motion.div
                            key={link.id}
                            initial={{ opacity: 0, x:30 }}
                            whileInView={{ opacity: 1, x:0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .8 + (.1*i)}}>
                                <SocialButton label={link.label} href={link.href} img={link.img} />
                        </motion.div>
                    </>)}
                </div>
            </div>
            <motion.img 
                initial={{ opacity: 0, y:15 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .3}}

                src='/seagull.png'
                alt='seagull image'
                width='800'
                height='800'
                className={classNames('object-contain w-full sm:max-w-[440px] ml-0',
                                      'md:max-w-full md:w-[40vw]'
                )}/>
        </div>
    )
}