"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "../ui/button";

export default function AuthComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="">
      <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenuTrigger className="">
          <div className={buttonVariants({ variant: "ghost", size: "sm" })}>
            <PersonIcon className="h-6 w-6" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background">
          <Link href="/">
            <DropdownMenuItem className="sm:text-sm text-lg">
              Home
            </DropdownMenuItem>
          </Link>
          <Link href="/profile">
            <DropdownMenuItem className="sm:text-sm text-lg">
              Profile
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
