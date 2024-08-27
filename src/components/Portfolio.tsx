"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import classNames from "classnames";
import Link from "next/link";

const projects = [
    {
        id: 101,
        name: 'UI Design Project: Tasoki',
        tags: ['Frontend','Design', 'UI/UX'],
        img: '/projects/tasoki2.png',
        description: 'Applying UI/UX research techniques (from surveys to hierarchical task analysis to prototyping) to design a high-fidelity prototype of a work productivity app.',
        href: 'https://drive.google.com/drive/folders/19wfm0CNIBkEg1STXewyT18SC7LGgu9Jr?usp=sharing',
        website: 'https://drive.google.com/drive/folders/19wfm0CNIBkEg1STXewyT18SC7LGgu9Jr?usp=sharing',
        github: undefined,
    },
    {
        id: 102,
        name: 'CS 3451 Computer Graphics',
        tags: ['Graphics', 'Illustration'],
        img: '/projects/cs-3451.png',
        description: 'A folder of various projects completed in Computer Graphics, featuring exploration of mesh development, lighting & shading, noise, ray tracing, and more. A work in progress for better displaying the results...',
        href: 'https://drive.google.com/drive/folders/1xwKP5jMx8qqtF6bngAS0sUuesXpuc50n?usp=sharing',
        website: 'https://drive.google.com/drive/folders/1xwKP5jMx8qqtF6bngAS0sUuesXpuc50n?usp=sharing',
        github: 'https://github.com/ohu9/cs3451'
    },
    {
        id: 103,
        name: 'Personal Website',
        tags: ['Frontend', 'Design', 'Illustration'],
        img: '/projects/personal-website.png',
        description: 'This website! A personal portfolio and passion project, designed, illustrated & developed by yours truly. Tech stack: React, TypeScript, Next.js, TailwindCSS',
        href: 'https://github.com/ohu9/olivia-hu-website',
        github: 'https://github.com/ohu9/olivia-hu-website',
        figma: 'https://www.figma.com/design/Y3DGVIyc1lAOoINFPlgeM9/Personal-Website?node-id=0-1&t=D47eBbIY2q7Z1q05-1',
    },
    {
        id: 104,
        name: 'Empathy Bytes',
        tags: ['Frontend',],
        img: '/projects/empathy-bytes.png',
        description: 'A vertically integrated research project at GT focused on developing immersive tech that platforms stories from our local community. I help design and full-stack development on the website and mobile app.',
        href: 'https://educast.library.gatech.edu/',
        website: 'https://educast.library.gatech.edu/',
        github: 'https://github.com/genefu/empathy-bytes-react-native-app'
    },
    // {
    //     id: 105,
    //     name: 'Deep fake paper',
    //     tags: ['AI',],
    //     img: '/projects/agora-website.png',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
    //     href: '',
    //     github: undefined,
    // },
    // {
    //     id: 106,
    //     name: 'Art & Journaling Portfolio',
    //     tags: ['Frontend',],
    //     img: undefined,
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio justo, aliquam eget mollis ac, pellentesque sit amet eros. Aenean lacinia nulla urna, vitae laoreet turpis tincidunt eget. Nullam mollis justo nunc, nec sodales ex euismod quis. Cras varius ante quis tempus imperdiet. Quisque et turpis eu diam cursus condimentum non ac enim. Suspendisse viverra turpis in turpis semper elementum. Sed aliquam eget velit vel elementum. Sed ullamcorper diam ut arcu gravida aliquam. Phasellus consectetur lacus malesuada est vulputate, vitae lobortis dolor auctor. Phasellus auctor ipsum porttitor auctor pellentesque. Maecenas non mi aliquet, finibus metus vel, varius turpis. Pellentesque in lacus in mauris rutrum vehicula feugiat sed enim. Curabitur faucibus quis lacus eu mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut odio risus. Integer quis lorem lobortis, cursus felis vel, egestas sapien. Nullam iaculis quam nec lacinia varius. Phasellus dignissim congue imperdiet. Nulla non nulla tellus. Fusce tristique ligula sit amet purus semper, faucibus pulvinar mi pulvinar. Nam et fermentum neque. Proin vel turpis eu quam elementum convallis. Morbi in mi maximus ex pellentesque auctor ut sit amet ipsum. Ut cursus augue id tellus scelerisque luctus. In hac habitasse platea dictumst.',
    //     href: '',
    //     github: '',
    // }
]

