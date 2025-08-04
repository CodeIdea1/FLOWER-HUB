'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

import styles from '../styles/Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}><Sparkles color="#A855F7" fill="#A855F7" /></div>
                    <span>FLOWER HUB</span>
                </div>

                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    <a href="#" className={styles.navLink}>COMPANY</a>
                    <a href="#" className={styles.navLink}>OVERSEAS TRAVEL</a>
                    <a href="#" className={styles.navLink}>DOMESTIC TOURISM</a>
                    <a href="#" className={styles.navLink}>HONEYMOON</a>
                    <a href="#" className={styles.navLink}>EVENTS</a>
                </nav>
            </div>
        </header>
    );
}
