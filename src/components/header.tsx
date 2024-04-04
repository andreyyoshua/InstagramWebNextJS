import Image from "next/image";

export default function Header() {
    return (
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image 
                    layout="fill"
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
                    alt="instagram-logo"/>
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image 
                    layout="fill"
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                    alt="instagram-logo"/>
            </div>

            <h1>Right Sides</h1>
        </div>
    )
}