export function Portfolio() {
    return (
        <div className="hidden lg:block">
            {/* ROCKET DRONES */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-14 w-full h-[60vh] mt-32">
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
                <motion.div className={classNames("xl:w-[70%] lg:w-[60%] h-auto lg:bg-[#673F3F] lg:pl-20 lg:pr-10 xl:py-32 py-20",
                                        "bg-black px-16 text-white font-ebg"
                )}
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .6}}>
                    <p className="font-playfair xl:text-5xl text-4xl font-bold tracking-[.4rem]">ROCKET DRONES</p>
                    <p className="font-inter font-bold tracking-[.4rem] my-5">FULL STACK DEVELOPMENT INTERN</p>
                    <p className="italic tracking-wide opacity-70">Winter – Summer 2024</p>
                    <ul className="mt-10 list-disc">
                        <li className="ml-8 mt-3">Designed and implemented client portal interface using <b>Figma</b>, <b>React</b>, <b>Next.js</b>, <b>TailwindCSS</b></li>
                        <li className="ml-8 mt-3">Built back-end framework using <b>Supabase</b> and handled database queries through <b>Next.js</b></li>
                        <li className="ml-8 mt-3">Worked with hardware and marketing teams to ensure software compatibility and meet user requirements</li>
                    </ul>

                    <motion.div 
                        initial={{ opacity: 0, x:15 }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .8}}
                        className="mt-10">
                        <LinkButton color="white" href='https://rocketdrones.com/' label='WEBSITE'/>
                    </motion.div>
                </motion.div>
            </div>

            {/* AGORA */}
            <div className="flex flex-col justify-center xl:flex-row lg:gap-12 w-full lg:mt-32 xl:px-52 lg:px-32 md:mt-80 mt-72">
                <motion.div className={classNames("h-auto bg-[#E5E9E7] lg:px-32 px-16 py-20 text-[#073700] font-ebg flex flex-col justify-center"
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
                            <li className="ml-8 mt-[2px]">Designed and prototyped website for literary journal, <i>Agora</i>, using <b>Figma</b>; illustrated logo using <b>Procreate</b></li>
                            <li className="ml-8 mt-[2px]">Coded website using <b>JSX</b>, <b>React</b>, and <b>Next.js</b>; implemented responsive interface for mobile screens, improved SEO</li>
                            <li className="ml-8 mt-[2px]">Used <b>Firebase</b> database to store website images and content; site renders dynamic pages using database queries</li>
                            <li className="ml-8 mt-[2px]">Deployed site with custom domain, SSL certificate authentication, and domain privacy protection</li>
                            <li className="ml-8 mt-[2px]">Employ <b>Agile development</b> to plan sprint schedule, run scrum meetings, delegate tasks</li>
                        </ul>

                        {/* buttons */}
                        <div className="flex gap-3 my-8">
                            <motion.div 
                                initial={{ opacity: 0, x:15 }}
                                whileInView={{ opacity: 1, x:0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8, delay: .5}}>
                                <LinkButton color="black" href='https://www.figma.com/proto/oM6AEdnnZBCOon4nI1K8lq/Agora-Website?node-id=7-2&t=NWZlvQl64dgdHB48-1' label='FIGMA'/>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x:15 }}
                                whileInView={{ opacity: 1, x:0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8, delay: .6}}>
                                <LinkButton color="black" href='https://github.com/GTagora/AgoraFrontend' label='GITHUB'/>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CO FOUNDER.. */}
                    <motion.div
                        initial={{ opacity: 0, y:15 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .5}}>
                        <p className="font-inter font-bold tracking-[.4rem] mt-16">CO-FOUNDER & EDITOR-IN-CHIEF</p>
                        <p className="italic tracking-wide opacity-70 my-2">Fall 2023 – Present</p>
                        <ul className="list-disc">
                            <li className="ml-8 mt-[2px]">Ideated and established <i>Agora</i>, a student-run Christian journal at Georgia Tech</li>
                            <li className="ml-8 mt-[2px]">Recruited members, planned meetings, ran workshops, lead discussions, oversaw communication logistics</li>
                            <li className="ml-8 mt-[2px]">Direct website development, graphic design, and creative direction of journal’s blog and print publications</li>
                            <li className="ml-8 mt-[2px]">Design and create print layout using <b>Adobe InDesign</b></li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x:15 }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .5}}
                        className="mt-8">
                        <LinkButton color="black" href='https://www.gtagora.com/' label='WEBSITE'/>
                    </motion.div>
                </motion.div>

                {/* image column */}
                <div className="hidden xl:flex xl:flex-col gap-4 justify-between w-[25%] lg:h-[95vh]">
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
            <div className="flex flex-col w-full h-96 mt-32">
                <motion.div
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .5}}
                    className="flex flex-col items-center w-full h-96">
                        <div className="flex gap-8 items-center mx-auto">
                            <span className="inline w-52 h-[1px] bg-black"/>
                            <p className="inline font-playfair text-4xl text-center font-bold tracking-[.4rem]">other projects</p>
                            <span className="inline w-52 h-[1px] bg-black"/>
                        </div> 
                </motion.div>

                <div className={classNames("grid grid-cols-2 gap-12 mt-20 w-3/4 mx-auto",
                                           "xl:grid-cols-3"
                )}>
                    {projects.map((item,i) => 
                        <motion.div key={item.name} className="group xl:h-[52vh] h-[39vh] min-w-[30%] p-7 border-2 border-neutral-100 rounded-2xl shadow-md hover:shadow-md transition-all duration-200"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8, delay: .2+(.2*i)}}>
                            <Link href={item.href} target='_blank'>
                                {item.img ? 
                                <div className='relative w-full xl:h-[27vh] h-[25vh] rounded-2xl overflow-hidden'>
                                    <Image 
                                        src={`${item.img}`}
                                        alt={item.name + ' image'}
                                        width='800'
                                        height='800'
                                        className='absolute object-cover h-full rounded-2xl ease-in-out duration-300 group-hover:scale-[110%]'/>
                                </div>
                                :
                                <div className="w-full h-[60%] bg-neutral-200 rounded-2xl"/>
                                }
                                <div className="flex flex-col xl:h-[42%] h-[25%] justify-between">
                                    <p className="mt-7 text-xl font-medium tracking-wide font-inter text-neutral-600">{item.name}</p>
                                    <p className="invisible xl:visible text-sm text-neutral-400 font-inter leading-5 line-clamp-4">{item.description}</p>
                                    <div className="flex gap-5 text-xs font-inter text-neutral-400 group-hover:text-neutral-700 transition-all duration-200">
                                        {item.website && <Link href={item.website} target="_blank" className="hover:underline">Website</Link>}
                                        {item.github && <Link href={item.github} target="_blank" className="hover:underline">Github</Link>}
                                        {item.figma && <Link href={item.figma} target="_blank" className="hover:underline">Figma</Link>}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </div>

            </div>

        </div>
    )
}

