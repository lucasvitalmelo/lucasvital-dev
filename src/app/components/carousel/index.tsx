import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { projects } from "../projects/projects"
import { ProjectCard } from "../projects/project-card"

export function CarouselProjects() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projects.map(project => (
          <CarouselItem key={project.name}>
            <ProjectCard
              key={project.name}
              {...project}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
