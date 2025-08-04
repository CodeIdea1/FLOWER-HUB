import styles from '../styles/HeroSection.module.css'
import Image from 'next/image'
import { ChevronDown, Plus } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className="container">

                    <div className={styles.fallingContainer}>
                        <Image
                            className={styles.fallingLeaf}
                            src='/flower2.png'
                            alt='layer'
                            fill
                            priority
                        />
                    </div>

                    <div className={styles.fallingContaine2}>
                        <Image
                            className={styles.fallingLeaf2}
                            src='/flower2.png'
                            alt='layer'
                            fill
                            priority
                        />
                    </div>

                    <div className={styles.fallingContainer3}>
                        <Image
                            className={styles.fallingLeaf3}
                            src='/flower2.png'
                            alt='layer'
                            fill
                            priority
                        />
                    </div>

                    <div className={styles.leafLayer}>
                        <Image
                            className={styles.leaf}
                            src='/leaf.png'
                            alt='layer'
                            fill
                            priority
                        />
                    </div>

                    <div className={styles.flowerLayer}>
                        <Image
                            className={styles.flowerImage}
                            src='/flower444.png'
                            alt='purple flower'
                            fill
                        />
                    </div>

                    <div className={styles.statice}>
                        <Image
                            className={styles.staticeImage}
                            src='/statice222.png'
                            alt='lavender'
                            fill
                        />
                    </div>




                    <div className={styles.content}>
                        <h1 className={styles.mainTitle}>Beautiful</h1>

                        <div className={styles.subtitle}>
                            <p className={styles.floralText}>FLORAL</p>
                            <p className={styles.colorText}>COLOR</p>
                            <p className={styles.combinationsText}>COMBINATIONS</p>
                            <button className={styles.KindsButton}>
                                <span className={styles.num}>30</span>
                                <span>KINDS OF METHODS</span>
                                <span className={styles.plusIcon}>
                                    <Plus />
                                </span>
                            </button>
                        </div>

                        <button className={styles.methodsButton}>
                            <span>KINDS OF METHODS</span>
                            <span className={styles.plusIcon}>
                                <Plus />
                            </span>
                        </button>
                    </div>

                    <div className={styles.smallText1}>
                        <p>Lorem ipsum<br />dolor sit amet<br />consectetur</p>
                    </div>

                    <div className={styles.smallText2}>
                        <p>Lorem ipsum<br />dolor sit amet<br />consectetur adipiscing<br />elit sed do</p>
                    </div>

                    <div className={styles.scrollIndicator}>
                        <ChevronDown className={styles.scrollIcon} />
                        <ChevronDown className={styles.scrollIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}