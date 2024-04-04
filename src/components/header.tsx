import Image from "next/image";
import { BeakerIcon, PlusCircleIcon, HomeIcon } from "@heroicons/react/16/solid";

export default function Header() {
    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image 
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="object-contain w-full h-full"
                        priority={true}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
                        alt="instagram-logo"/>
                </div>
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Image 
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="object-contain w-full h-full"
                        priority={false}
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                        alt="instagram-logo"/>
                </div>

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <BeakerIcon className="h-5 text-gray-500"/>
                    </div>
                    <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-50 text-sm focus:ring-black focus:border-black rounded-md" />
                </div>


                <div className="flex space-x-4 items-center">
                    <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
                    <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
                    <img alt="user-image" className="h-10 rounded-full cursor-pointer" src="https://pbs.twimg.com/profile_images/378800000560032191/9b9c70b16e138e0f3a3d7e77cf5dea4a_400x400.jpeg"/>
                </div>
            </div>
        </div>
    )
}