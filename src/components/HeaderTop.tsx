import React from 'react'
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram,FaLinkedin } from "react-icons/fa";


const HeaderTop = () => {
  return (
    <>
    
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className='container py-4'>
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:flex gap-1'>
                        <div className='bg-gray-200 rounded-md p-[6px] text-[14px]  cursor-pointer hover:bg-accent hover:text-white'>
                        <BsFacebook />
                        </div>
                        <div className='bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-rose-300 hover:text-white'>
                        <BsTwitter />
                        </div>
                        <div className='header_top_icon_wrapper'>
                        <FaInstagram />
                        </div>
                        <div className='header_top_icon_wrapper'>
                        <FaLinkedin />
                        </div>
                    </div>

                    <div className='text-gray-500 text-[12px] uppercase'>
                       <b>free shipping</b> this week order over - $55
                    </div>

                    <div className='flex gap-4'>
                        <select 
                        className='text-gray-600 hover:bg-gray-400 focus:outline-none hover:text-white text-[12px] w-[70px]'
                        name='currency'
                        id='currency'
                        >
                            <option value="USD $">USD $</option>
                            <option>EUR </option>
                            <option>INR</option>
                        </select>

                        <select className='text-gray-500 hover:bg-gray-400 hover:text-white focus:outline-none text-[12px] w-[80px]'
                        name='language'
                        id='language'
                        >
                            <option>English</option>
                            <option>French</option>
                        </select>
                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default HeaderTop