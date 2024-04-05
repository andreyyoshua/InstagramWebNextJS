'use client'
export interface PostData {
    id: string,
    username: string,
    userImg: string,
    img: string,
    caption: string
}


export default function Post({post}: {post: PostData}) {
    return (
        <div>
            {post.username}
            <img src={post.img} alt="img-post" />
        </div>
    )
}