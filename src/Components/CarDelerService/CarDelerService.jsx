import React from 'react'
import Drackter from "../../assets/Images/Drackder.png"
import Button from '../Button/Button'
import { TickIconGreen, TickIconWhite } from '../../assets/Icons'
const CarDelerService = () => {
    return (
        <div className='h-[701px] bg-[#F2F5FB] w-full flex justify-center items-center' >,
            <div className='flex h-[701px] w-full justify-center items-center  '>
                <div className='w-[50%] h-[701px] flex justify-end '>
                    <div className='flex flex-col gap-[40px] w-[72%] mt-[60px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-xl font-bold text-[#7BBF3F]'>
                                TRUSTED CAR DELAER SERVICE
                            </p>
                            <p className='text-[48px] font-black'>
                                Frequently Questions & Asking Zone..
                            </p>
                            <p className='tet-base font-normal'>
                                For 15 years, we raising the standard of used car retailing with we raising the standard of used car ret one of the most innovative and reliable
                            </p>
                        </div>

                        <div className='flex flex-col gap-[20px] '>
                            <div className='flex gap-[15px]'>
                                <div className='w-[25px] h-[25px] rounded-full border-[1px] border-[#7BBF3F] flex justify-center items-center'>
                                    <TickIconGreen />
                                </div>
                                <label className='text-[18px] font-extrabold'>We are the best car provider agency with great service</label>
                            </div>
                            <div className='flex gap-[15px]'>
                                <div className='w-[25px] h-[25px] rounded-full border-[1px] border-[#7BBF3F] flex justify-center items-center  bg-[#7BBF3F]'>
                                    <TickIconWhite />
                                </div>
                                <label className='text-[18px] font-extrabold'>Get Best Super servicing for car & Rental Service</label>
                            </div>
                            <div className='flex gap-[15px]'>
                                <div className='w-[25px] h-[25px] rounded-full border-[1px] border-[#7BBF3F] flex justify-center items-center '>
                                    <TickIconGreen />
                                </div>
                                <label className='text-[18px] font-extrabold'>Expert Mechanic for fixings and servicing car & rental</label>
                            </div>


                        </div>
                        <div>
                            <Button Btn_name="Get started" btnclassname="w-[231px] h-[60px] text-xl font-bold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                        </div>
                    </div>


                </div>
                <div className='w-[50%] flex justify-center items-center h-[701px]'>
                    <div className='h-[701px]'>
                        <img src={Drackter} alt="image" className='' />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CarDelerService