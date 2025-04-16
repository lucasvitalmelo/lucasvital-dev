import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full max-w-6xl text-left items-center justify-between h-[calc(100vh-65px)]">
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


      <div id='about' className="w-full gap-8 text-left flex flex-col items-center justify-center py-20 bg-gray-900/70 mb-40 backdrop:blur-md">
        <h2 className="text-white font-mono text-3xl">{`< Sobre Mim />`}</h2>
        <div className="text-slate-500 text-left max-w-6xl">
          <p>
            Sou um desenvolvedor web com experiência em criar aplicações modernas, performáticas e responsivas. Tenho uma forte paixão por transformar ideias em interfaces intuitivas, acessíveis e visualmente agradáveis, sempre focando na melhor experiência para o usuário.
          </p>
          <br />
          <p>
            Ao longo da minha trajetória, desenvolvi projetos utilizando tecnologias como React, Next.js, Node.js, TypeScript, entre outras ferramentas modernas do ecossistema JavaScript. Trabalho com atenção aos detalhes, aplicando boas práticas de arquitetura, componentes reutilizáveis e responsividade para garantir que as aplicações funcionem bem em qualquer dispositivo.
          </p>
          <br />
          <p>
            Tenho familiaridade com conceitos de UX/UI design, e otimização para SEO e performance. Também estou habituado a trabalhar com integração de APIs REST, autenticação, gerenciamento de estado com ferramentas como Context API, Zustand, React-Query e deploy em plataformas como Firebase e Vercel integradas ao Github Actios.
          </p>
          <br />
          <p>
            Sou movido por curiosidade e aprendizado constante. Gosto de explorar novas ferramentas, acompanhar as tendências do mercado e aplicar soluções modernas e eficientes nos projetos em que atuo. Estou sempre em busca de desafios que me permitam crescer como profissional e contribuir com times e produtos de forma significativa.
          </p>
        </div>
      </div >
    </>

  );
}
