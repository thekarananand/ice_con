// Next Font Custom Components
import dm_sans from '@/components/TheFont'
import Link from 'next/link'

const NonFound = () => {

    const speakerPicSize = "30vw"

    return (
        <main className={dm_sans.className + " S2 bigHero"}>

        <div className="SkewSection">
            <section className="content-container">
                <div className="content e404 flex-v gap-10px jcc ">
                    <h3>404</h3>
                    <h1>
                        Trust me! This is not the
                        webpage you are looking for.
                    </h1>
                    
                    <p>Let's take you back to <Link href="/">Homepage</Link></p>
                </div>
            </section>
        </div>
    </main>
    )
}

export default NonFound
