import Image from "next/image";
import { BeakerIcon } from "@heroicons/react/16/solid";

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

            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                    <BeakerIcon className="h-5 text-gray-500"/>
                </div>
                <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-50 text-sm focus:ring-black focus:border-black rounded-md" />
            </div>

            <h1>Right Sides</h1>
        </div>
    )
}