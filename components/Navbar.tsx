'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { usePathname } from "next/navigation";

const tabs = [
    {
        name: 'home',
        href: '/',
        current: false,
    },
    {
        name: 'about',
        href: '/about',
        current: false,
    },
    {
        name: 'experience',
        href: '/experience',
        current: false,
    },
    {
        name: 'portfolio',
        href: '/portfolio',
        current: false,
    },
    {
        name: 'contact',
        href: '/contact',
        current: false,
    },
    {
        name: 'resume',
        href: 'https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing',
        target: '_blank',
        current: false,

    }
]

export default function Navbar() {

    const pathName = usePathname();
    tabs.map(tab => tab.current = (tab.href == pathName))

    return (
    <>
        <MobileMenu/>
        <nav className='hidden p-6 md:flex md:flex-row md:gap-5 md:items-center md:justify-between'>
            <div className="flex gap-6 mr-12"> 
            {
                tabs.map(tab => 
                    <Link 
                        href={tab.href} 
                        target={tab.target}
                        className={classNames(tab.current ? "text-black italic" : "text-zinc-500",
                                    "font-playfair transition-all duration-150")}>
                        {tab.name.toUpperCase()}
                    </Link>
                )
            }
            </div>
        </nav>
    </>
    );
}

const MobileMenu = () => {
    return (
        <Disclosure as="div">
            <div className="md:hidden flex justify-between items-center z-0 mt-5 mx-4">
                <Link href="/">
                    <Image 
                        src="/logo.png" 
                        width={400} 
                        height={400} 
                        alt='home' 
                        className='w-8 h-8 hover:cursor-pointer'/>
                </Link>
                <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-gray-700">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
            </div>
            <DisclosurePanel as="div" transition className="flex flex-col absolute right-0 z-10 px-4 py-2 bg-zinc-50 transition data-[closed]:translate-x-5 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in">
                {
                    tabs.slice(1).map(tab => 
                        <DisclosureButton 
                            key={tab.name}
                            as="a"
                            href={tab.href}
                            target={tab.target}
                            aria-current={tab.current ? 'page' : undefined}
                            className='px-2 text-gray-500 hover:text-black tracking-widest transition-all duration-150 py-2 text-right'>
                            {tab.name}
                        </DisclosureButton>
                    )
                }
            </DisclosurePanel>
        </Disclosure>
)}
