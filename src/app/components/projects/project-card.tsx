import { Code2, ExternalLink } from "lucide-react";
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
      className="bg-slate-800 hover:border-slate-300 transition-colors"
    >
      <Image alt={name} src={image} width={320} height={200} />
      <div className="p-2 mb-2">
        <h1 className="text-slate-50 font-bold ">
          {name}
        </h1>

        <p className="text-slate-300 text-[12px] font-extralight mt-1">
          {description}
        </p>


        <p className="text-slate-300 text-[12px] font-extralight mt-4 max-w-[300px]">
          <strong className="font-bold">Stacks:</strong> {stacks}
        </p>

        <div className="flex space-x-4 mt-2 pt-2 border-t">

          <Link
            className="flex items-center gap-2 text-[11px] hover:underline"
            href={link}
          >
            <ExternalLink size={14} />
            Preview
          </Link>

          <Link
            className="flex items-center gap-2 text-[11px] hover:underline"
            href={code}
          >
            <Code2 size={14} />
            Code
          </Link>
        </div>

      </div>



    </div>
  )
}