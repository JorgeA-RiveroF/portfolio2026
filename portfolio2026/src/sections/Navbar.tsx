'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []); 

    return ( 
        		<header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<Link href="#" className="font-bold text-lg">
					Jorge Rivero F
				</Link>
				<ul className="hidden gap-6 md:flex text-sm font-medium">
					<li><a href="#projects">Projects</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
				<div className="flex items-center gap-3">
					<button
						aria-label="Change Theme"
						onClick={() => setTheme(theme === 'creative' ? 'Dark' : 'Light')}
						className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-black dark:text-white"
					>
						{mounted && (
							<motion.span
								key={theme}
								initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
								animate={{ scale: 1, rotate: 0, opacity: 1 }}
								transition={{ type: 'spring', stiffness: 300, damping: 18 }}
							>
								{theme === 'creative' ? '☀️' : '🌑'}
							</motion.span>
						)}
					</button>
				</div>
			</nav>
		</header>
	);
}