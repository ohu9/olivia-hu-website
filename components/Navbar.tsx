'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { motion } from 'framer-motion';

const tabs = ['olivia hu', 'about', 'projects', 'experience', 'contact', 'resume'];
const buttons = tabs.map(tab => <button className='nav-btn'>{tab}</button>);

const Navbar = () => {
    return (
    <div className='navbar'>
        <Link href="/" className='p-4'>
            <Image
                src="/logo.jpeg"
                width={40}
                height={40}
                alt='Agora logo'
            />
        </Link>
        <a href="#top" className='home-btn'>{buttons[0]}</a>
        <div className="buttons">
            <a href="#section-about">{buttons[1]}</a>
            <a href="#section-projects">{buttons[2]}</a>
            {/* <a href="#section-experience">{buttons[3]}</a> */}
            <a href="#section-contact" >{buttons[4]}</a>
            <a href="https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing" target="_blank" className='right-btn'>{buttons[5]}</a>
        </div>
    </div>
    );
}

export default Navbar



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