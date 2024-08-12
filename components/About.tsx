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
                                       "mx-20 my-24"
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
                    className="mt-10 md:mt-5 font-cormorant tracking-wide text-ellipsis overflow-scroll md:max-h-[400px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis magna a nisl convallis, vitae mattis purus commodo. Maecenas non massa ac sem ullamcorper porttitor efficitur quis metus. Mauris nec diam est. Sed eu dictum lectus. Morbi et diam ultricies, vehicula arcu id, vehicula ligula. Cras non porttitor velit, sed placerat diam. Duis commodo tellus nibh, vitae maximus tellus convallis non. Curabitur laoreet sollicitudin elit, condimentum efficitur augue venenatis et. Nunc et dolor eleifend, porttitor nunc eget, consequat ante. Nam ultrices metus id interdum sodales. Suspendisse ullamcorper aliquam iaculis.
                    <br/><br/>Curabitur sit amet lacus nec orci blandit elementum. Curabitur efficitur, nunc a semper venenatis, nulla sem consequat lacus, vel bibendum arcu ex et mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id quam ac urna gravida hendrerit. Etiam imperdiet condimentum dolor vel efficitur. Mauris vitae ipsum non sem fermentum mattis. Duis porta neque ut magna vestibulum porta. Nullam quis finibus tortor. In ligula urna, consequat quis blandit ac, accumsan eu sem.
                </motion.div>
                <div className="flex flex-col gap-2 md:mt-12">
                
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