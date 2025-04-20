import { CarouselProjects } from "../carousel"

export function Projects() {
  return (
    <div id='projects' className="w-full mt-10 text-left flex flex-col items-center justify-center py-20 bg-gray-900/70 mb-40 backdrop:blur-md">
      <h2 className="text-white font-mono text-3xl mb-20">
        {`<  Projects />`}
      </h2>

      <div className="flex max-w-6xl">
        <CarouselProjects />
      </div>
    </div >
  )
}