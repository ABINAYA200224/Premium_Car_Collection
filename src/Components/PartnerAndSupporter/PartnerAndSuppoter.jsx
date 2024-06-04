import React from 'react'
import BrandCard from '../BrandCard/BrandCard'
import Mercedes from "../../assets/Images/Mercedes.png"
import Audi from "../../assets/Images/Audi.png"
import Bentley from "../../assets/Images/Bentley.png"
import Ferrari from "../../assets/Images/Ferrai.png"
import Nissan from "../../assets/Images/Nissan.png"
import Hyundai from "../../assets/Images/Hyundai.png"
import Button from '../Button/Button'
import TopUpcommingcard from '../TopupcommingCard/TopUpcommingcard'
import RadioButton from '../RadioButton/RadioButton'

const PartnerAndSuppoter = () => {
    return (
        <>
            <div className='flex flex-col gap-[50px]  '>

                <div className='text-center text-xl font-extrabold'>
                    OUR PARTNERS & SUPPORTERS
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[1182px] h-[176px]'>
                        <div className='flex gap-[100px] justify-center items-center'>
                            <BrandCard image={Mercedes} imageParentclassname="" Cardparent="gap-[25px]" />
                            <BrandCard image={Audi} imageclassname="" imageParentclassname="w-[116px] h-[116px]" Cardparent="gap-[13px]" />
                            <BrandCard image={Bentley} imageParentclassname="w-[136px] h-[98px]" Cardparent="gap-[22px]" />
                            <BrandCard image={Ferrari} imageParentclassname="w-[92px] h-[92px]" Cardparent="gap-[25px]" />
                            <BrandCard image={Nissan} imageParentclassname="w-[133px] h-[101px]" Cardparent="gap-[20px]" />
                            <BrandCard image={Hyundai} imageParentclassname="w-[112px] h-[112px]" Cardparent="gap-[15px]" />
                        </div>

                    </div>
                </div>

            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-[1290px] h-[482px] flex flex-col gap-[60px]'>
                    <div className='flex justify-between'>
                        <div>
                            <div className='text-xl font-bold text-[#7BBF3F]'>
                                TOP UPCOMING CAR
                            </div>
                            <div className='text-[48px] font-black'>
                                Explore All Vehicles
                            </div>
                        </div>
                        <div className='flex gap-[11px] mt-[20px]'>
                            <Button Btn_name="All Cars" btnclassname="w-[123px] h-[44px] text-base font-extrabold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                            <Button Btn_name="Audi" btnclassname="w-[123px] h-[44px] text-base font-extrabold hover:text-[#FFFFFF] hover:bg-[#7BBF3F] border-[1px] hover:border-none border-[#CACACA] rounded-md" />
                            <Button Btn_name="Mercedes" btnclassname="w-[123px] h-[44px] text-base font-extrabold hover:text-[#FFFFFF] hover:bg-[#7BBF3F] border-[1px] border-[#CACACA] hover:border-none rounded-md" />
                        </div>

                    </div>
                    <div className='flex gap-[90px]'>
                        <TopUpcommingcard />
                        <TopUpcommingcard />
                    </div>


                </div>
                <RadioButton />
            </div>

        </>

    )
}

export default PartnerAndSuppoter