import HomePage from './page'
import NavBar from '@/components/navbar'
import FooterArea from '@/components/footerarea'
        
import '@/styles/global.css'

export const metadata = {
    title: "ICE CONFERENCE'24",
    description: "ICE CONFERENCE'24"
}

const RootLayout = () => {
    return (
        <html lang='en'>
            <body>
        
                {/* <NavBar/> */}

                <main>
                    <section>
                        <div className="data">
                            HERO SECTION
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            ABOUT #WELCOME
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            IMPORTANT DATES
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            CALL FOR PAPERS
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            SUBMIT
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            SPONSERS
                        </div>
                    </section>
                    <section>
                        <div className="data">
                            VENUE
                        </div>
                    </section>
                </main>
      
                {/* <FooterArea/> */}
        
            </body>
        </html>
    )
}

export default RootLayout