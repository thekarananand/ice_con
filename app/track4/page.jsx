import dm_sans from '@/components/TheFont'

import TheHeroSection from '@/components/TheHeroSection'

const PageContent = () => {
    return (
        <main className={dm_sans.className}>
            <TheHeroSection
                smallText='TRACK 4'
                largeText="Emerging Technologies"
            />
            <div className="S1 SkewSection">
                <section className="content-container">
                    <div className="content">
                        <h2>Note: This is a Placeholder Information!</h2>
                        <p>
                            The International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where experts gather to explore, collaborate, and share groundbreaking research and innovations in the rapidly evolving fields of electrical engineering, electronics, and automation. E2A provides a vital platform for diverse professionals to exchange ideas and knowledge, fostering innovation and shaping a future powered by cutting-edge technologies. Join us at E2A to be part of this transformative journey towards a  smarter, more connected, and automated world, where your contributions are essential in shaping the future. Selected papers will be published in SCOPUS indexed proceedings
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default PageContent