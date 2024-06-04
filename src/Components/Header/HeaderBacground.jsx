import React from 'react'
import Backgroundimg from "../../assets/Images/Backgroundimg.png"
import BgCar from "../../assets/Images/BgCar.png"
import Button from '../Button/Button'
import { DownArrow } from '../../assets/Icons'
import DreamLogo from "../../assets/Images/DreamLogo.png"
import PriceCard from '../BrandCategorySection/PriceCard'

const HeaderBacground = () => {
    return (
        <div className='relative'>
            <div className='relative'>
                <img src={Backgroundimg} allt="image" width="100%" className='h-[812px] opacity-200' />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className='absolute w-[50%] right-[10rem] top-[20rem]'>
                <div className='w-full flex justify-end items-end '>
                    <img src={BgCar} alt="image" />
                </div>

            </div>

            <div className='absolute left-[10rem] top-[10rem] w-[50%]  '>
                <div className='flex flex-col gap-[20px] w-full '>
                    <div>
                        <p className='text-[20px] font-normal text-white'>TRUSTED CAR DEALER SERVICE</p>
                    </div>

                    <div className='text-[80px] text-white font-black w-[621px] '>
                        PREMIUM CAR
                        COLLECTION
                    </div>
                    <div className='flex flex-col gap-[70px]'>
                        <div className='w-[462px] h-[48px]'>
                            <p className='text-[20px] font-normal text-white'>Car dealerships may sell new cars from one or
                                several manufacturers, as well as used cars.
                            </p>
                        </div>
                        <div>
                            <Button Btn_name="GO TO LISTING" btnclassname="w-[163px] h-[60px] text-base font-bold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                        </div>
                    </div>


                </div>


            </div>
            <div className='absolute top-0 w-full'>
                <div className='w-full flex justify-center items-center '>
                    <div className='w-[1360px] h-[94px] bg-black flex rounded-b-xl '>
                        <div className='flex justify-between gap-[20rem] px-[30px]'>
                            <div className='flex gap-[64px] items-center'>
                                <div>
                                    <img src={DreamLogo} alt="image" />
                                </div>
                                <div>
                                    <div className='h-[48px] border-[1px] w-[1px] border-[#5D5B5B]'></div>
                                </div>
                            </div>
                            <div className='flex gap-[5rem] '>
                                <div className='flex  items-center'>
                                    <p className='text-white text-base font-normal hover:font-bold hover:text-[#7BBF3F] hover:underline decoration[#7BBF3F] '>Home</p>
                                </div>

                                <div className='flex gap-[10px]'>
                                    <div className='flex  items-center'>
                                        <p className='text-white text-base font-normal hover:font-bold hover:text-[#7BBF3F] hover:underline decoration[#7BBF3F]'>Car Listing</p>
                                    </div>

                                    <div className='flex  items-center mt-[5px]'>
                                        <DownArrow />
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <div className='flex  items-center'>
                                        <p className='text-white text-base font-normal hover:font-bold hover:text-[#7BBF3F] hover:underline decoration[#7BBF3F]'>Buy Car</p>
                                    </div>

                                    <div className='flex  items-center mt-[5px]'>
                                        <DownArrow />
                                    </div>

                                </div>
                                <div className='flex  items-center'>
                                    <p className='text-white text-base font-normal hover:font-bold hover:text-[#7BBF3F] hover:underline decoration[#7BBF3F]'>Contact us</p>
                                </div>
                                <div className='flex  items-center'>
                                    <p className='text-white text-base font-normal hover:font-bold hover:text-[#7BBF3F] hover:underline decoration[#7BBF3F]'>Blog</p>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>

            </div>
            <div className='absolute bottom-[-85px]  w-full'>
                <div className=' w-full flex justify-center items-center'>
                    <PriceCard />
                </div>

            </div>

        </div>
    )
}

export default HeaderBacground