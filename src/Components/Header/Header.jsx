import React from 'react'
import { DownArrow, FaceBookIcon, InstagramIcon, MailICon, PhoneIcon, WatsappICon } from '../../assets/Icons'


const Header = () => {
    return (
        <div>
            <div className='w-full h-[41px] bg-[#7BBF3F]'>
                <div className='flex justify-between px-[17.5rem]'>
                    <div className='flex gap-[30px] h-[41px] items-center'>
                        <div className='flex gap-[5px]'>
                            <div className='mt-[3px]'>
                                <PhoneIcon />
                            </div>
                            <div className='text-white text-base font-nomal'>
                                +91 9698971169
                            </div>
                        </div>
                        <div className='flex gap-[5px]'>
                            <div className='mt-[3px]'>
                                <MailICon />
                            </div>
                            <div className='text-white text-base font-nomal'>
                                info@thetorque.in
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[18px]  h-[41px] items-center'>

                        <WatsappICon />


                        <FaceBookIcon />


                        <InstagramIcon />


                    </div>

                </div>

            </div>

        </div>

    )
}

export default Header