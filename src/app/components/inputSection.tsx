"use client";
import React, { useState } from 'react'
import { HiOutlineViewGridAdd } from "react-icons/hi"
import { ImCross } from 'react-icons/im';
const InputSection = () => {

    const [inputVal, setInputVal] = useState("");
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState([
        { movie: "Extraction", id: 1 },
        { movie: "Now You See Me", id: 2 }
    ])

    const addItem = () => {
        let obj: any = todos.find(item => item.id == id)
        if (obj) {
            let newArray = todos.filter(item => item.id !== obj.id)
            setTodos([...newArray, { movie: inputVal, id: id }])
            setInputVal("")
            setId(0)
            return
        }
        setTodos([...todos, { movie: inputVal, id: id }])
        setInputVal("")
        setId(0)
    }

    const editItem = (id: any) => {
        let obj: any = todos.find(item => item.id == id)
        setInputVal(obj.movie)
        setId(obj.id)
    }

    const delItem = (id: any) => {
        let delArray = todos.filter(item => item.id !== id)
        console.log(delArray)
        setTodos([...delArray])
    }
    return (
        <div>
            <h1 className='font-bold text-[32px]'>TODO APP</h1>
            {/* Input Section starts here */}
            <div className='container flex gap-2 flex-wrap mt-3'>
                <input type="text"
                    value={inputVal}
                    placeholder='Enter Movie Name'
                    onChange={(e) => setInputVal(e.target.value)}
                    className='p-3 pl-5 rounded-full flex-grow-[2] focus:outline-none' />
                <input type="number"
                    placeholder='Enter ID'
                    value={id}
                    onChange={(e: any) => setId(e.target.value)}
                    className=' p-3 pl-5 rounded-full flex-grow-[1] focus:outline-none' />
                <button type='button'
                    onClick={addItem}
                    className='flex-grow-[1] flex items-center gap-x-2 p-3 bg-cyan-700 rounded-full justify-center text-white'>
                    <HiOutlineViewGridAdd className="text-xl" />
                    Add Movie
                </button>
            </div>

            {/* Movies list shows here */}
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                {
                    todos.map((item: any, index: any) => {
                        return (
                            <div className='bg-cyan-700 rounded-md p-2' key={index}>
                                <div className='flex justify-between'>
                                    <span className='text-blue-100 text-lg font-bold'>{index + 1}</span>
                                    <span
                                        onClick={() => { delItem(item.id) }}
                                        className='text-red-500 font-bold my-auto cursor-pointer'>
                                        <ImCross />
                                    </span>
                                </div>
                                <h2 className='text-xl mt-3 text-slate-100 font-bold'>{item.movie}</h2>
                                <p
                                    onClick={() => { editItem(item.id) }}
                                    className='text-right text-white font-mono cursor-pointer underline font-bold'>
                                    Edit
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>



    )
}

export default InputSection