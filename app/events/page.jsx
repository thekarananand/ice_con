import dm_sans from '@/components/TheFont'

import TheHeroSection from '@/components/TheHeroSection'

import TheTimeline from '@/components/TheTimeline'

const PageContent = () => {
    return (
        <main className={dm_sans.className}>
            <TheHeroSection
                smallText='TIMELINE'
                largeText="Events at a Glance"
            />
            <div className="S1 SkewSection">
                <section className="content-container">
                    <TheTimeline />
                </section>
            </div>
        </main>
    )
}

export default PageContent