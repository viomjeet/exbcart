'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Briefcase, Phone, Menu, X } from 'lucide-react'; // Menu aur X icons add kiye
import ThemeToggle from '../Themes/ThemeToggle';

const menus = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/pages/about', icon: Info },
    { name: 'Services', path: '/pages/services', icon: Briefcase },
    { name: 'Contact', path: '/pages/contact', icon: Phone },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-foreground/10 bg-nav text-foreground px-6 py-4 relative z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black tracking-tighter bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent select-none"
                >
                    EXBCART
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        const isActive = pathname === menu.path;
                        return (
                            <Link
                                key={menu.path}
                                href={menu.path}
                                className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                                    }`}
                            >
                                <Icon className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'scale-105 text-foreground' : 'text-foreground/50'}`} />
                                <span>{menu.name}</span>
                            </Link>
                        );
                    })}
                    <div className="pl-2 border-l border-foreground/10">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 text-foreground/70 hover:text-foreground transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

            </div>

            <div className={`md:hidden absolute top-full left-0 w-full border-b border-foreground/10 bg-nav/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                <div className="flex flex-col gap-4 px-6 py-5">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        const isActive = pathname === menu.path;
                        return (
                            <Link
                                key={menu.path}
                                href={menu.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 py-2 text-base font-medium transition-colors ${isActive ? 'text-foreground font-semibold' : 'text-foreground/60'}`}
                            >
                                <Icon className={`h-5 w-5 ${isActive ? 'text-foreground' : 'text-foreground/50'}`} />
                                <span>{menu.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}