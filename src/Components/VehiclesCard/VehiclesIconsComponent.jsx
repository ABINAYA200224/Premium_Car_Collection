import React from 'react'



const VehiclesIconsComponent = ({ icon, iconname, icondes, classicondes }) => {
    return (
        <div className='cursor-pointer '>
            <div className='w-[76.91px] h-[35px] flex gap-[4.98px]  '>
                <div className='flex justify-center mt-[1px]'>
                    {icon}

                </div>
                <div className='w-[58px] flex flex-col gap-[2px] justify-center '>
                    <p className='text-[#868080] text-[13px] font-normal'>
                        {iconname}

                    </p>
                    <p className={`text-[13px] font-normal ${classicondes}`}>
                        {icondes}


                    </p>
                </div>


            </div>
        </div>

    )
}

export default VehiclesIconsComponent