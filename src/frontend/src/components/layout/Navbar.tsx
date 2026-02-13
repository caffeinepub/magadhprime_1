import { useState } from 'react';
import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { scrollToSection } from '../../lib/scrollToSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const isHomePage = routerState.location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => scrollToSection(sectionId), 100);
      });
    }
  };

  const handleBrandClick = () => {
    setIsOpen(false);
    if (isHomePage) {
      scrollToSection('hero');
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => scrollToSection('hero'), 100);
      });
    }
  };

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Support', sectionId: 'support' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4">
        <button
          onClick={handleBrandClick}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-xl font-bold text-primary">MagadhPrime</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.sectionId}>
                  <button
                    onClick={() => handleNavClick(item.sectionId)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
