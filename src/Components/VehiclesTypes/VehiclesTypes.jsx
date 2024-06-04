import React from 'react'
import Button from '../Button/Button';
import Car1 from "../../assets/Images/Car1.png"
import Car2 from "../../assets/Images/Car2.png"
import Car3 from "../../assets/Images/Car3.png"
import Car4 from "../../assets/Images/Car4.png"
import Car5 from "../../assets/Images/Car5.png"
import Car6 from "../../assets/Images/Car6.png"

const VehiclesTypes = () => {
    return (
        <div className='h-[622px] w-full bg-black flex justify-center items-center '>
            <div className='w-[1300px] h-[422px] '>
                <div className='w-full flex justify-center items-center gap-[40px]'>
                    <div className='w-[50%] flex flex-col justify-center items-center gap-[30px]'>\
                        <div>
                            <div className='text-xl text-[#7BBF3F] font-bold'>
                                TYPES OF VEHICLE
                            </div>
                            <div className='font-black text-[48px] text-white'>
                                Browse By Body
                            </div>
                        </div>

                        <div className='flex flex-col gap-[40px] pl-[106px] mb-[60px]'>
                            <div className='text-xl font-normal text-white'>


                                Car servicing is the regular maintenance and
                                inspection of a vehicle to ensure that it is
                                operating safely and efficiently.
                            </div>
                            <div>
                                <Button Btn_name="ADD YOUR LISTING" btnclassname="w-[200px] h-[60px] text-base font-extrabold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                            </div>
                        </div>


                    </div>
                    <div className='w-[50%] rounded-md'>
                        <div className='w-[711px] h-[422px] bg-white rounded-md'>
                            <table className=' w-full height-[422px] rounded-md'>
                                <tr className='border-[#D9D9D9] border-[1px]  '>
                                    <th className=' border-[1px] border-[#D9D9D9] py-[49px] px-[20px]'>
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car1} alt="image" className='w-[162px] h-[68px]'></img>
                                            <div>
                                                Hatchback
                                            </div>
                                        </div>

                                    </th>
                                    <th className=' border-[1px] border-[#D9D9D9]'>
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car2} alt="image" className='w-[172px] h-[72px]'></img>
                                            <div>
                                                Compact
                                            </div>
                                        </div>
                                    </th>
                                    <th className=' border-[1px] border-[#D9D9D9]'>
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car3} alt="image" className='w-[180px] h-[78px]'></img>
                                            <div>
                                                Convertible
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr className='border-[#D9D9D9] border-[1px] rounded-md'>
                                    <th className=' border-[1px] border-[#D9D9D9]  py-[49px] px-[20px]' >
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car4} alt="image" className='w-[168px] h-[68px]'></img>
                                            <div>
                                                Crossover
                                            </div>
                                        </div>
                                    </th>
                                    <th className=' border-[1px] border-[#D9D9D9]'>
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car5} alt="image" className='w-[182px] h-[72px] '></img>
                                            <div>
                                                Sedan
                                            </div>
                                        </div>
                                    </th>
                                    <th className=' border-[1px] border-[#D9D9D9]'>
                                        <div className='flex flex-col gap-[19px] w-full justify-center items-center'>
                                            <img src={Car6} alt="image" className='w-[172px] h-[68px]'></img>
                                            <div>
                                                SUV
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>


            </div>

        </div >
    )
}

export default VehiclesTypes; 