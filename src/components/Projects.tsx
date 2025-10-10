"use client";
import { motion } from "framer-motion";
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from "@headlessui/react";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import classNames from "classnames";
import Link from "next/link";

const projects = [
    {
        id: 101,
        name: 'UI Research & Design Project: Tasoki',
        date: 'Spring 2024',
        tags: ['Design', 'Research', 'UI/UX'],
        img: '/projects/tasoki2.png',
        description: 'As a team, we developed a high-fidelity prototype of a productivity app (called Tasoki) geared specifically towards busy undergrad students. <br/><br/><ol><li> • We first did a literature review and gathered extensive user research, conducting interviews and surveys, to better understand our target audience and create our project goals. </li><li>  • After further analysis we derived user requirements and generated user personas and use case scenarios. </li><li> • We then moved onto prototyping, going from sketches and storyboards to a high fidelity product. </li><li> • And finally, we presented our product and conducted usability/heuristic evaluations and improved our prototype.</ol> <br/><br/>Our entire process is documented in a series of write-ups and demos, viewable below:',
        href: 'https://drive.google.com/drive/folders/19wfm0CNIBkEg1STXewyT18SC7LGgu9Jr?usp=sharing',
        website: 'https://drive.google.com/drive/folders/19wfm0CNIBkEg1STXewyT18SC7LGgu9Jr?usp=sharing',
        github: undefined,
    },
    {
        id: 102,
        name: 'CS 3451 Computer Graphics',
        date: 'Spring 2024',
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
        date: 'Fall 2023 – Present',
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
        date: 'Fall 2023 – Present',
        tags: ['Frontend', 'Design', 'UI/UX', 'Agile'],
        img: '/projects/empathy-bytes.png',
        description: "A vertically integrated research project at GT focused on developing immersive tech that platforms stories from our local community. <br/><br/><b>Empathy Bytes Website</b><br/>I helped maintain the backend, hosted on Drupal, and developed its integration into the frontend using GraphQL.<br/>Tech stack: React, JavaScript, GatsbyJS, GraphQL, Drupal<br/><br/><b>Empathy Bytes App</b><br/>I contributed to the app design (see Figma file) and worked on the frontend implementation. We followed an Agile-style sprint schedule and collaborated remotely using Github and Discord.<br/>Tech stack: ReactNative, Expo, JavaScript, FireBase<br/><br/><b>BuzzQuest (Scavenger Hunt App)</b><br/>This semester, we are starting to develop a new game app that features an interactive map of Georgia Tech's campus. I helped develope the UX flows and screen mappings as well as front end development and user authentication.<br/>Tech stack: ReactNative, Expo, JavaScript, FireBase",
        href: 'https://educast.library.gatech.edu/',
        website: 'https://educast.library.gatech.edu/',
        github: 'https://github.com/genefu/empathy-bytes-react-native-app',
        figma: 'https://www.figma.com/design/ioNLWT73w6YHu6ul1geDDD/Empathy-Bytes-Pages?node-id=0-1&t=cICnDb3FZQ1P3GI4-1',
    },
    {
        id: 105,
        name: 'AndroidOS Mobile Game',
        date: 'Fall 2023',
        tags: ['Game Development', 'Agile'],
        img: '/projects/android.png',
        description: 'Developed a dungeon crawler mobile game in Android Studios; followed Agile development workflow: conducted sprints, scrum meetings, and utilized project management tools; constructed various UML diagrams to organize/delegate tasks and incorporate user requirements',
        href: 'https://github.com/NevinGregory/CS2340A_Team15',
        github: 'https://github.com/NevinGregory/CS2340A_Team15',
    },
    {
        id: 106,
        name: 'Deepfake Technology: Opportunity in the Foreboding',
        date: 'Spring 2023',
        tags: ['AI', 'Deep fake', 'Research paper'],
        img: '/projects/deep-fake.png',
        description: "A research paper compiling various studies on deepfake innovations and related costs/benefits, in which I analyze the technology's social, political, and economic impacts. Follow the link below to read:",
        href: 'https://drive.google.com/file/d/1b1HAzRucRy1gqRcHjn7ozF-9I9Dtfqbs/view',
        website: 'https://drive.google.com/file/d/1b1HAzRucRy1gqRcHjn7ozF-9I9Dtfqbs/view',
        github: undefined,
    },
    {
        id: 107,
        name: 'On Reader-Writer Experiences (English 1101 Portfolio)',
        date: 'Fall 2022',
        tags: ['Analysis', 'Paper'],
        img: '/projects/eng-portfolio.png',
        description: 'Award for Best ENGL Portfolio in 2022-23. An overview of my work from a semester of ENGL 1101: The Philosophy of Writing and the Forming Imagination, through which I explore the interaction between an author and their audience, reflect upon my own work, and share my conclusions on writing with awareness of reader-writer experiences. Read the full portfolio via the Notion link below:',
        href: 'https://ohu-9.notion.site/The-Scene-ENGL-1101-ePortfolio-d0660697fadb429a86ff8dbd2ac03714',
        website: 'https://ohu-9.notion.site/The-Scene-ENGL-1101-ePortfolio-d0660697fadb429a86ff8dbd2ac03714',
        github: undefined,
    },
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

export function Projects() {
    return (
        <div className="hidden lg:block">
            <div className="flex flex-col justify-start w-full h-auto mt-12">
                {/* <motion.div
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .5}}
                    className="flex flex-col items-center w-full">
                        <div className="flex gap-8 items-center mx-auto">
                            <span className="inline w-52 h-[1px] bg-black"/>
                            <p className="inline font-playfair text-4xl text-center font-bold tracking-[.4rem]">other projects</p>
                            <span className="inline w-52 h-[1px] bg-black"/>
                        </div> 
                </motion.div> */}
                <p className="self-end tracking-wider font-bold text-yellow-50 text-[90pt] italic mr-40 mb-16">
					PROJECTS
				</p>
                <div className={classNames("grid grid-cols-2 gap-6 w-3/4 mx-auto mb-24",
                                           "xl:grid-cols-3 xl:w-2/3"
                )}>
                    {projects.map((item,i) => 
                        <Popover key={item.name}>
                            <PopoverButton as="div">
                                <motion.div className="group min-w-[30%] p-7 border-2 border-neutral-50 rounded-xl shadow-md hover:shadow-md transition-all duration-200"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: .8, delay: (.15*i)}}>
                                    <div>
                                        {item.img ? 
                                            <div className='relative w-full xl:h-[27vh] h-[25vh] rounded-sm overflow-hidden'>
                                                <Image 
                                                    src={`${item.img}`}
                                                    alt={item.name + ' image'}
                                                    width='800'
                                                    height='800'
                                                    className='absolute object-cover h-full ease-in-out rounded-sm duration-300 group-hover:scale-[110%]'/>
                                            </div>
                                        :
                                            <div className="w-full h-[60%] bg-neutral-200 rounded-2xl"/>
                                        }
                                        <p className="px-2 py-1 text-xl font-semibold tracking-wide bg-yellow-50 text-[#2e2414] line-clamp-1">{item.name}</p>
                                        <p className="mt-2 text-xs text-yellow-50 font-inter leading-5 line-clamp-1">{item.date}</p>
                                        <div className="flex flex-row gap-2 mt-3">
                                            {item.tags.map((tag,i) => 
                                                <div key={i*10} className="px-3 py-[2px] text-neutral-100 border border-solid border-neutral-100 rounded-xl">
                                                    <p className="text-[.7rem] font-inter line-clamp-1">
                                                        {tag}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </PopoverButton>
                            <PopoverBackdrop className="fixed inset-0 bg-black/20 z-20" />
                            <PopoverPanel transition className={classNames("z-30 w-[50vw] h-[70vh] bg-neutral-50 rounded-xl shadow-xl flex flex-col fixed left-[25%] top-[10%]",
                                "transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",
                                "p-20"
                            )}>
                                <p className="mt-7 text-xl font-medium font-inter text-neutral-600">{item.name}</p>
                                <p className="mt-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                                <div className="flex mt-4 gap-5 text-xs font-inter text-neutral-400 group-hover:text-neutral-700 transition-all duration-200">
                                    {item.website && <Link href={item.website} target="_blank" className="hover:underline">Website</Link>}
                                    {item.github && <Link href={item.github} target="_blank" className="hover:underline">Github</Link>}
                                    {item.figma && <Link href={item.figma} target="_blank" className="hover:underline">Figma</Link>}
                                </div>
                            </PopoverPanel>
                        </Popover>
                    )}
                </div>

            </div>

        </div>
    )
}

export function MobileProjects() {
    return (
        <div className="block lg:hidden mx-10">
            <p className="self-center mx-auto tracking-wider font-bold text-[50pt] text-yellow-50 mt-20 md:text-[65pt]">
				PROJECTS
			</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-6 mt-6 sm:mt-10 mb-14">
                {projects.map((item) => 
                    <Link key={item.name} href={item.href} target='_blank' className="group flex sm:flex-col flex-row bg-white gap-8 p-6 w-full rounded-xl shadow-md">
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
                                {item.website && <Link href={item.website} target="_blank" className="px-3 py-1 text-neutral-500 border-[1.5px] border-neutral-400 hover:bg-neutral-700 hover:text-white hover:border-neutral-700 transition-all duration-150 rounded-2xl">Website</Link>}
                                {item.github && <Link href={item.github} target="_blank" className="px-3 py-1 text-neutral-500 border-[1.5px] border-neutral-400 hover:bg-neutral-700 hover:text-white hover:border-neutral-700 transition-all duration-150 rounded-2xl">Github</Link>}
                                {item.figma && <Link href={item.figma} target="_blank" className="px-3 py-1 text-neutral-500 border-[1.5px] border-neutral-400 hover:bg-neutral-700 hover:text-white hover:border-neutral-700 transition-all duration-150 rounded-2xl">Figma</Link>}
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            
        </div>
    )
}
