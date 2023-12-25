// Next Font Custom Components
import dm_sans from '@/components/TheFont'

const NonFound = () => {

    const speakerPicSize = "30vw"

    return (
        <main className={dm_sans.className + " S2"}>

        <div className="SkewSection">
            <section className="content-container">
                <div className="content e404 flex-v gap-10px jcc ">
                    <h3>404</h3>
                    <h1>
                        Trust me! This is not the
                        webpage you are looking for.
                    </h1>
                    
                    <p>Let's take you back to <a href="../">Homepage</a></p>
                </div>
            </section>
        </div>
    </main>
    )
}

export default NonFound
