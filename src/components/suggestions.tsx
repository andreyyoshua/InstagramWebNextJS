'use client'
import React, { useEffect, useState } from 'react'
const minifaker = require('minifaker')

interface Suggestion {
    username: string,
    jobTitle: string,
    id: number
}

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([])
    useEffect(() => {
        const suggestions = minifaker.array(5, (index: number) => (
            {
                username: minifaker.username({locale: 'en'}).toLowerCase(),
                jobTitle: minifaker.jobTitle(),
                id: index
            }
        ))
        console.log(suggestions)
        setSuggestions(suggestions)
    }, [])
    return (
        <div className='mt-4'>
            <div className='flex justify-between mb-5 text-sm'>
                <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
                <button className='text-gray-600 font-semibold'>See all</button>
            </div>
            {suggestions.map(suggestion => (
                <div key={suggestion.id} className='flex items-center justify-between mt-3'>
                    <img className='h-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt='user-img'/>
                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-gray-600 text-sm'>{suggestion.username}</h2>
                        <h3 className='font-semibold text-gray-400 text-sm truncate w-[230px]'>{suggestion.jobTitle}</h3>
                    </div>
                    <button className='font-semibold text-blue-400 text-sm'>Follow</button>
                </div>
            ))}
        </div>
    )
}
