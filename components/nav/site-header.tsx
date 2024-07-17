import Link from "next/link";

import { ModeToggle } from "@/components/theme-toggle";
import AuthComponent from "./auth-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon, BoxIcon } from "@radix-ui/react-icons";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="sm:px-12 px-6 flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <Sheet>
          <SheetTrigger className="p-2 sm:hidden">
            <HamburgerMenuIcon className="w-8 h-8 sm:hidden" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="pt-8">
              {/* <SheetTitle>
                <span className="text-4xl">Menu</span>
              </SheetTitle> */}
              {/* <SheetDescription>Find your way around.</SheetDescription> */}
            </SheetHeader>

            <div className="pt-8 pl-2 text-lg">
              <div className="space-y-8 ">
                <div>
                  <Link href="/">
                    <SheetClose className="text-xl">Home</SheetClose>
                  </Link>
                </div>
                <div>
                  <Link href="/about">
                    <SheetClose className="text-xl">About</SheetClose>
                  </Link>
                </div>
                <div>
                  <Link href="/blog">
                    <SheetClose className="text-xl">Blog</SheetClose>
                  </Link>
                </div>
                <div>
                  <Link href="/contact">
                    <SheetClose className="text-xl">Contact</SheetClose>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <div className="text-4xl font-bold">NT</div>
        </Link>
        <nav className="pl-6 gap-6 pt-4 hidden sm:flex text-sm">
          <a
            className="hover:text-muted-foreground text-md hover:underline"
            href="/about"
          >
            About
          </a>
          <a
            className="hover:text-muted-foreground text-md hover:underline"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="hover:text-muted-foreground text-md hover:underline"
            href="/contact"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center justify-end flex-1 space-x-4 z-20">
          <div className="flex gap-2 items-center">
            <ModeToggle />
            <AuthComponent />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
