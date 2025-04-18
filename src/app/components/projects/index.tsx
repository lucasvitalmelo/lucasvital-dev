import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { ProjectCard } from "./project-card"
import { projects } from "./projects"


export function Projects() {


  return (

    <div id='projects' className="w-full gap-20 text-left flex flex-col items-center justify-center py-20 bg-gray-900/70 mb-40 backdrop:blur-md">
      <h2 className="text-white font-mono text-3xl">
        {`<  Projects />`}
      </h2>

      <div className="flex max-w-6xl gap-8">

        {projects.map(project => {
          return (
            <ProjectCard
              key={project.name}
              url={project.url}
              image={project.image}
              name={project.name}
              description={project.description}
              libs={project.libs}
            />
          )
        })}

      </div>
    </div >
  )
}