import { roadmap } from '@/data'
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'


const RoadmapCard = ({ roadmap }) => {

}

function Roadmap() {
  return (
    <div className='flex flex-cool mt-20'>

      <VerticalTimeline>
        {roadmap.map((roadmap, index) => (
          <RoadmapCard key={index} roadmap={roadmap}/>
        )) }
        
      </VerticalTimeline>      

    </div>
  )
}

export default Roadmap