import React from 'react'

const BestcarCard = ({ bestcardicon, price, description, imageclassname, parentclassnmame }) => {
    return (
        <div className='w-[257px] h-[236px] border-[1px] border-[#B6B6B6]  rounded-md hover:shadow-lg hover:shadow-[#B5B2B240] cursor-pointer'>
            <div className={`flex flex-col  justify-center items-center pt-[40px] ${parentclassnmame}`}>
                <div>
                    <div className={`${imageclassname}`}>
                        {bestcardicon}
                    </div>
                </div>
                <div className='w-[165px] h-[53px] justify-center items-center'>
                    <p className='font-black text-[28px] text-center '>{price}</p>
                    <p className='text-base font-normal text-center'>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default BestcarCard