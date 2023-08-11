import React from 'react'
import { HiOutlineViewGridAdd } from "react-icons/hi"
const InputSection = () => {
    return (
        <div>
            <div className='max-w-4xl bg-slate-100 mx-auto p-5'>
                <h1 className='font-bold text-[32px]'>TODO APP</h1>
                {/* Input Section starts here */}
                <div className='flex gap-x-2 flex-wrap'>
                    <input type="text" placeholder='Enter Movie Name' className='p-3 pl-5 rounded-full flex-grow-[3] focus:outline-none' />
                    <div className='flex gap-x-2 flex-grow-[1]'>
                    <input type="text" placeholder='Enter ID' className='p-3 pl-5 rounded-full flex-grow-[1] focus:outline-none' />
                    <button type='button' className='flex-grow-[1] flex items-center gap-x-2 p-3 bg-cyan-700 rounded-full'>
                        <HiOutlineViewGridAdd  className="text-xl" />
                        Add Movie
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputSection