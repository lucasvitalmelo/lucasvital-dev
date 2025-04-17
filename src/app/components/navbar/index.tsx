import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky flex items-center justify-center top-0 z-10 w-full border-b border-[#606B77] backdrop-blur-xs supports-[backdrop-filter]:bg-[#020617]-100">
      <div className="container px-8 flex h-16 items-center max-w-6xl justify-center lg:justify-between">
        <span className="flex text-slate-100 font-semibold font-mono">
          lucasvital.dev
        </span>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-light">
          <Link href="#about" className="transition-colors text-blue-50 hover:text-blue-200">
            About
          </Link>
          <Link href="#skills" className="transition-colors text-blue-50 hover:text-blue-200">
            Skills
          </Link>
          <Link href="#projects" className="transition-colors text-blue-50 hover:text-blue-200">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors text-blue-50 hover:text-blue-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}