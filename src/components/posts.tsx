'use client'
import { useState } from "react"
import Post, {PostData} from "./post"

export default function Posts() {
    const [posts, setPosts] = useState<PostData[]>([
        {
            id: '1',
            username: 'codewithandrey',
            userImg: "https://pbs.twimg.com/profile_images/378800000560032191/9b9c70b16e138e0f3a3d7e77cf5dea4a_400x400.jpeg",
            img: "https://source.unsplash.com/random",
            caption: "Thanks for today"
        },
        {
            id: '2',
            username: 'yoshua',
            userImg: "https://pbs.twimg.com/profile_images/378800000560032191/9b9c70b16e138e0f3a3d7e77cf5dea4a_400x400.jpeg",
            img: "https://source.unsplash.com/random",
            caption: "Thanks for today"
        },
    ])

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}