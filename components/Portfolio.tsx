"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <div className="w-3/4 mt-12 mx-auto md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-7 space-y-5 md:space-y-0">
            {items.map((item,i) => 
                <motion.div key={item.name} className="h-[32rem] bg-[#d1f0d6]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .5+(.2*i)}}>
                    {item.img ? 
                    <Image 
                        src={item.img}
                        alt={item.name + ' image'}
                        width='800'
                        height='800'
                        className='h-[90%] object-cover'/>
                    :
                    <div className="bg-neutral-200 "/>
                    }
                    <p className="mt-2 font-inter">{item.name}</p>
                    
                </motion.div>
            )}
        </div>
    )
}