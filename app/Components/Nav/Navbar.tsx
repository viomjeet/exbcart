'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Briefcase, Phone } from 'lucide-react'; // Standard Icons import kiye
import ThemeToggle from '../Themes/ThemeToggle';

const menus = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/pages/about', icon: Info },
    { name: 'Services', path: '/pages/services', icon: Briefcase },
    { name: 'Contact', path: '/pages/contact', icon: Phone },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-foreground/10 bg-nav text-foreground px-6 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-tighter bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent select-none">
                    EXBCART
                </Link>

                <div className="flex items-center gap-6">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        const isActive = pathname === menu.path;
                        return (
                            <Link
                                key={menu.path}
                                href={menu.path}
                                className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${isActive
                                    ? 'text-foreground'
                                    : 'text-foreground/60 hover:text-foreground'
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

            </div>
        </nav>
    );
}