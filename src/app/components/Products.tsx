"use client";

import styles from '../styles/products.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
    const productRefs = useRef<(HTMLDivElement | null)[]>([]);

    const products = [
        { src: '/prod1.png', title: 'cafe menu price', price: 120.00 },
        { src: '/prod2.png', title: 'gift box price', price: 65.00 },
        { src: '/prod3.png', title: 'leaf pack', price: 53.00 },
        { src: '/prod4.png', title: 'thank you pack', price: 49.00 },
    ];

    useEffect(() => {
        productRefs.current.forEach((el, i) => {
            if (el) {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "back.out(1.7)"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className={styles.productsSection}>
            <div className={styles.container}>
                {products.map((product, index) => (
                    <div
                        className={styles.ProductItem}
                        key={index}
                        ref={el => {
                            if (productRefs.current) {
                                productRefs.current[index] = el;
                            }
                        }}
                    >
                        <div className={styles.ProductImgContainer}>
                            <Image
                                className={styles.ProductImg}
                                src={product.src}
                                alt={product.title}
                                fill
                            />
                        </div>
                        <p className={styles.subText}>{product.title}</p>
                        <p className={styles.price}>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}