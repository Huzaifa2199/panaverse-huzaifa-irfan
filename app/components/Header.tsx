import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HamBar } from './icons/HamBar'
import { Cross } from './icons/Cross'

export const Header = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <section className='fixed w-full z-10'>
      <div className='glasshead flex justify-between items-center text-white pt-6 pb-5 px-5 lg:px-24'>
        <img className='h-12 z-20' src="images/panaverse-png.png" alt="logo" />
        <ul className='flex max-lg:hidden'>
          <li className='mx-6 hover:text-[#ef666c] duration-500 hover:scale-110 cursor-pointer text-lg font-semibold'>Quarters</li>
          <li className='mx-6 hover:text-[#ef666c] duration-500 hover:scale-110 cursor-pointer text-lg font-semibold'>About</li>
          <li className='mx-6 hover:text-[#ef666c] duration-500 hover:scale-110 cursor-pointer text-lg font-semibold'>FAQ</li>
          <li className='mx-6 hover:text-[#ef666c] duration-500 hover:scale-110 cursor-pointer text-lg font-semibold'>Contact</li>
        </ul>
        <button className="max-lg:hidden bg-[#ef666c] hover:bg-[#ef666c] hover:underline px-8 w-max rounded-lg text-white font-bold py-2 inline-flex items-center">
          <span>Apply Now</span>
          <div className="mt-[2px] ml-3">
            <FaArrowRight size={"16px"} color={"#f3f4f6"}></FaArrowRight>
          </div>
        </button>
        <div className='cursor-pointer lg:hidden z-20'
          onClick={() => {
            setToggle(!toggle)
            console.log(toggle)
          }}>
          {toggle ? <HamBar /> : <Cross />}
        </div>

        {/* Overlay Menu */}
        {!toggle && (
          <div className='bg-[#120723] px-6 py-12 flex flex-col fixed h-screen top-0 left-0 w-full justify-between'>
            <div></div>
            <ul className='' >
              <li className='mb-6 text-lg font-semibold'>Quarters</li>
              <li className='mb-6 text-lg font-semibold'>About</li>
              <li className='mb-6 text-lg font-semibold'>FAQ</li>
              <li className='mb-6 text-lg font-semibold'>Contact</li>
            </ul>
            <button className="bg-[#ef666c] hover:bg-[#ef666c] hover:underline px-8 w-max h-max rounded-lg text-white font-bold py-2 inline-flex items-center">
              <span>Apply Now</span>
              <div className="mt-[2px] ml-3">
                <FaArrowRight size={"16px"} color={"#f3f4f6"}></FaArrowRight>
              </div>
            </button>
          </div>
        )}
        {/* Overlay ends */}
      </div>
    </section>
  )
}
