import React from 'react'

const TeamCards = () => {
  return (
    <section className='h-full mt-10'>
        <div className='container mx-auto h-full'>
            <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">

                <div className="text-center xl:text-left">
                    <span className='text-md'>Computer Science Student</span>
                    <h1 className='text-[28px] xl:text-[36px] leading-[1.1]font-semibold'>
                        I&apos;m Folorunsho Olugboji
                    </h1>
                    <p className='max-w-[500px]mb-9 text-white/80'>Ambitious young entreprnuer and writer...</p>
                </div>

                <div>photo</div>

            </div>

        </div>
      
    </section>
  )
}

export default TeamCards
