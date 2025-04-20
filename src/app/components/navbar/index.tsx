import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Contact, Layers, Menu, Presentation, SquareUser } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky flex items-center justify-center top-0 z-10 w-full border-b border-[#606B77] backdrop-blur-xs supports-[backdrop-filter]:bg-[#020617]-100">
      <div className="container px-8 flex h-16 items-center max-w-6xl justify-between">
        <span className="flex text-slate-100 font-semibold font-mono">
          {"< LucasVital />"}
        </span>

        <div className="md:hidden lg:hidden">
          <Popover>
            <PopoverTrigger><Menu size={16} /></PopoverTrigger>
            <PopoverContent align="end" side="top" className="flex flex-col gap-4 w-36">

              <Link href="#about" className="flex gap-2 items-center transition-colors text-blue-50 hover:text-blue-200">
                <SquareUser size={22} />
                About
              </Link>

              <Link href="#skills" className="flex gap-2 items-center transition-colors text-blue-50 hover:text-blue-200">
                <Layers size={22} />

                Skills
              </Link>

              <Link href="#projects" className="flex gap-2 items-center transition-colors text-blue-50 hover:text-blue-200">
                <Presentation size={22} />
                Projects
              </Link>

              <Link href="#contact" className="flex gap-2 items-center transition-colors text-blue-50 hover:text-blue-200">
                <Contact size={22} />
                Contact
              </Link>
            </PopoverContent>
          </Popover>
        </div>

        <nav className="hidden md:flex lg:flex items-center gap-6 text-sm font-light">
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