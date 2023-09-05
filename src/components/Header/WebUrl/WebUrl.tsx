import Image from 'next/image'
import React from 'react'

const WebUrl = () => {
  return (
    <div className='flex flex-row-reverse gap-2 bg-[#F9F9F9] border-2 border-black px-4 py-3 rounded-xl'>
        <Image src={'/close-square.svg'} alt='close' width={24} height={24}/>
        <p>poriw.me - front-end developer</p>
    </div>
  )
}

export default WebUrl