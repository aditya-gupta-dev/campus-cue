"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
const links = [
  { href: "/help", label: "Help" },
  { href: "/contacts", label: "Contacts" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
];
export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="CampusCue home">
          <Compass aria-hidden="true" strokeWidth={1.6} />
          CampusCue<span className="wordmark-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-end">
          <Badge variant="outline" className="prototype-badge">
            Student-built prototype
          </Badge>
          <Button asChild variant="outline" className="desktop-cta">
            <Link href="/help">
              Explore the demo
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mobile-menu"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>CampusCue</SheetTitle>
                <SheetDescription>
                  Campus safety awareness prototype
                </SheetDescription>
              </SheetHeader>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Button asChild variant="ghost">
                      <Link href={l.href}>{l.label}</Link>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
