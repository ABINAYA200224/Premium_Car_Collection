import React from 'react'
import Car from "../../assets/Images/Car.png"
import { FuelIcon, HeartIcon, HorizontalArrow, MileageIcon, RightArrow, TransmissionIcon } from '../../assets/Icons'
import VehiclesIconsComponent from './VehiclesIconsComponent'
import Button from '../Button/Button'
import Camera from "../../assets/Images/Camera.png"


const VehiclesCard = () => {
    return (
        <div>
            <div className='w-[414px] h-[515px] flex flex-col shadow-lg shadow-[#B5B2B240] curser-pointer'>
                <div className='h-[264px] w-[414px] relative'>
                    <img src={Car} />
                    <div className='absolute left-[9.95px] top-[10px]'>
                        <div className='flex gap-[9.95px]'>
                            <Button Btn_name="Featured" btnclassname="w-[96px] h-[26px] text-sm font-normal text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                            <img src={Camera} alt="image" className='' />
                        </div>
                    </div>
                    <div className='absolute right-[9.95px] top-[10px]'>
                        <Button Btn_name="2023" btnclassname="w-[86.6px] h-[26px] text-sm font-normal text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                    </div>
                </div>
                <div className='w-[414px] h-[251px] bg-green-50 px-[19px] py-[20px] rounded-b-md'>
                    <div className='flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[10px] '>
                            <div>
                                <p className='text-[#7BBF3F] font-normal text-xl'>Sedan</p>
                            </div>

                            <div className='flex flex-col gap-[15px]'>
                                <p className='font-bold  text-xl'>BMW 3 Series Hybrid</p>
                                <p className='text-[#7BBF3F] font-bold text-[15px]'>₹50,00,000</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
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
                                    <VehiclesIconsComponent icon={<TransmissionIcon />} iconname="Transmission" icondes="Auto" />
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='w-[373.28px] h-[1px] border-[1px]'></div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex justify-between w-[374.28px] h-[24px]'>
                                    <div className='flex gap-[8px]'>
                                        <div className=''>
                                            <p className='text-[13px] font-bold'>
                                                VIEW DETAILS
                                            </p>
                                        </div>
                                        <div>
                                            <RightArrow />
                                        </div>
                                    </div>
                                    <div className='flex gap-[8px]'>
                                        <div>
                                            <HorizontalArrow fill1="#222222" fill2="#222222" />
                                        </div>
                                        <div>
                                            <HeartIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehiclesCard