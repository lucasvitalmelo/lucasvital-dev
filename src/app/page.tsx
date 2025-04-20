import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";


export default function Home() {
  return (
    <>
      <div id='#home' className="flex w-full max-w-6xl px-8 text-left items-center justify-between h-[calc(100vh-65px)]">
        <div>
          <div className="flex w-full justify-center mb-8 md:hidden lg:hidden">
            <div className="rounded-full border-4 border-blue-400 inline-block">
              <Image
                alt="my photografic"
                src='/files/my-photo.png'
                width={200}
                height={200}
                priority
                className="rounded-full bg-white/30 backdrop-contrast-50 size-auto"
              />
            </div>
          </div>

          <h1 className="text-blue-100 font-normal text-3xl mb-4 lg:text-2xl" >
            Hey there!, I'm- <br />
            <span className="text-blue-400 text-5xl font-extrabold ">
              Lucas Vital
            </span>
          </h1>

          <span className="text-slate-400 text-1xl lg:text max-w-[750px] block">
            Front-end developer. Develop modern web applications with tools like React.js with Typescript and NodeJs.
            {/* Web developer who loves creating amazing digital experiences. */}
          </span>
          <br />
          <Link className="" href={'/files/lucas-vital-cv.pdf'}>
            <Button size="lg" className="cursor-pointer mt-4" variant='default'>Download CV</Button>
          </Link>

        </div>
        <div className="hidden md:block lg:block rounded-full border-4 border-blue-400 shrink-0">
          <Image
            alt="my photografic"
            src='/files/my-photo.png'
            width={200}
            height={200}
            priority
            className="rounded-full bg-white/30 backdrop-contrast-50 size-auto"
          />
        </div>
      </div>

      <About />
      <Skills />
      <Projects />

    </>
  );
}
