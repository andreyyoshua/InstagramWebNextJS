export default function Story({username, img}: {username: string, img: string}) {
    return (
        <div>
            <img src={img} alt={username}/>
            <p>{username}</p>
            
        </div>
    )
}