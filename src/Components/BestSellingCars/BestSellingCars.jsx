import React from 'react'
import CarShadow from "../../assets/Images/CarShadow.png"
import BestSellCar from "../../assets/Images/BestSellCar.png"
import Button from '../Button/Button'
import VehiclesIconsComponent from '../VehiclesCard/VehiclesIconsComponent'
import { FuelIcon, MileageIcon, TransmissionIcon } from '../../assets/Icons'

const BestSellingCars = () => {
    return (
        <div className=' flex flex-col gap-[100px] '>
            <div>
                <div className='text-xl font-bold text-center text-[#7BBF3F] cursor-pointer'>
                    RECENT LAUNCHED CAR
                </div>
                <h2 className='text-[48px] font-black text-center cursor-pointer'>
                    Best Selling Cars
                </h2>
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='flex justify-between w-[1290px]'>
                    <div className='mt-[50px]'>
                        <div className='relative w-[528px] h-[486px] cursor-pointer'>
                            < img src={CarShadow} alt="image" />

                            <div className='absolute top-0 w-[684px] h-[371px] cursor-pointer'>
                                <img src={BestSellCar} alt="image" className='w-[684px] h-[371px]' />
                            </div>
                        </div>
                    </div>

                    <div className='w-[455px] h-[587px]  shadow-lg shadow-[#B5B2B240] '>
                        <div className='p-[30px]'>
                            <div className='flex justify-end items-end cursor-pointer '>
                                <Button Btn_name="Featured" btnclassname="w-[119.44px] h-[32.16px] text-base font-normal text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                            </div>
                            <div className='flex flex-col gap-[40px] cursor-pointer'>
                                <div className='flex flex-col gap-[56px]'>
                                    <div className='flex flex-col  gap-[17px]'>
                                        <p className='text-base font-normal text-[#7BBF3F]'>SUV</p>
                                        <p className='text-xl font-bold '>Lexus RX 2023  350 F Sport</p>
                                        <p className='text-[14px] font-normal'>As for the 2023 RX, the styling remains
                                            controversial. However, compared to the outgoing
                                            model, Lexus tones it down inside and out. More...</p>
                                        <div className='flex gap-[10px]'>
                                            <p className='font-black text-xl text-[#7BBF3F]'>₹50,00,000</p>
                                            <p className='text-[#7F8678] text-[15px] font-normal mt-[4px] line-through'>₹50,00,000</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-[30px] cursor-pointer'>
                                        <div className='flex gap-[10px]'>
                                            <div>
                                                <VehiclesIconsComponent icon={< FuelIcon />} iconname="Fuel type" icondes="Hybrid" />
                                            </div>
                                            <div className='w-[30px] h-[35px] flex justify-center items-center'>
                                                <div className='w-[1px] h-[20px] border-[1px]'> </div>
                                            </div>

                                            <div>
                                                <VehiclesIconsComponent icon={<MileageIcon />} iconname="Mileage" icondes="15000 km" />
                                            </div>
                                            <div className='w-[30px] h-[35px] flex justify-center items-center'>
                                                <div className='w-[1px] h-[20px] border-[1px]'> </div>
                                            </div>
                                            <div>
                                                <VehiclesIconsComponent icon={< TransmissionIcon />} iconname="Transmission" icondes="Auto" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center '>
                                            <div className='w-[373.28px] h-[1px] border-[1px]'></div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <Button Btn_name="Buy now" btnclassname="w-[231px] h-[60px] text-xl font-normal text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BestSellingCars;