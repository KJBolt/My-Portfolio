import React from 'react'

function Quote() {
  return (
    <div className='quoteBg h-[300px] flex justify-center items-center px-8'>
        <div>
            <h3 className='text-2xl md:text-4xl font-serif italic mb-3 text-[#eeeeec]'>"Talk is cheap. Show me the code."</h3>
            <p className='text-center font-serif italic text-[#eeeeec]'>-by Linus Torvalds</p>
        </div>
    </div>
  )
}

export default Quote