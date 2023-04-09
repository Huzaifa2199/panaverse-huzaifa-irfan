import Link from 'next/link';
import React from 'react'
import { FaArrowRight, FaRegUser } from 'react-icons/fa';


export const Features = () => {
    return (
        <div className='py-5' id='about'>
            <div className='flex flex-col lg:flex-row justify-between glassmorphone max-lg:flex-col-reverse'>
                <div className='flex lg:w-2/5 justify-center'>

                    <img className='pt-10' src="images/stake-img.png" alt="features" />

                </div>

                <div className='flex flex-col justify-center lg:w-3/5 p-8 lg:pr-24'>

                    <h6 className='text-[#ef666c]'>BENIFITS</h6>
                    <h3 className=''>Earn While You Learn</h3>
                    <p className='my-8'>The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
                    <Link href={"https://www.piaic.org/"} target='_blank'>
                    <button className="bg-[#ef666c] hover:bg-[#ef666c] hover:scale-110 duration-300 px-12 w-max rounded-lg text-white font-bold py-3 inline-flex items-center">
                        <span>Apply Now</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
