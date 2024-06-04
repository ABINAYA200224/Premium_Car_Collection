import React from 'react'
import BoyImage from "../../assets/Images/Boyimage.png"
import { LeftIcon } from '../../assets/Icons'
import { RightIcon } from '../../assets/Icons'
const ClientComponent = () => {
    return (
        <div className=''>
            <div className='w-full flex justify-center items-center '>
                <div className='w-[80%] flex'>
                    <div className='w-[40%] px-[80px] '>

                        <div className='flex justify-end items-end '>
                            <img src={BoyImage} alt="image" />
                        </div>



                    </div>
                    <div className='w-[40%]'>
                        <div className='flex flex-col gap-[40px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <p className='text-[#7BBF3F] text-xl font-bold'>OUR TESTIMONIALS</p>
                                <p className='text-[48px] font-black'>What Client's Says</p>
                                <p className='text-[18px] font-normal w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                            </div>
                            <div className='flex flex-col gap-[15px]'>
                                <p className='text-[34px] font-bold'>Prem kumar</p>
                                <p className='text-[#AAA4A4] text-[23px] font-semibold'>Designer</p>
                            </div>
                            <div className='flex justify-end items-end '>
                                <div className='flex gap-[10px] '>
                                    <LeftIcon />
                                    <RightIcon />
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClientComponent