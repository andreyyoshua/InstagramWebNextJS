import { BanknotesIcon, TvIcon, CogIcon, EyeIcon, KeyIcon } from '@heroicons/react/20/solid'
export interface PostData {
    id: string,
    username: string,
    userImg: string,
    img: string,
    caption: string
}


export default function Post({post}: {post: PostData}) {
    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* Post Headers */}
            <div className="flex items-center p-5">
                <img src={post.userImg} alt="user-img" className="h-12 rounded-full object-cover border p-1 mr-3" />
                <p className="font-bold flex-1">{post.username}</p>
                <BanknotesIcon className='h-5'/>
            </div>

            {/* Post Images */}
            <img src={post.img} alt="img-post" className='object-cover w-full' />
            
            {/* Post Buttons */}
            <div className='flex justify-between px-4 mt-4'>
                <div className='flex space-x-4'>
                    <TvIcon className='btn'/>
                    <CogIcon className='btn'/>
                </div>
                <EyeIcon className='btn' />
            </div>

            {/* Post Caption */}
            <p className='p-5 truncate'><span className='font-bold mr-2'>{post.username}</span>{post.caption}</p>

            {/* Post Input Box */}
            <form action="" className='flex items-center p-4'>
                <KeyIcon className='h-7'/>
                <input className='border-none flex-1 focus:ring-0' type='text' placeholder='Enter your comment...'/>
                <button className='text-blue-400 font-bold'>Post</button>
            </form>
        </div>
    )
}