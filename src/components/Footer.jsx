import React from 'react';
import ReactFooter from '../assets/ReactFooter.svg'

function Footer() {
  return (
    <div className='bg-[#19191b] flex items-center justify-center'>
        <div className='flex items-center'>
            <p className='font-sans text-[#eeeeec] text-md'>Built from scratch with</p>
            <img src={ReactFooter} className='h-[80px] w-[70px]' alt="Footer Logo" />
        </div>
    </div>
  )
}

export default Footer