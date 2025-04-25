import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="sticky flex items-center justify-center w-full border-t">

      <div className="container px-8 flex h-16 items-center max-w-6xl justify-between text-slate-300 ">
        <span>2025 - Lucas Vital</span>

        <div className="flex gap-4 ">

          <Link
            title="Linkedin"
            href='https://www.linkedin.com/in/lucasvitaldemelo/'
            target="_blank"
          >
            <Button size={"icon"} variant={"outline"} className="text-slate-300">
              <Linkedin />
            </Button>
          </Link>

          <Link
            title="Github"
            href='https://github.com/lucasvitalmelo'
            target="_blank"
          >
            <Button size={"icon"} variant={"outline"}>
              <Github />
            </Button>
          </Link>

        </div>
      </div>
    </footer>
  )
}