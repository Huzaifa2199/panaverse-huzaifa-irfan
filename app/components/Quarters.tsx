import React from 'react'


export const Quarters = () => {
    return (
        <div className='pt-28 pb-20 px-5 lg:px-24'>
            <div className='flex pb-5 lg:pb-10'>
                <div className="lg:pl-8 lg:pr-5">
                    <h6 className='text-center text-[#ef666c]'>QUARTERS</h6>
                    <h2 className='mb-3 text-center'>Program in a Nutshell</h2>
                    <p className='mt-5 text-center'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</p>
                </div>
            </div>
            {/* services div */}
            <div className='flex flex-col lg:flex-row justify-between gap-8 pt-10'>
                {/* quarter 1 */}
                <div className='lg:w-1/3 lg:mb-16'>
                    <div className='glassmorphtwo flex flex-col p-8'>
                        <h5>Object-Oriented Programming using TypeScript</h5>
                        <p className='my-8'>Learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. Understanding latest Web trends i.e. Web 3.0 and Metaverse concepts.</p>
                        <button className="bg-none hover:bg-none focus:bg-none hover:underline hover:text-lg text-[#ef666c] font-bold inline-flex items-center">
                            <span>Learn More</span>
                        </button>
                    </div>
                    <h2 className='-mt-9 mr-4 lg:text-[3.6vw] text-[40px] text-right font-black opacity-75'>QUARTER I</h2>
                </div>


                {/* quarter 2 */}
                <div className='lg:w-1/3 lg:my-8'>

                    <div className='glassmorphtwo flex flex-col p-8'>
                        <h5>Developing Smart Contracts and Planet-Scale Web 3.0</h5>
                        <p className='my-8'>Develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test and user interfaces. Understanding and develop ERC-20 and NFT tokens.</p>
                        <button className="bg-none hover:bg-none focus:bg-none hover:underline hover:text-lg text-[#ef666c] font-bold inline-flex items-center">
                            <span>Learn More</span>
                        </button>
                    </div>
                    <h2 className='-mt-9 mr-4 lg:text-[3.6vw] text-[40px] text-right font-black opacity-75'>QUARTER II</h2>
                </div>


                {/* quarter 3 */}
                <div className='lg:w-1/3 lg:mt-16'>
                    <div className='glassmorphtwo flex flex-col p-8'>
                        <h5>Developing Planet-Scale Web 2.0 Serverless Cloud Apps</h5>
                        <p className='my-8'>Develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards and APIs that connects all of the metaverses so that we can travel between them.</p>
                        <button className="bg-none hover:bg-none focus:bg-none hover:underline hover:text-lg text-[#ef666c] font-bold inline-flex items-center">
                            <span>Learn More</span>
                        </button>
                    </div>
                    <h2 className='-mt-9 mr-4 lg:text-[3.6vw] text-[40px] text-right font-black opacity-75'>QUARTER III</h2>
                </div>

            </div>
        </div>
    )
}


// center full