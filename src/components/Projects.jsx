import React from 'react'
import ProjectCard from './ProjectCard'


function Projects() {
  return (
    <div id="portfolio" className="text-white flex mx-10 flex-col items-center mt-10">
      <h4 className="text-4xl mb-10">Projects</h4>
        <ProjectCard />
    </div>
  )
}

export default Projects