'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { usePathname } from "next/navigation";
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { motion } from 'framer-motion';

const tabs = [
    {
        name: 'home',
        href: '/#home',
        current: false,
        range: [0,1000],
    },
    {
        name: 'about',
        href: '/#about',
        current: false,
        range: [1000,2000],
    },
    // {
    //     name: 'experience',
    //     href: '/experience',
    //     current: false,
    // },
    {
        name: 'portfolio',
        href: '/#portfolio',
        current: false,
        range: [2000,3000],
    },
    {
        name: 'contact',
        href: '/#contact',
        current: false,
        range: [3000,4000],
    },
    // {
    //     name: 'resume',
    //     href: 'https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing',
    //     target: '_blank',
    //     current: false,

    // }
]

export default function Navbar() {

    const pathName = usePathname();
    tabs.map(tab => tab.current = (tab.href == pathName))

    const scrollPosition = useScrollPosition()

    return (
    <>
        <MobileMenu/>
        <nav className='hidden md:fixed mt-12 ml-10 md:flex md:flex-row md:gap-5 md:items-center md:justify-between'>
            <div className="flex flex-col mr-12"> 
            {
                tabs.map((tab,i) => 
                    <motion.div
                        initial={{ opacity:0, y:-20 }} 
                        animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:-20 }}
                        transition={{duration: 0.6, delay:0.1*i}}
                        >
                        <Link 
                            key={tab.name}
                            href={tab.href} 
                            // target={tab.target}
                            className={classNames(scrollPosition >= tab.range[0] && scrollPosition < tab.range[1] ? "text-black italic" : "text-zinc-400",
                                scrollPosition >= 1000 && scrollPosition < 2000 && tab.name != 'about' && "text-zinc-300 opacity-75 hover:text-zinc-300 hover:opacity-100",
                                scrollPosition >= 1000 && scrollPosition < 2000 && tab.name == 'about' && "text-white",
                                "text-2xl tracking-wide font-playfair leading-none hover:text-zinc-700 transition duration-100")}>
                            {tab.name.toUpperCase()}
                        </Link>
                    </motion.div>
                )
            }
            </div>
        </nav>
    </>
    );
}

const MobileMenu = () => {

    const scrollPosition = useScrollPosition()

    return (
        <Disclosure as="div">
            <div className="md:hidden fixed flex justify-between items-center z-20 mt-10 mx-4">
                <DisclosureButton className={classNames(scrollPosition > 945 && scrollPosition <= 1945? "text-zinc-50" : "",
                            "group inline-flex items-center justify-center p-2 text-zinc-500")}>
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 stroke-[2px] group-data-[open]:hidden group-data-[open]:text-zinc-500" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 stroke-[2px] group-data-[open]:block group-data-[open]:text-zinc-500" />
                </DisclosureButton>
            </div>
            <DisclosurePanel as="div" transition className="md:hidden flex flex-col gap-1 fixed left-0 z-10 inset-y-0 pl-8 pr-20 py-24 bg-white shadow-lg transition data-[closed]:-translate-x-5 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in">
            {
                tabs.map((tab, i) => 
                    <motion.div
                        initial={{ opacity:0, y:-20 }} 
                        animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:-20 }}
                        transition={{duration: 0.6, delay:0.1*i}}
                        >
                        <DisclosureButton 
                            key={tab.name}
                            as="a"
                            href={tab.href}
                            // target={tab.target}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(scrollPosition >= tab.range[0] && scrollPosition < tab.range[1] ? "text-black italic" : "text-zinc-400",
                                "text-2xl tracking-wide font-playfair leading-none")}>
                            {tab.name.toUpperCase()}
                        </DisclosureButton>
                    </motion.div>
                )
                }
            </DisclosurePanel>
        </Disclosure>
)}
