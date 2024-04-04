'use client'
import { useEffect, useState } from "react"
import Story from "./story"

const minifaker = require("minifaker")
const en = require("minifaker/locales/en")

interface StoryUser {
    username: string,
    img: string,
    id: number
}
export default function Stories() {
    minifaker.addLocale(en)

    const [storyUsers, setStoryUsers] = useState<StoryUser[]>([])
    useEffect(() => {
        const storyUsers = minifaker.array(20, (index: number) => ({
            username: minifaker.username({locale: "en"}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: index,

        }))
        setStoryUsers(storyUsers)
        console.log(storyUsers)
    }, [])

    return (
        <div>
            {storyUsers.map((value, index) => (
                <Story key={value.id} username={value.username} img={value.img}/>
            ))}
        </div>
    )
}