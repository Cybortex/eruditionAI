import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col bottom-0'>
      <div className='border-white flex flex-col px-4 py-10'>
        <div className='text-brand text-xl'> 
          Erudition
        </div>
        <div className='text-xs w-18'>
          The Future of learning. Improving The way you learn
        </div>
      </div>
      <div className='flex w-full bg-black-100 p-4 justify-between'>
        <div>
          Social Links
        </div>
        <div>
          Copyright Cybortex Inc
        </div>
      </div>
    </div>
  )
}

export default Footer
