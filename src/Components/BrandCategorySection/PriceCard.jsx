import React from 'react'
import { AccordianArrow } from '../../assets/Icons'
import Button from '../Button/Button'

const PriceCard = () => {
    return (
        <div className='w-[1219px] h-[171px] bg-white rounded-md  '>
            <div className=' w-full h-[171px] flex gap-[20px] justify-center items-center'>
                <div className='w-[221px] h-[71px] bg-[#F8F8F8] flex justify-between items-center px-[20px] border-[#D6D6D6] border-[1px] rounded-md '>
                    <p className='text-[18px] font-normal'>Make</p>
                    <AccordianArrow />
                </div>
                <div className='w-[221px] h-[71px] bg-[#F8F8F8] flex justify-between items-center px-[20px] border-[#D6D6D6] border-[1px] rounded-md'>
                    <p className='text-[18px] font-normal'>Models</p>
                    <AccordianArrow />
                </div>
                <div>
                    <p className='text-[18px] font-normal'>
                        Price
                    </p>
                    <div className='flex  items-center'>
                        <div className='w-[13px] h-[13px] rounded-full border-[#7BBF3F] border-[1px]'>

                        </div>
                        <div className='bg-[#7BBF3F] w-[222px] h-[7px]'>

                        </div>
                        <div className='w-[13px] h-[13px] rounded-full border-[#7BBF3F] border-[1px]'>

                        </div>
                    </div>
                    <div className='w-[222px] flex justify-between'>
                        <div className='text-[18px] font-normal'>
                            ₹0
                        </div>
                        <div className='text-[18px] font-normal'>
                            ₹2500000
                        </div>
                    </div>
                </div>

                <div className='w-[221px] h-[71px] bg-[#F8F8F8] flex justify-between items-center px-[20px] border-[#D6D6D6] border-[1px] rounded-md'>
                    <p className='text-[18px] font-normal'>Body</p>
                    <AccordianArrow />
                </div>

                <Button Btn_name="17 Cars" btnclassname="w-[146px] h-[71px] text-lg font-normal text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
            </div>

        </div>
    )
}

export default PriceCard