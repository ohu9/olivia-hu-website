import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col justify-start p-32 min-h-full font-cormorant">
            <h1 className="text-4xl">Hi there!</h1>
            <p className="pt-10 text-base">Unfortunately, we could not find the page you were looking for.</p>
            <Link href="/">
                <div className="text-base p-2 my-8 w-36 text-center border-neutral-300 border-2 rounded-full hover:bg-neutral-300 hover:text-black transition-all duration-200 hover:tracking-wider">return home</div>
            </Link>
        </div>
)}