export function MobilePortfolio() {
    return (
        <div className="block lg:hidden mx-10">
            {/* ROCKET DRONES */}
            <div className="flex flex-col mt-10 h-auto">
                <Image
                    src='/projects/rd-drones.jpg'
                    alt='rocket drones image'
                    width='800'
                    height='800'
                    className='object-contain w-full'/>
                <div className="bg-black px-16 text-white font-ebg pb-20">
                    <p className="font-playfair text-4xl font-bold tracking-[.4rem]">ROCKET DRONES</p>
                    <p className="font-inter font-bold tracking-[.2rem] my-5">FULL STACK DEVELOPMENT INTERN</p>
                    <p className="italic tracking-wide opacity-70">Winter – Summer 2024</p>
                    <ul className="mt-6 list-disc">
                        <li className="ml-8 mt-3">Designed and implemented client portal interface using <b>Figma</b>, <b>React</b>, <b>Next.js</b>, <b>TailwindCSS</b></li>
                        <li className="ml-8 mt-3">Built back-end framework using <b>Supabase</b> and handled database queries through <b>Next.js</b></li>
                        <li className="ml-8 mt-3">Worked with hardware and marketing teams to ensure software compatibility and meet user requirements</li>
                    </ul>
                    <div className="mt-10">
                        <LinkButton color="white" href='https://rocketdrones.com/' label='WEBSITE'/>
                    </div>
                </div>
            </div>

            {/* AGORA */}
            <div className="flex flex-col mt-10 w-full h-auto bg-[#E5E9E7] text-[#073700] font-ebg px-16 pt-20 pb-12">
                <Image
                    src='/projects/agora-booklets.jpg'
                    alt='agora image'
                    width='800'
                    height='800'
                    className='object-cover w-full sm:h-72 h-56'/>

                <span className="inline mt-12 font-playfair text-4xl font-bold tracking-[.4rem]">AGORA
                    <p className="inline ml-4 tracking-wider font-normal font-inter text-xs">| &nbsp;&nbsp;a student literary journal at Georgia Tech</p>
                </span>
                
                {/* WEB TEAM LEAD */}
                <div>
                    <p className="font-inter font-bold tracking-[.2rem] mt-8">WEB TEAM LEAD</p>
                    <p className="italic tracking-wide opacity-70 my-2">Fall 2023 – Present</p>
                    <ul className="list-disc">
                        <li className="ml-8 mt-[2px]">Designed and prototyped website for literary journal, <i>Agora</i>, using <b>Figma</b>; illustrated logo using <b>Procreate</b></li>
                        <li className="ml-8 mt-[2px]">Coded website using <b>JSX</b>, <b>React</b>, and <b>Next.js</b>; implemented responsive interface for mobile screens, improved SEO</li>
                        <li className="ml-8 mt-[2px]">Used <b>Firebase</b> database to store website images and content; site renders dynamic pages using database queries</li>
                        <li className="ml-8 mt-[2px]">Deployed site with custom domain, SSL certificate authentication, and domain privacy protection</li>
                        <li className="ml-8 mt-[2px]">Employ <b>Agile development</b> to plan sprint schedule, run scrum meetings, delegate tasks</li>
                    </ul>

                    {/* buttons */}
                    <div className="flex gap-3 mt-8">
                        <LinkButton color="black" href='https://www.figma.com/proto/oM6AEdnnZBCOon4nI1K8lq/Agora-Website?node-id=7-2&t=NWZlvQl64dgdHB48-1' label='FIGMA'/>
                        <LinkButton color="black" href='https://github.com/GTagora/AgoraFrontend' label='GITHUB'/>
                    </div>
                </div>

                {/* CO FOUNDER.. */}
                <div>
                    <p className="font-inter font-bold tracking-[.2rem] mt-16">CO-FOUNDER & EDITOR-IN-CHIEF</p>
                    <p className="italic tracking-wide opacity-70 my-2">Fall 2023 – Present</p>
                    <ul className="list-disc">
                        <li className="ml-8 mt-[2px]">Ideated and established <i>Agora</i>, a student-run Christian journal at Georgia Tech</li>
                        <li className="ml-8 mt-[2px]">Recruited members, planned meetings, ran workshops, lead discussions, oversaw communication logistics</li>
                        <li className="ml-8 mt-[2px]">Direct website development, graphic design, and creative direction of journal’s blog and print publications</li>
                        <li className="ml-8 mt-[2px]">Design and create print layout using <b>Adobe InDesign</b></li>
                    </ul>
                </div>
                <div className="my-8">
                    <LinkButton color="black" href='https://www.gtagora.com/' label='WEBSITE'/>
                </div>
            </div>
            <div className="mx-auto my-12 bg-neutral-800 w-10 h-px" />

            {/* OTHER PROJECTS */}
            <p className="font-playfair text-3xl text-center font-bold tracking-[.4rem]">other projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-6 mt-6 sm:mt-10">
                {projects.map((item) => 
                    <Link href={item.href} target='_blank' className="group flex sm:flex-col flex-row bg-white gap-8 p-6 w-full rounded-xl shadow-md">
                        {item.img ? 
                        <div className='relative overflow-hidden sm:w-full w-32 sm:h-40 h-28 rounded-lg'>
                            <Image 
                                src={`${item.img}`}
                                alt={item.name + ' image'}
                                width='800'
                                height='800'
                                className='absolute object-cover h-full rounded-2xl ease-in-out duration-300 group-hover:scale-[110%]'/>
                        </div>
                        :
                        <div className="w-full h-[60%] bg-neutral-200 rounded-2xl"/>
                        }
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold font-inter text-neutral-600">{item.name}</p>
                            <div className="mt-3 flex gap-2 text-xs font-inter text-neutral-400 group-hover:text-neutral-700 transition-all duration-200">
                                {item.website && <Link href={item.website} target="_blank" className="px-3 py-1 bg-neutral-700 hover:bg-neutral-900 text-white rounded-2xl">Website</Link>}
                                {item.github && <Link href={item.github} target="_blank" className="px-3 py-1 bg-neutral-700 hover:bg-neutral-900 text-white rounded-2xl">Github</Link>}
                                {item.figma && <Link href={item.figma} target="_blank" className="px-3 py-1 bg-neutral-700 hover:bg-neutral-900 text-white rounded-2xl">Figma</Link>}
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            
        </div>
    )
}
