"use client";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function About(){
    return (
        <div className={classNames("flex flex-col w-full h-[800px] text-[#ECECE1] items-center overflow:hidden", 
            "md:flex-row md:justify-between md:my-auto md:mx-0",
        )}>

            <div className={classNames("lg:ml-[15vw] lg:mb-10 lg:self-end",
                                       "md:mx-0 md:ml-20 md:max-w-[40%] md:mt-0",
                                       "mx-20 mt-16"
            )}>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .4}}
                    className="mt-5 font-playfair lg:tracking-[.8rem] xl:text-[80pt] tracking-[.4rem] text-[60pt]">
                    ABOUT
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x:15 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .7}}
                    className="mt-7 md:mt-5 font-cormorant tracking-wide text-ellipsis overflow-scroll md:max-h-[450px] max-h-[600px]">
                    Hey there! I'm Olivia, a CS major at Georgia Tech with concentrations in AI and media technologies.
                    <br/><br/>
                    After a few years of learning and exploration I've shifted my focus towards the public-facing aspects of software development. I've perhaps romanticized the art of conveying developers' work to users via seamless UI, but I do think I've found a rather sweet spot in this versatile field, marrying my technical education and affinity for design.
                    My main strength lies in the interdisciplinary experience I bring to the table. I've entertained and explored many interests throughout my education so far &mdash; psychology, education, illustration, graphic design, writing &amp; publication, etc. &mdash; which allow me to design and implement with a more extensive and contextualized understanding of my task.
                    I also bring thoroughness: though I'm fairly detail-oriented, I find that a comprehensive understanding of the systems I'm using allows me to produce more conscientious and compatible work. That's why I chose full-stack development &mdash; there's nothing more gratifying than seeing all parts of an application work smoothly together.
                    <br/><br/>
                    Outside all these credentials, I enjoy running, reading, journaling, and playing piano/guitar. I'm an avid podcast-listener and I've been getting into pickleball &mdash; just, you know, trying to touch some grass... I also lead a small group at my campus fellowship, and I find myself most fulfilled spending time with &amp; serving others. 
                    Woa thanks for reading all this &amp; enjoy the rest of the site! :&#41;
                </motion.div>
                <div className="flex justify-end mt-16 mr-2 md:hidden">
                    <span className="w-6 h-6 bg-[#ECECE1]" /> <span className="w-6 h-6 bg-[#ECECE1] ml-4" />
                </div>
            </div>

            <motion.img 
                initial={{ opacity: 0, y:15 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: .8, delay: .3}}
                    src='/moose.png'
                    alt='moose image'
                    width='500'
                    height='900'
                    className={classNames('hidden md:block object-cover max-h-[370px] self-end overflow:hidden',
                                          'lg:object-contain lg:w-[30vw] md:mx-16 xl:mx-32 lg:max-h-full md:self-center',

                    )}/>
        </div>
    )
}