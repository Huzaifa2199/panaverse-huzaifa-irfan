import React from 'react'
import { BsArrowDown } from 'react-icons/bs';
import { Scroller } from './icons/Scroller';

export const ScrollDown = () => {
    return (
        <div className='flex justify-end max-lg:hidden'>
            <div className='fixed z-10 top-[39vh]'>
                <div className='pr-7 opacity-[85%]'>
                    <Scroller></Scroller>
                </div>
            </div>
        </div>
    )
}
