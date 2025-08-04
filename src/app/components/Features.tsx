"use client";

import styles from '../styles/features.module.css';
import { Leaf, Flower } from "lucide-react";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const flowersRef = useRef<React.ElementRef<typeof Image> | null>(null);
    const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement | null>(null);
    const featureItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        badgesRef.current.forEach(badge => {
            if (badge) {
                gsap.set(badge, {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    rotation: -10
                });
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 30%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                refreshPriority: 0
            }
        })
            .to(badgesRef.current[0], {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            })
            .to(badgesRef.current[1], {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.6")
            .to(badgesRef.current[2], {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.6");

        if (flowersRef.current) {
            gsap.to(flowersRef.current, {
                y: 40,
                rotate: 10,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "top top",
                    scrub: 1,
                    refreshPriority: -1
                }
            });
        }

        featureItemsRef.current.forEach((item, i) => {
            if (item) {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "power3.out"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const badges = [
        { type: 'icon', icon: <Leaf size={24} />, text: 'green', className: styles.greenBadge },
        { type: 'number', number: 30, className: styles.numberBadge },
        { type: 'icon', icon: <Flower size={24} />, text: 'flowers', className: styles.purpleBadge },
    ];

    const features = [
        {
            icon: <Leaf className={styles.icon} />,
            title: 'FLOWER BOOK',
            text: `Birds will sing for healthy nature, shades of healthy city forest.
                Please, live colors in healthy moments. Birds will sing for healthy
                nature, shades of healthy moment.`
        },
        {
            icon: <Flower className={styles.icon} />,
            title: 'SUMMER STORY',
            text: `Birds will sing for healthy nature, shades of healthy city forest.
                Please, live colors in healthy moments. Birds will sing for healthy
                nature, shades of healthy moment.`
        },
    ];

    return (
        <section ref={sectionRef} className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>PARIS & PARTY</h2>
                    <p className={styles.subtitle}>Premium Collection</p>
                </div>

                <div className={styles.features}>
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            ref={el => {
                                if (badgesRef.current) {
                                    badgesRef.current[index] = el;
                                }
                            }}
                            className={`${styles.featureBadge} ${badge.className}`}
                        >
                            {badge.type === 'icon' && (
                                <>
                                    <div className={styles.badgeIcon}>{badge.icon}</div>
                                    <span className={styles.badgeText}>{badge.text}</span>
                                </>
                            )}
                            {badge.type === 'number' && (
                                <span className={styles.largeNumber}>{badge.number}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.productImage}>
                        <div className={styles.chairContainer}>
                            <Image
                                className={styles.chairImage}
                                src='/chair77.png'
                                alt='chair'
                                width={500}
                                height={500}
                                priority
                            />

                            <Image
                                ref={flowersRef}
                                className={styles.flowersImage}
                                src='/flowers77.png'
                                alt='flowers'
                                width={300}
                                height={300}
                            />

                            <div className={styles.chairShadow}></div>
                        </div>
                    </div>

                    <div className={styles.featureContainer}>
                        {features.map((feature, index) => (
                            <div
                                className={styles.featureItem}
                                key={index}
                                ref={el => {
                                    if (featureItemsRef.current) {
                                        featureItemsRef.current[index] = el;
                                    }
                                }}
                            >
                                {feature.icon}
                                <h3 className={styles.title}>{feature.title}</h3>
                                <p className={styles.text}>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}