export default function MiniProfile() {
    return <div className="flex items-center justify-between">
        <img className="h-16 rounded-full p-[2px] border mr-2" src="https://pbs.twimg.com/profile_images/378800000560032191/9b9c70b16e138e0f3a3d7e77cf5dea4a_400x400.jpeg" alt="user-img" />
        <div className="flex-1">
            <h2 className="font-bold">codewithandreyyoshua</h2>
            <h3 className="text-gray-400 text-sm">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm"> Sign Out</button>
    </div>
}