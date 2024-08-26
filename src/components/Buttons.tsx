import Link from "next/link"
import Image from "next/image"
import classNames from "classnames"

export function LinkButton( { color, href, label }:{ color:string, href:string, label:string} ) {
    return (
        <Link 
            href={href}
            target='_blank'
            className={classNames(
                        color == 'white' ? "text-white border-white hover:bg-white hover:text-black" 
                            : "text-neutral-600 border-neutral-600 hover:bg-neutral-600 hover:text-white",
                        "border-2 rounded-2xl px-5 py-2 font-inter text-xs tracking-widest",
                        "transition-all duration-100")}>
            {label}
        </Link>
    )
}

export function SocialButton( { label, href, img }: { label:string, href:string, img:any }) {
    return (
        <Link 
            href={href}
            target='_blank'
            className={classNames(
                        "flex items-center w-52 gap-4 px-4 py-2",
                        "hover:underline",
                        // "border-2 border-[#615549] rounded-3xl",
                        "transition-all duration-100")}>
            <Image 
                src={`${img}`}
                alt={label + " image"}
                loading="lazy"
                width='50'
                height='50'
                className='inline w-6 h-6'/>
            <p className="inline font-inter tracking-[.2rem] italic">{label.toUpperCase()}</p>
        </Link>
    )
}