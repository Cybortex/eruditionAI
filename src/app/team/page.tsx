import TeamCards from '@/components/TeamCards'
import React from 'react'

function TeamPage() {
  return (
    <main className='bg-black-200 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5'>
      <div className="max-w-7xl w-full">

      <TeamCards />

      </div>
      
    </main>
  )
}

export default TeamPage