import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { About } from "./components/about";
import { Skills } from "./components/about/Skills";

export default function Home() {
  return (
    <>
      <div id='#home' className="flex w-full max-w-6xl px-8 text-left items-center justify-between h-[calc(100vh-65px)]">
        <div>
          <div className="flex w-full justify-center mb-8 md:hidden lg:hidden">
            <div className="rounded-full border-4 border-blue-400 inline-block">
              <Image alt="my photografic" src='/my-photo.jpeg' width={200} height={200} className="rounded-full bg-white/30 backdrop-contrast-50" />
            </div>
          </div>

          <h1 className="text-blue-100 font-normal text-3xl mb-4 lg:text-4xl" >
            Olá, eu sou{' '}
            <span className="text-blue-400 font-extrabold ">
              Lucas Vital
            </span>
          </h1>

          <span className="text-slate-400 text-1xl lg:text ">
            Desenvolvedor Web apaixonado por criar experiências digitais incríveis.
          </span>
          <br />
          <Link className="" href={'/files/lucas-vital-cv.pdf'}>
            <Button size="lg" className="cursor-pointer mt-4" variant='default'>Download CV</Button>
          </Link>

        </div>
        <div className="hidden md:block lg:block rounded-full border-4 border-blue-400 shrink-0">
          <Image alt="my photografic" src='/my-photo.jpeg' width={200} height={200} className="rounded-full bg-white/30 backdrop-contrast-50" />
        </div>
      </div>

      <About />
      <Skills />
    </>
  );
}
