import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const Faq = () => {
    return (
        <div className='py-20 px-5 lg:px-24'>
            <div className='flex flex-col lg:flex-row justify-between'>


                {/* column 1 */}
                <div className='flex flex-col lg:w-1/2 justify-center pb-10 lg:pb-0 lg:pr-10'>

                    <h6 className='text-[#ef666c]'>FAQ</h6>
                    <h3 className=''>Frequenty asked questions</h3>
                    <p className='my-8'>we understand that you may have questions about this course. That's why we've put together this comprehensive FAQ page to provide answers to some of the most common questions we receive. If you can't find the answer to your question here, please don't hesitate to reach out to our students support team.</p>
                    <button className="bg-[#ef666c] hover:bg-[#ef666c] hover:underline px-10 w-max rounded-lg text-white font-bold py-3 inline-flex items-center">
                        <span>Contact Us</span>
                        <div className="mt-[2px] ml-3">
                            <FaArrowRight size={"16px"} color={"#f3f4f6"}></FaArrowRight>
                        </div>
                    </button>
                </div>


                {/* column 2 */}
                <div className="flex flex-col justify-center lg:w-1/2 text-white">
                    <div className="grid divide-y divide-neutral-200 w-full mx-auto">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> What are the goals and objectives of this new course?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus eum sunt explicabo quia assumenda consequatur laboriosam, magni vero numquam adipisci, eaque beatae sit iusto iure perspiciatis modi deserunt dolores.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>What is the expected duration of this course?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, incidunt dicta rem saepe quibusdam cumque inventore quaerat! Veritatis unde iste, sunt optio inventore incidunt vero tenetur architecto eligendi eius maiores.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>What are the topics and subject areas covered in this course?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta soluta, cupiditate similique doloremque aliquid nulla dolore, temporibus tempora culpa quasi mollitia? Recusandae quidem est odio natus laudantium, tempore iure.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>How will this course be delivered (e.g., online, in-person, hybrid)?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum magnam rerum commodi beatae corrupti facere dolor? Molestiae amet ullam in corrupti odit. Veritatis officia earum eligendi corrupti possimus repellat optio?
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>Who is the target audience for this new educational course?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta minus beatae ipsum, exercitationem qui quod expedita id. Adipisci beatae eius iusto natus sit aperiam. Tenetur accusantium asperiores nostrum eaque.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>What resources will be available to students?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, id fugiat quos modi dolores doloremque facilis temporibus voluptatem nesciunt corrupti quam obcaecati asperiores? Consequatur nam itaque et soluta ea fuga?
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>How does this new course differ from similar courses?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex eius commodi neque voluptas, a aliquid exercitationem quisquam molestiae, quam maiores vero pariatur? Hic, cum quas ut molestias officiis repellendus.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
