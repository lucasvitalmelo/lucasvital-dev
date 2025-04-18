import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string
  description: string
  url: string
  image: string
  libs: string[]
}

export function ProjectCard({
  name, description, image, url, libs
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      className="w-[350px] border p-4 border-slate-400 hover:border-slate-300 transition-colors"
    >
      <Image alt={name} src={image} width={320} height={200} />
      <h1 className="text-slate-50 font-bold mt-4">
        {name}
      </h1>

      <p className="text-slate-300 font-extralight mt-2">
        {description}
      </p>

      <section className="flex justify-center flex-wrap gap-2 mt-4 border-t pt-3">
        {libs.map(
          lib => {
            return (
              <span key={lib} className="rounded font-extralight text-[11px] border px-2 py-1 border-slate-700 text-slate-300">
                {lib}
              </span>
            )
          }
        )}

      </section>


    </Link>
  )
}