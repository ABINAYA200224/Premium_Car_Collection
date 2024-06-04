import React from 'react'


const BrandCard = ({ imageclassname, image, Name, imageParentclassname, Cardparent }) => {
    return (
        <div className='curser-pointer'>
            <div className={`w-[179px] h-[198px] rounded-md bg-[#FFF] flex flex-col justify-center items-center ${Cardparent} hover:shadow-lg hover:shadow-[#B5B2B240] `}>
                <div className={imageParentclassname}>
                    <img src={image} className={imageclassname} />
                </div>
                <div className='w-[full] h-[27px] flex justify-center items-center'>
                    <p className='text-center font-bold text-[22px]'>{Name}</p>
                </div>

            </div>
        </div>
    )
}

export default BrandCard