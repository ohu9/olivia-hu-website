'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const tabs = [
    {
        name: 'olivia hu',
        href: '/',
    },
    {
        name: 'about',
        href: '/about',
    },
    {
        name: 'projects',
        href: '/projects',
    },
    {
        name: 'experience',
        href: '/experience',
    },
    {
        name: 'contact',
        href: '/contact',
    },
    {
        name: 'resume',
        href: 'https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing',
        target: '_blank',

    }
]

export default function Navbar() {
    return (
    <>
        <Hamburger/>
        <nav className='hidden p-4 md:flex md:flex-row md:gap-5 md:items-center md:justify-between'>
            <Link href="/">
                <Image 
                    src="/logo.png" 
                    width={400} 
                    height={400} 
                    alt='home' 
                    className='w-9 h-9 ml-3 mt-2 hover:cursor-pointer'/>
            </Link>
            <div className="flex gap-6 ">
            {
                tabs.slice(1).map(tab => 
                    <Link 
                        href={tab.href} 
                        target={tab.target}
                        className="px-2 text-gray-500 hover:text-black hover:font-450 tracking-wider transition-all duration-150">
                        {tab.name}
                    </Link>
                )
            }
            </div>
        </nav>
    </>
    );
}

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    return (
        <Disclosure>
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
            </div>
            <DisclosurePanel className="">
                
            </DisclosurePanel>

        </Disclosure>
        // <Disclosure as="div" className='md:hidden'>
        //     <DisclosureButton>
                
        //     </DisclosureButton>

        //     {/* <div onClick={ () => setOpen(!open)} >
        //         <div> className={open ? styles.openBar : styles.bar }>
        //             <span className={open ? styles.openBar1 : styles.bar1 }></span>
        //             <span className={open ? styles.openBar2 : styles.bar2 }></span>
        //             <span className={open ? styles.openBar3 : styles.bar3 }></span>
        //         </div>

        //         <div className={open ? styles.openDim : styles.dim} />
        //         <div className={ open? styles.activebuttons : styles.buttons }>
        //             <Link href="/"><div className={styles.label}>HOME</div></Link>

        //             <Link href="/about"><div className={styles.label}>ABOUT</div></Link>
        //                 <Link href="/about"><div className={styles.indent}>Mission</div></Link>
        //                 <Link href="/about/staff"><div className={styles.indent}>Staff</div></Link>

        //             <Link href="/archive"><div className={styles.label}>ARCHIVE</div></Link>
        //                 <Link href="/#fall-23-release" className={styles.indent}>Fall &apos;23</Link>
        //                 <Link href="/archive" className={styles.indent}>Past Issues</Link>

        //             <Link href="/blog"><div className={styles.label}>BLOG</div></Link>
                    
        //             <Link href="/contact"><div className={styles.label} >CONTACT</div></Link>
        //         </div>
        //     </div> */}
        //     <Link href="/" className='p-4'>
        //         <Image 
        //             src="/logo.png" 
        //             width={40} 
        //             height={40} 
        //             alt='Home'
        //             className='hover:cursor-pointer p-1 ml-4'/>
        //     </Link>
        // </Disclosure>
)}




//     return (
//     <div className={styles.navbar}>
//     {/* LOGO */}
//         <Link href="/">
//             <Image
//                 className={styles.logo}
//                 src="/logo-black-box.png"
//                 width={75}
//                 height={75}
//                 alt='Agora logo'
//             />
//         </Link>
//         <div className={styles.buttons}>
//         {/* HOME */}
//             {/* <motion.div 
//                 className={styles.item}
//                 variants={itemVars}
//                 initial="initial"
//                 whileHover="hover">
//                 <Link href="/"><div className={styles.label} >HOME</div></Link>
//             </motion.div> */}

//         {/* ABOUT */}
//             <motion.div 
//                 className={styles.item}
//                 variants={itemVars}
//                 initial="initial"
//                 whileHover="hover">
//                 <Link href="/about"><div className={styles.label} >ABOUT</div></Link>

//             {/* MISSION */}
//                 <Link href="/about">
//                     <motion.div 
//                         className={styles.dropdown}
//                         variants={dropdownVars}>
//                     Mission</motion.div></Link>
//             {/* STAFF */}
//                 <Link href="/about/staff">
//                     <motion.div 
//                         className={styles.dropdown}
//                         variants={dropdownVars}>
//                     Staff</motion.div></Link>
//             </motion.div>

//         {/* ARCHIVE */}
//             <motion.div 
//                 className={styles.item}
//                 variants={itemVars}
//                 initial="initial"
//                 whileHover="hover">
//                 <Link href="/archive"><div className={styles.label} >ARCHIVE</div></Link>

//             {/* CURRENT ISSUE */}
//                 <Link href="/#fall-23-release">
//                     <motion.div 
//                         className={styles.dropdown}
//                         variants={dropdownVars}>
//                     Fall &apos;23</motion.div></Link>
//             {/* PAST ISSUES */}
//                 <Link href="/archive">
//                     <motion.div 
//                         className={styles.dropdown}
//                         variants={dropdownVars}>
//                     Past Issues</motion.div></Link>
//             </motion.div>

//         {/* BLOG */}
//             <motion.div 
//                 className={styles.item}
//                 variants={itemVars}
//                 initial="initial"
//                 whileHover="hover">
//                 <Link href="/blog"><div className={styles.label} >BLOG</div></Link>
//             </motion.div>

//         {/* CONTACT */}
//             <motion.div
//                 className={styles.item}
//                 variants={itemVars}
//                 initial="initial"
//                 whileHover="hover">
//                 <Link href="/contact"><div className={styles.label} >CONTACT</div></Link>
//             </motion.div>
        
//         </div>
//     </div>
// )}