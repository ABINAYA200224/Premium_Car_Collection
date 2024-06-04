import React from 'react'

const RadioButton = () => {
    return (
        <div className='w-full flex justify-center items-center gap-2 cursor-pointer'>
            <div className='w-[20px] h-[20px] border-[1px] border-[#7BBF3F] rounded-full flex justify-center items-center'>
                <div className='w-[10px] h-[10px] bg-[#7BBF3F] rounded-full'>

                </div>
            </div>
            <div className='w-[20px] h-[20px]  hover:border-[#7BBF3F]  hover:border-[1px] rounded-full flex justify-center items-center'>
                <div className='w-[10px] h-[10px] hover:bg-[#7BBF3F] rounded-full bg-[#CCCCCC]'>

                </div>
            </div>
        </div>
    )
}

export default RadioButton