import React from 'react'
import Button from '../Button/Button'
import Logo from "../../assets/Images/DreamLogo.png"
import { FaceBookIcon, IconMail, InstagramIcon, LocationIcon, WatsappICon } from '../../assets/Icons'


const FooterComponent = () => {
    return (
        <div>
            <div className=' h-[770px] w-full bg-black flex justify-center items-center'>
                <div className='w-[1184px] h-[730px] flex flex-col gap-[40px]  '>
                    <div className='flex justify-between w-full cursor-pointer'>
                        <div className=''>
                            <div className='flex gap-[15px]'>
                                <p className='text-[48px] font-black text-white '>
                                    Do you have

                                </p>
                                <p className='text-[48px] font-black text-[#7BBF3F]'>
                                    something
                                </p>
                            </div>

                            <p className='text-[48px] font-black text-white'>
                                to sell through us?
                            </p>
                        </div>
                        <div className='h-[96px] flex justify-center items-center mt-[30px]'>
                            <Button Btn_name="Sell your car today" btnclassname="w-[242px] h-[60px] text-xl font-bold text-[#FFFFFF] bg-[#7BBF3F] rounded-md" />
                        </div>
                    </div>
                    <div className=' border-[1px] border-[#323232] w-full' >

                    </div>
                    <div className='flex gap-[85px] '>
                        <div className='flex flex-col gap-[30px] cursor-pointer'>
                            <img src={Logo} alt="image" className='w-[198px] h-[30px]' />
                            <div className='w-[274px]'>
                                <p className='texty-base font-normal text-white'>
                                    Dealership has multiple locations
                                    throughout the city selling new
                                    and used cars.
                                </p>
                            </div>

                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex gap-[10px]'>
                                    <div className='mt-[5px]'>
                                        <LocationIcon />
                                    </div>
                                    <div className='w-[235px]'>
                                        <p className='text-[13px] font-normal text-white'>861, Poonamallee High Road,Kilpauk,
                                            Chennai - 600010, Tamil Nadu, India</p>
                                    </div>

                                </div>
                                <div className='flex gap-[10px]'>
                                    <div className='mt-[5px]'>
                                        <IconMail />
                                    </div>

                                    <p className='text-[13px] font-normal text-white'> Indiainfo@thetorque.in</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col gap-[24px] cursor-pointer'>
                            <p className='text-[22px] text-white font-black hover:text-[24px] hover:text-[#7BBF3F]'>
                                Quick Links
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                About Us
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Happy Customers
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Contact Us
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Pre-owner
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]' >
                                Services Located
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Dealer Located
                            </p>

                        </div>

                        <div className='flex flex-col gap-[24px] cursor-pointer'>
                            <p className='text-[22px] text-white font-black hover:text-[24px] hover:text-[#7BBF3F]'>
                                Research
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Build & Price A Vehicle
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Compare Models
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Warranty
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Download a Brochure
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]' >
                                Sign-Up for Updates
                            </p>
                            <p className='text-[18px] text-white font-bold hover:text-[18px] hover:text-[#7BBF3F]'>
                                Mail Me a Brochure
                            </p>

                        </div>
                        <div className='flex flex-col gap-[30px] cursor-pointer'>
                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex flex-col gap-[33px]'>
                                    <p className='text-[22px] text-white font-black hover:text-[24px] hover:text-[#7BBF3F]'>Newsletter</p>
                                    <p className='text-[#7F7C7C] text-[18px] font-normal'>
                                        Enter Email Address
                                    </p>
                                </div>

                                <div className='w-[315px] border-[#323232] border-[1px]'>

                                </div>
                            </div>

                            <div className='flex gap-[10px] cursor-pointer'>
                                <div className='mt-[2px]'>
                                    <div className='w-[20px] h-[20px] border-[1px] border-[#7BBF3F] rounded-full flex justify-center items-center'>
                                        <div className='w-[10px] h-[10px] bg-[#7BBF3F] rounded-full'>

                                        </div>
                                    </div>
                                </div>
                                <label className='text-[#7F7C7C] text-base font-normal'>
                                    I agree to all your terms and policies
                                </label>
                            </div>


                        </div>

                    </div>
                    <div className=' border-[1px] border-[#323232] w-full' >

                    </div>
                    <div className='flex gap-[150px] cursor-pointer'>
                        <div className="flex gap-[10px]">
                            <p className='text-base font-semibold text-white'>
                                Copyright &copy;  2024, Designed & Developed by
                            </p>
                            <p className='text-base font-semibold text-[#7BBF3F]'>
                                Trimonks
                            </p>
                        </div>
                        <div className='flex gap-[20px]'>
                            <WatsappICon />
                            <FaceBookIcon />
                            <InstagramIcon />
                        </div>
                        <div className='flex gap-[60px]'>
                            <p className='text-base font-semibold text-white'>Privacy & Policy</p>
                            <p className='text-base font-semibold text-white'>Licensing</p>
                            <p className='text-base font-semibold text-white'>Instruction
                            </p>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default FooterComponent