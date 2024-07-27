import Image from "next/image"
import Link from "next/link"

const buttons = [
    {
        name: 'email',
        href: 'mailto:oliviahu@gatech.edu',
        img: '/email.png',
    },
    {
        name: 'github',
        href: 'https://github.com/ohu9',
        img: '/github.png',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/oliviahhu/',
        img: '/linked-in.png',
    },
]

export default function Sidebar() {
    return (
        <div className="flex flex-col mt-10 ml-8 gap-7 absolute z-10">
            {
                buttons.map(item =>
                    <Link href={item.href} target="_blank">
                        <Image
                            src={item.img}
                            alt={item.name}
                            width='400'
                            height='400'
                            className="w-8 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
                        />
                    </Link>
                )
            }
        </div>
    )
}
