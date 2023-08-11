import React from 'react'
import { HiOutlineViewGridAdd } from "react-icons/hi"
const InputSection = () => {
    return (
        <div>
            <h1 className='font-bold text-[32px]'>TODO APP</h1>
            {/* Input Section starts here */}
            <div className='container flex gap-2 flex-wrap mt-3'>
                <input type="text" placeholder='Enter Movie Name' className='p-3 pl-5 rounded-full flex-grow-[2] focus:outline-none' />
                <input type="text" placeholder='Enter ID' className=' p-3 pl-5 rounded-full flex-grow-[1] focus:outline-none' />
                <button type='button' className='flex-grow-[1] flex items-center gap-x-2 p-3 bg-cyan-700 rounded-full justify-center text-white'>
                    <HiOutlineViewGridAdd className="text-xl" />
                    Add Movie
                </button>
            </div>
        </div>
    )
}

export default InputSection