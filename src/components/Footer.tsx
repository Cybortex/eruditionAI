import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col bottom-0'>
      <div className='border-white flex flex-col'>
        <div className='text-brand'> 
          Erudition
        </div>
        <div className='text-xs'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque atque perspiciatis quibusdam ea dignissimos placeat nemo! Magnam delectus, eveniet quae tempora nobis quod corrupti, omnis animi vitae, vel deleniti!
        </div>
      </div>
      <div className='flex w-full bg-black-100 p-1 justify-between'>
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
