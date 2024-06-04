import React from 'react'
import UpCommingcar from "../../assets/Images/UpcommingCar.png"
import VehiclesIconsComponent from '../VehiclesCard/VehiclesIconsComponent'
import { HorizontalArrow, WhiteFuel, WhiteHeart, WhiteMilege, WhiteTransmission } from '../../assets/Icons'
const TopUpcommingcard = () => {
    return (
        <div className='w-[599px] h-[278px] flex cursor-pointer'>
            <div className='w-[238px] h-[278px]'>
                <img src={UpCommingcar} alt="image"></img>
            </div>
            <div className='bg-black w-[361px] h-[278px] flex flex-col gap-[30px] px-[30px] pt-[30px] rounded-r-md'>
                <div className='flex flex-col gap-[10px] '>
                    <div>
                        <p className='text-[#7BBF3F] font-normal text-xl'>Sedan</p>
                    </div>

                    <div>
                        <p className='font-bold text-xl text-white'>BMW 3 Series Hybrid</p>

                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex gap-[10px]'>
                        <div>
                            <VehiclesIconsComponent icon={<WhiteTransmission />} iconname="Fuel type" icondes="Hybrid" classicondes="text-white" />
                        </div>
                        <div className='w-[30px] h-[35px] flex justify-center items-center'>
                            <div className='w-[1px] h-[20px] border-[1px]'> </div>
                        </div>

                        <div>
                            <VehiclesIconsComponent icon={<WhiteFuel />} iconname="Mileage" icondes="15000 km" classicondes="text-white" />
                        </div>
                        <div className='w-[30px] h-[35px] flex justify-center items-center'>
                            <div className='w-[1px] h-[20px] border-[1px]'> </div>
                        </div>
                        <div>
                            <VehiclesIconsComponent icon={<WhiteMilege />} iconname="Transmission" icondes="Auto" classicondes="text-white" />
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <div className='w-[373.28px] h-[1px] border-[1px]'></div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-between w-[374.28px] h-[24px]'>
                            <div className='flex gap-[8px]'>
                                <div className=''>
                                    <p className='text-lg font-normal text-white'>
                                        ₹50,00,000
                                    </p>
                                </div>
                                <div className='text-[#7F8678] font-normal text-lg line-through'>
                                    ₹50,00,000
                                </div>
                            </div>
                            <div className='flex gap-[8px]'>
                                <div>
                                    <WhiteHeart />
                                </div>
                                <div>
                                    <HorizontalArrow fill1="#FFF" fill2="#FFF" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopUpcommingcard