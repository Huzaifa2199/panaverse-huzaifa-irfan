import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HamBar } from './icons/HamBar'
import { Cross } from './icons/Cross'
import Link from 'next/link'

export const Header = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <section className='fixed w-full z-10'>
      <div className='glasshead flex justify-between items-center text-white pt-6 pb-5 px-5 lg:px-24'>
        <a href={"/"}>
          <img className='h-12 z-20' src="images/panaverse-png.png" alt="logo" />
        </a>
        <ul className='flex max-lg:hidden'>
          <a href="#quarters">
            <li className='mx-7 duration-500 hover:scale-y-110 hover:scale-x-125 cursor-pointer text-lg font-semibold'>Quarters</li>
          </a>

          <a href="#about">
            <li className='mx-7 duration-500 hover:scale-y-110 hover:scale-x-125 cursor-pointer text-lg font-semibold'>About Us</li>
          </a>

          <a href="#faq">
            <li className='mx-7 duration-500 hover:scale-y-110 hover:scale-x-125 cursor-pointer text-lg font-semibold'>FAQ</li>
          </a>

          <a href="#contact">
            <li className='mx-7 duration-500 hover:scale-y-110 hover:scale-x-125 cursor-pointer text-lg font-semibold'>Contact Us</li>
          </a>
        </ul>

        <Link href={"https://www.piaic.org/"} target='_blank'>
          <button className="max-lg:hidden bg-[#ef666c] hover:bg-[#ef666c] hover:scale-110 duration-300 px-11 w-max rounded-lg text-white font-bold py-[10px] inline-flex items-center">
            <span>Apply Now</span>
          </button>
        </Link>

        <div className='cursor-pointer lg:hidden z-20'
          onClick={() => {
            setToggle(!toggle)
            console.log(toggle)
          }}>
          {toggle ? <HamBar /> : <Cross />}
        </div>

        {/* Overlay Menu */}
        {!toggle && (
          <div className='bg-[#120723] px-6 py-16 flex flex-col fixed h-screen top-0 left-0 w-full justify-center'>
            <div></div>
            <ul className='' >
              <a href="#quarters" onClick={() => { setToggle(!toggle) }}>
                <li className='mb-6 text-lg font-semibold'>Quarters</li>
              </a>
              <a href="#about" onClick={() => { setToggle(!toggle) }}>
                <li className='mb-6 text-lg font-semibold'>About Us</li>
              </a>
              <a href="#faq" onClick={() => { setToggle(!toggle) }}>
                <li className='mb-6 text-lg font-semibold'>FAQ</li>
              </a>
              <a href="#contact" onClick={() => { setToggle(!toggle) }}>
                <li className='mb-6 text-lg font-semibold'>Contact Us</li>
              </a>
            </ul>
            <Link href={"https://www.piaic.org/"} target='_blank'>
              <button className="bg-[#ef666c] hover:bg-[#ef666c] hover:underline px-11 w-max h-max rounded-lg text-white font-bold py-[10px] inline-flex items-center">
                <span>Apply Now</span>
              </button>
            </Link>
          </div>
        )}
        {/* Overlay ends */}
      </div>
    </section>
  )
}
