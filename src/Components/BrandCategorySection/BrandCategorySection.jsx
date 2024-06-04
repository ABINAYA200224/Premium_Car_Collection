import React from 'react'
import BrandCard from "../BrandCard/BrandCard"
import Mercedes from "../../assets/Images/Mercedes.png"
import Audi from "../../assets/Images/Audi.png"
import Bentley from "../../assets/Images/Bentley.png"
import Ferrari from "../../assets/Images/Ferrai.png"
import Hyundai from "../../assets/Images/Hyundai.png"
import Nissan from "../../assets/Images/Nissan.png"
import Button from '../Button/Button'
const BrandCategorySection = () => {
    return (
        <div className='w-full h-[710px] bg-[#F2F2FB]'>
            <div className=''>
                <div className='flex flex-col gap-[60px] justify-center items-center'>
                    <div className=' mt-[160px] m-auto'>
                        <div className='text-xl font-bold text-[#7BBF3F] text-center'>
                            BRAND CATEGORY
                        </div>
                        <div className='text-[48px] font-black text-center '>
                            Browse By Makes
                        </div>
                    </div>

                    <div className='flex gap-[30px]'>
                        <BrandCard image={Mercedes} Name="Marcedes" imageParentclassname="" Cardparent="gap-[25px]" />
                        <BrandCard image={Audi} Name="Audi" imageclassname="" imageParentclassname="w-[116px] h-[116px]" Cardparent="gap-[13px]" />
                        <BrandCard image={Bentley} Name="Bentley" imageParentclassname="w-[136px] h-[98px]" Cardparent="gap-[22px]" />
                        <BrandCard image={Ferrari} Name="Ferrari" imageParentclassname="w-[92px] h-[92px]" Cardparent="gap-[25px]" />
                        <BrandCard image={Nissan} Name="Ferrari" imageParentclassname="w-[133px] h-[101px]" Cardparent="gap-[20px]" />
                        <BrandCard image={Hyundai} Name="Hyundai" imageParentclassname="w-[112px] h-[112px]" Cardparent="gap-[15px]" />


                    </div>

                    <div>
                        <Button Btn_name="ADD YOUR LISTING" btnclassname="w-[200px] h-[60px] text-base font-extrabold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BrandCategorySection