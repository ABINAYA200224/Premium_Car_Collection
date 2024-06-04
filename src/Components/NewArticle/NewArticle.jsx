import React from 'react'
import LatestCar from "../../assets/Images/LatestCar.png"
import { CommentIcon, ReadMorearrow } from '../../assets/Icons'
import Userimage from "../../assets/Images/Userimage.png"

const NewArticle = () => {
    return (
        <div className='w-[392px] h-[490px] bg-white shadow-lg shadow-[#B5B2B240] hover:shadow-xl hover:shadow-[#B5B2B240]    rounded-md'>
            <div className='  w-[392px] cursor-pointer'>
                <img src={LatestCar} alt="image" />
            </div>
            <div className='h-[260px] w-[392px] px-[19px] py-[19px]'>
                < div className='flex  flex-col gap-[20px]'>

                    <div className='flex gap-[31px]'>
                        <div className='flex gap-[10px]'>
                            <div className='w-[36px] h-[36px] justify-center' >
                                <img src={Userimage} alt="image" />
                            </div>
                            <div className='text-md font-normal  h-[36px] justify-center mt-[3px]'>
                                Mehedii .H
                            </div>

                        </div>
                        <div className='flex gap-[5px]'>
                            <div>
                                <CommentIcon />
                            </div>
                            <div className='text-md font-normal'>
                                2 Comments
                            </div>

                        </div>
                    </div>

                    <div className='text-lg font-bold'>
                        <p>EVERY NEW CAR REVEALED AT LA
                            AUTO SHOW 2023</p>
                    </div>
                    <div className='text-md font-normal'>
                        <p>He whimsically named Egg Canvas is the</p>
                    </div>


                    <div className='w-[352px] h-[44px] border-[1px]  rounded-md flex justify-between items-center px-[20px] py-[16px] border-[#D9D9D9] bg-[#F8F8F8]'>



                        <div className='text-lg font-normal'>
                            Read more
                        </div>
                        <div className='relative flex'>
                            <ReadMorearrow />
                            <div className='w-[24px] h-[24px] rounded-full border-[1px] absolute border-black right-[-6px]'>

                            </div>



                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}

export default NewArticle