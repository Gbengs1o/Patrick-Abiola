import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-6 flex justify-between items-center z-10 bg-gradient-to-b from-[var(--bg-color)] from-50% to-transparent">
        <div className="font-bold text-lg">
            <Link href="/">Patrick Abiola</Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
        </nav>
        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full pt-12">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map(link => (
                        <SheetClose asChild key={link.href}>
                            <Link
                                href={link.href}
                                className="text-lg font-medium"
                            >
                                {link.label}
                            </Link>
                        </SheetClose>
                        ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
    </header>
  );
}
