'use client';

import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span className={styles.nature}>TONGRO NATURE</span>
                <span className={styles.rights}>&copy; 2025 All rights reserved. Made with ❤️ by Codeidea.</span>
                <span className={styles.num}>15666780</span>
            </div>
        </footer>
    );
}
