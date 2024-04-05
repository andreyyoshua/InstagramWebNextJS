import { BanknotesIcon, TvIcon, CogIcon, EyeIcon } from '@heroicons/react/20/solid'
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
            <div className="flex items-center p-5">
                <img src={post.userImg} alt="user-img" className="h-12 rounded-full object-cover border p-1 mr-3" />
                <p className="font-bold flex-1">{post.username}</p>
                <BanknotesIcon className='h-5'/>
            </div>
            <img src={post.img} alt="img-post" className='object-cover w-full' />
            
            <div className='flex justify-between px-4'>
                <div className='flex space-x-4'>
                    <TvIcon className='btn'/>
                    <CogIcon className='btn'/>
                </div>
                <EyeIcon className='btn' />
            </div>
            <p>{post.caption}</p>
        </div>
    )
}