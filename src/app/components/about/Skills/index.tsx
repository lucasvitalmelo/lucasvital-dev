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
      className="w-full gap-20 text-left flex flex-col items-center justify-center py-20 mb-40"
    >
      <h2 className="text-white font-mono text-3xl">
        {`<  Skills />`}
      </h2>

      <div className="max-w-6xl flex flex-wrap px-8 gap-16">
        {
          skillKeys.map(skillKey => {
            return (
              <Link
                key={skillKey}
                href={currentSkills[skillKey].link}
                target="_blank"
                className="group size-16 rounded-sm gap-2 flex flex-col justify-center items-center shrink-0 transition-all"
              >
                <Image
                  alt={skillKey}
                  src={currentSkills[skillKey].image}
                  width={50}
                  height={50}
                />
                <p className="text-white text-sm hidden group-hover:block">
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