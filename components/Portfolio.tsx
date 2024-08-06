"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const items = [
    {
        id: 101,
        name: 'Agora Website',
        tags: ['Frontend',],
        img: '/projects/agora.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
        href: 'www.gtagora.com',
        github: 'https://github.com/GTagora/AgoraFrontend'
    },
    {
        id: 102,
        name: 'Empathy Bytes',
        tags: ['Frontend',],
        img: '/projects/empathy-bytes.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
        href: 'https://educast.library.gatech.edu/',
        github: 'https://github.com/genefu/empathy-bytes-react-native-app'
    },
    {
        id: 103,
        name: 'Personal Website',
        tags: ['Frontend', 'Illustration'],
        img: '/projects/personal-website.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
        href: 'https://olivia-hu.onrender.com/',
        github: 'https://github.com/ohu9/olivia-hu-website'
    },
    {
        id: 104,
        name: 'CS 3451 Computer Graphics',
        tags: ['Graphics', 'Illustration'],
        img: '/projects/cs-3451.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
        href: undefined,
        github: 'https://github.com/ohu9/cs3451'
    },
]
export default function Portfolio() {
    return (
        <>
            {/* ROCKET DRONES */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-14 w-full h-[60vh] mt-12">
                <motion.img 
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .3}}

                    src='/projects/rd-drones.jpg'
                    alt='rocket drones image'
                    width='800'
                    height='800'
                    className='object-contain w-full lg:ml-32 lg:w-[40%]'/>
                <motion.div className={classNames("xl:w-[70%] lg:w-[60%] h-auto lg:bg-[#673F3F] lg:pl-20 lg:pr-10 lg:py-32",
                                        "bg-black py-20 px-16 text-white font-ebg"
                )}
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .6}}>
                    <p className="font-playfair xl:text-5xl text-4xl font-bold tracking-[.4rem]">ROCKET DRONES</p>
                    <p className="font-inter font-bold tracking-[.4rem] my-5">FULL STACK DEVELOPMENT INTERN</p>
                    <p className="italic tracking-wide opacity-70">Winter – Summer 2024</p>
                    <ul className="mt-10 list-disc">
                        <li className="ml-8 mt-3">Designed and implemented client portal interface using Figma, React, Next.js, TailwindCSS</li>
                        <li className="ml-8 mt-3">Built back-end framework using Supabase and handled database queries through Next.js</li>
                        <li className="ml-8 mt-3">Worked with hardware and marketing teams to ensure software compatibility and meet user requirements</li>
                    </ul>

                    <motion.div 
                        initial={{ opacity: 0, x:15 }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .8}}
                        className="mt-10">
                        <LinkButton color="white" bg="[#673F3F]" href='https://rocketdrones.com/' label='WEBSITE'/>
                    </motion.div>
                </motion.div>
            </div>

            {/* AGORA */}
            <div className="flex flex-col xl:flex-row lg:gap-12 w-full h-auto lg:mt-32 xl:px-52 lg:px-32 md:mt-96 mt-80">
                <motion.div className={classNames("h-full bg-[#E5E9E7] lg:px-32 lg:pt-28",
                                        "py-20 px-16 text-[#073700] font-ebg"
                )}
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .3}}>
                    <span className="inline font-playfair xl:text-5xl text-4xl font-bold tracking-[.4rem]">AGORA
                        <p className="inline ml-4 tracking-wider font-normal font-inter text-xs">| &nbsp;&nbsp;a student literary journal at Georgia Tech</p>
                    </span>
                    
                    {/* WEB TEAM LEAD */}
                    <motion.div
                        initial={{ opacity: 0, y:15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .5}}>
                        <p className="font-inter font-bold tracking-[.4rem] mt-8">WEB TEAM LEAD</p>
                        <p className="italic tracking-wide opacity-70 my-2">Fall 2023 – Present</p>
                        <ul className="list-disc">
                            <li className="ml-8 mt-[2px]">Designed and prototyped website for literary journal, Agora, using Figma; illustrated logo using Procreate</li>
                            <li className="ml-8 mt-[2px]">Coded website using JSX, React, and Next.js; implemented responsive interface for mobile screens, improved SEO</li>
                            <li className="ml-8 mt-[2px]">Used Firebase database to store website images and content; site renders dynamic pages using database queries</li>
                            <li className="ml-8 mt-[2px]">Deployed site with custom domain, SSL certificate authentication, and domain privacy protection</li>
                            <li className="ml-8 mt-[2px]">Employ Agile development to plan sprint schedule, run scrum meetings, delegate tasks</li>
                        </ul>

                        {/* buttons */}
                        <div className="flex gap-3 my-10">
                            <motion.div 
                                initial={{ opacity: 0, x:15 }}
                                whileInView={{ opacity: 1, x:0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8, delay: .8}}>
                                <LinkButton color="[#073700]" bg="[#E5E9E7]" href='https://www.figma.com/proto/oM6AEdnnZBCOon4nI1K8lq/Agora-Website?node-id=7-2&t=NWZlvQl64dgdHB48-1' label='FIGMA'/>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x:15 }}
                                whileInView={{ opacity: 1, x:0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8, delay: .9}}>
                                <LinkButton color="[#073700]" bg="[#E5E9E7]" href='https://github.com/GTagora/AgoraFrontend' label='GITHUB'/>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CO FOUNDER.. */}
                    <motion.div
                        initial={{ opacity: 0, y:15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .7}}>
                        <p className="font-inter font-bold tracking-[.4rem] mt-16">CO-FOUNDER & EDITOR-IN-CHIEF</p>
                        <p className="italic tracking-wide opacity-70 my-2">Fall 2023 – Present</p>
                        <ul className="list-disc">
                            <li className="ml-8 mt-[2px]">Ideated and established Agora, a student-run Christian journal at Georgia Tech</li>
                            <li className="ml-8 mt-[2px]">Recruited members, planned meetings, ran workshops, lead discussions, oversaw communication logistics</li>
                            <li className="ml-8 mt-[2px]">Direct website development, graphic design, and creative direction of journal’s blog and print publications</li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x:15 }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .8}}
                        className="mt-10">
                        <LinkButton color="[#073700]" bg="[#E5E9E7]" href='https://www.gtagora.com/' label='WEBSITE'/>
                    </motion.div>
                </motion.div>

                {/* image column */}
                <div className="flex xl:flex-col gap-4 justify-between w-[25%] lg:h-[95vh] bg-red-100">
                    <motion.img 
                        initial={{ opacity: 0, y:15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .5}}

                        src='/projects/agora.png'
                        alt='agora image'
                        width='800'
                        height='800'
                        className='object-cover h-[30%]'/>
                    <motion.img 
                        initial={{ opacity: 0, y:15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .6}}

                        src='/projects/agora-booklets.jpg'
                        alt='agora booklets image'
                        width='800'
                        height='800'
                        className='object-cover h-[70%]'/>
                </div>
            </div>

            {/* OTHER PROJECTS */}

        </>
        // <div className="w-3/4 mt-12 mx-auto md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-7 space-y-5 md:space-y-0">

        //     {/* AGORA */}

        //     {/* OTHER PROJECTS */}

        //     {items.map((item,i) => 
        //         <motion.div key={item.name} className="h-[32rem] bg-[#d1f0d6]"
        //             initial={{ opacity: 0 }}
        //             whileInView={{ opacity: 1 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: .8, delay: .5+(.2*i)}}>
        //             {item.img ? 
        //             <Image 
        //                 src={item.img}
        //                 alt={item.name + ' image'}
        //                 width='800'
        //                 height='800'
        //                 className='h-[90%] object-cover'/>
        //             :
        //             <div className="bg-neutral-200 "/>
        //             }
        //             <p className="mt-2 font-inter">{item.name}</p>
                    
        //         </motion.div>
        //     )}
        // </div>
    )
}

const LinkButton = ( { color, bg, href, label }:{ color:string, bg:string, href:string, label:string} ) => {
    return (
        <Link 
            href={href}
            target='_blank'
            className={classNames(`text-${color} border-${color} hover:bg-${color} hover:text-${bg}`,
                        "border-2 rounded-2xl px-4 py-2 font-inter text-xs tracking-widest",
                        "transition-all duration-100")}>
            {label}
        </Link>
    )
}