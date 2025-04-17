import Link from "next/link"
import Image from "next/image"
import { currentSkills } from "./skills"

const skillKeys = Object.keys(currentSkills) as Array<keyof typeof currentSkills>;

export function Skills() {

  function capitalizeFirstLetter(text: string) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div
      id='skills'
      className="w-full gap-20 text-left flex flex-col items-center justify-center py-20 "
    >
      <h2 className="text-white font-mono text-3xl">
        {`<  Skills />`}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5 w-full">
        {
          skillKeys.map(skillKey => {
            return (
              <Link
                key={skillKey}
                href={currentSkills[skillKey].link}
                target="_blank"
                className="group flex flex-col justify-center items-center rounded-sm mx-auto gap-2.5 mb-2 shrink-0"
              >
                <Image
                  alt={skillKey}
                  src={currentSkills[skillKey].image}
                  width={50}
                  height={50}
                />
                <p className="text-white text-sm transition-all opacity-0 group-hover:opacity-100">
                  {capitalizeFirstLetter(skillKey)}
                </p>
              </Link>
            )
          })
        }

      </div>


    </div>
  )
}