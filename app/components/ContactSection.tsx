import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ContactSection() {
    return (
        <div className='lg:pt-16 pt-10 pb-20 px-5 lg:px-24' id='contact'>
            <div className='flex flex-col lg:flex-row justify-between max-lg:flex-col-reverse'>

                {/* column 1 */}
                <div className="glassmorphtwo flex flex-col px-6 py-10 lg:px-11 justify-center lg:w-1/2 text-white">
                    <form>
                        <div className='mb-7'>
                            <input
                                className='py-[10px] w-full bg-transparent border-b-2 border-white border-opacity-70 focus:border-b-[3px] rounded-none focus:border-[#ef666c] duration-500 focus:outline-none text-[#f3f4f6] placeholder:text-[#f3f4f6] placeholder:text-opacity-80'
                                type="text"
                                placeholder='Name'
                                name='name'
                                required
                            />
                        </div>
                        <div className='mb-7'>
                            <input
                                className='py-[10px] w-full bg-transparent border-b-2 border-white border-opacity-70 focus:border-b-[3px] rounded-none focus:border-[#ef666c] duration-500 focus:outline-none text-[#f3f4f6] placeholder:text-[#f3f4f6] placeholder:text-opacity-80'
                                type="email"
                                placeholder='Email'
                                name='email'
                                required
                            />
                        </div>
                        <div className='mb-7'>
                            <textarea
                                rows={6}
                                name='message'
                                required
                                className='py-[10px] w-full bg-transparent border-b-2 border-white border-opacity-70 focus:border-b-[3px] rounded-none focus:border-[#ef666c] duration-500 focus:outline-none text-[#f3f4f6] placeholder:text-[#f3f4f6] placeholder:text-opacity-80'
                                placeholder='Message'></textarea>
                        </div>
                        <button className="bg-[#ef666c] hover:bg-[#ef666c] hover:scale-110 duration-300 px-12 w-max rounded-lg text-white font-bold py-3 inline-flex items-center">
                        <span>Submit Now</span>
                    </button>
                    </form>
                </div>

                {/* column 2 */}
                <div className='flex flex-col lg:w-1/2 justify-center pb-10 lg:pb-0 lg:pl-10'>

                    <h6 className='text-[#ef666c]'>Contact Form</h6>
                    <h3 className=''>Fill your details</h3>
                    <p className='mt-7'>We are happy to hear from you and are committed to providing the latest technology courses. If you have any questions, please feel free to contact us using the form provided below. We value your feedback and appreciate your contribution to the improvement of our services. We will make sure to respond to your inquiry as soon as possible and provide you with the assistance you need. Thank you.</p>
                </div>
            </div>
        </div>
    )
}
