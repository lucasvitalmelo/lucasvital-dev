import { Code2, ExternalLink, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string
  description: string
  link: string
  code: string
  image: string
  stacks: string
}

export function ProjectCard({
  name, description, image, code, link, stacks
}: ProjectCardProps) {
  return (
    <div
      className=" bg-slate-800 w-fit flex-col mx-auto"
    >
      <Image
        alt={name}
        src={image}
        width={700}
        height={0}
        className="w-[480px] md:w-[600px] lg:w-[700px] h-auto"
      />

      <div className="px-4 py-2 w-full flex justify-between">

        <span >{name}</span>

        <div className="flex gap-2">
          <Link rel="stylesheet" href={link} className="text-xs flex gap-2 items-center hover:underline hover:text-blue-500">
            preview
            <ExternalLink size={14} />
          </Link>
          <span>|</span>
          <Link rel="stylesheet" href={code} className="text-xs flex gap-2 items-center hover:underline hover:text-blue-500">
            Code
            <Code2 size={14} />
          </Link>
        </div>
      </div>


    </div >



  )
}