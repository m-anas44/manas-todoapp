"use client"
import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
const MoviesList = () => {
    const [todos, setTodos] = useState([
        { movie: "Extraction", id: 1 },
        { movie: "Now You See Me", id: 2 }
    ])
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
            {
                todos.map((item: any, index: any) => {
                    return (
                            <div className='bg-cyan-700 rounded-md p-2' key={index}>
                                <div className='flex justify-between'>
                                    <span className='text-blue-100 text-lg font-bold'>{index+1}</span>
                                    <span className='text-red-500 font-bold my-auto'>
                                        <ImCross />
                                    </span>
                                </div>
                                <h2 className='text-xl mt-3 text-slate-100 font-bold'>{item.movie}</h2>
                                <p className='text-right text-white font-mono underline font-bold'>Edit</p>
                            </div>
                    )
                })
            }
                        </div>



        </div>

    )
}

export default MoviesList