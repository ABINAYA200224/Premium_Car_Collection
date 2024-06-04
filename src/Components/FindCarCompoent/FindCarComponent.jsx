import React from 'react'
import Roadimage from "../../assets/Images/RoadImage.png"
import { AchiveMentIcon, CustomersIcon, ShowroomIcon, StockCar } from '../../assets/Icons'
import BestcarCard from '../BestcarCard/BestcarCard'
const FindCarComponent = () => {
    return (
        <div className=' relative w-full'>
            <div className='relative'>
                <img src={Roadimage} alt="image" className='w-[100%] h-[610px]' />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className='absolute top-0  w-full'>
                <div className='flex justify-center items-center w-full'>
                    <div className='flex w-[1220px]  justify-between  py-[40px]'>
                        <div className='w-[573px] h-[136px]'>
                            <p className='text-xl font-bold text-[#7BBF3F]'>FIND YOUR CAR BY CAR BRAND</p>
                            <p className='text-[48px] font-black text-white'>Leading the best Car
                                Dealers In India
                            </p>
                        </div>
                        <div className='w-[394px]'>
                            <p className='text-base font-normal text-white'>
                                here are many variations of simply free text passages of Lorem available but the majority have suffered alteration in some form by injected hum randomized words which don't slightly.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='absolute w-full bottom-0'>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[1226px] h-[324px] bg-white bottom-0 flex justify-center items-center shadow-lg shadow-[#B5B2B240]'>
                        <div className='flex gap-[30px]'>

                            <BestcarCard bestcardicon={<ShowroomIcon imageclassname="w-[65px] h-[65px]" />} price="100" description="Vehicle In Stock Cars" parentclassnmame="gap-[35px]" />
                            <BestcarCard bestcardicon={<StockCar imageclassname="w-[71px] h-[55px]" />} price="120K" description="Satisfied Customers" parentclassnmame="gap-[48px]" />
                            <BestcarCard bestcardicon={<CustomersIcon imageclassname="w-[80px] h-[70px]" />} price="20+" description="Award Achievment" parentclassnmame="gap-[33px]" />
                            <BestcarCard bestcardicon={<AchiveMentIcon imageclassname="w-[52px] h-[63px]" />} price="10+" description="Total Showroom" parentclassnmame="gap-[48px]" />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FindCarComponent