// Next Font Custom Components
import dm_sans from '@/components/TheFont'

// Custom Components
import TheHeroSection from '@/components/TheHeroSection'
import TheSectionEndLink from '@/components/TheSectionEndLink'
import TheTimeline from '@/components/TheTimeline'

// Next Lib
import Image from 'next/image'
import Link from 'next/link'

// SVG Components
import ticket from "@/public/ticket.svg"

// Sponsors Components
import amazon from "@/public/sponsors/amazon.svg"
import google from "@/public/sponsors/google.svg"
import microsoft from "@/public/sponsors/microsoft.svg"
import mit from "@/public/sponsors/mit.svg"
import texas from "@/public/sponsors/texas.svg"
import siemens from "@/public/sponsors/siemens.svg"

// Speakers
import Prof_Marta_Zurek_Mortka from '@/public/speaker/Prof_Marta_Zurek_Mortka.jpg'
import Prof_Chris_Mi from '@/public/speaker/Prof_Chris_Mi.jpg'
import Prof_Nakai_Hirotaka from '@/public/speaker/Prof_Nakai_Hirotaka_Placeholder.jpeg'
import Dr_Ajay_Mathur from '@/public/speaker/Dr_Ajay_Mathur.jpeg'
import Mr_Subrahmanyam_Pulipaka from '@/public/speaker/Mr_Subrahmanyam_Pulipaka.jpg'

// Speakers
import t4 from '@/public/trackIcons/t4.svg'


const PageContent = () => {

    const speakerPicSize = "30vw"

    return (
        <main className={dm_sans.className}>

            <TheHeroSection
                smallText='WELCOME T0'
                largeText="International Conference on Electrical, Electronics and Automation (E2A)"
                buttonsArray={
                    <div className="ButtonsArray flex gap-20px">
                        <Link href='#callForPapers'>Register</Link>
                        <Link href=''>Download Flyer</Link>
                        <Link href='#about'>Learn More</Link>
                    </div>
                }

                bigHero='true' />

            <div className='S1 SkewSection flex-v SkewSafeGap'>
                <div className="buffer">
                    <div className="buffer-1 flex-v gap_SkewSafeGap">
                        <section id="about" className="content-container">
                            <div className="content">
                                <h2>
                                    About E2A Conference
                                </h2>
                                <p>
                                   The International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where experts gather to explore, collaborate, and share groundbreaking research and innovations in the rapidly evolving fields of electrical engineering, electronics, and automation. E2A provides a vital platform for diverse professionals to exchange ideas and knowledge, fostering innovation and shaping a future powered by cutting-edge technologies. Join us at E2A to be part of this transformative journey towards a  smarter, more connected, and automated world, where your contributions are essential in shaping the future. Selected papers will be published in SCOPUS indexed proceedings
                                </p>
                            </div>
                        </section>
                        <section id="DocLinks" className="content-container">
                            <div className="content">
                                <h2>
                                    Some Important Links
                                </h2>
                                <ul className='grid'>
                                    <li className='flex-v'>
                                        <span>Code of Ethics</span><Link href='/'>View Here</Link>
                                    </li>
                                    <li className='flex-v'>
                                        <span>Author Instructions</span><Link href='/'>View Here</Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section id="sponsors" className="content-container">
                            <div className="content">
                                <h2>
                                    Industry Partner
                                </h2>
                                <ul className="grid">
                                    <li><Image
                                        src={amazon}
                                        // width={ 170 }
                                        height={42}
                                        alt="Amazon" />
                                    </li>
                                    <li><Image
                                        src={google}
                                        // width={ 170 }
                                        height={42}
                                        alt="Google" />
                                    </li>
                                    <li><Image
                                        src={microsoft}
                                        // width={ 170 }
                                        height={42}
                                        alt="Microsoft" />
                                    </li>
                                    <li><Image
                                        src={mit}
                                        // width={ 170 }
                                        height={42}
                                        alt="MIT" />
                                    </li>
                                    <li><Image
                                        src={texas}
                                        // width={ 170 }
                                        height={42}
                                        alt="Texas Instruments" />
                                    </li>
                                    <li><Image
                                        src={siemens}
                                        // width={ 170 }
                                        height={42}
                                        alt="Siemens" />
                                    </li>
                                </ul>
                                <TheSectionEndLink link="/sponsors" text="and Many More..."/>
                            </div>
                        </section>
                    </div>
                    <div className="buffer-2">
                        <TheTimeline />
                    </div>
                </div>
            </div>
            <div className='S2 SkewSection flex-v SkewSafeGap'>
                <section id='callForPapers' className="content-container">
                    <div className="content">
                        <h2>
                            Call for Papers
                        </h2>

                        <ul>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 1 </span>
                                    <span className="largeText">Advances in Electrical Systems</span>
                                    <Link href="/track1">Learn More</Link>
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 2 </span>
                                    <span className="largeText">Smart Electronics and Communications</span>
                                    <Link href="/track2">Learn More</Link>
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 3 </span>
                                    <span className="largeText">Instrumentation and Automation</span>
                                    <Link href="/track3">Learn More</Link>
                                </div>
                            </li>
                            <li>
                                <div className="art">
                                    <Image src={t4}/>
                                </div>
                                <div className="text">
                                    <span className="smallText">Track 4 </span>
                                    <span className="largeText">Emerging Technologies</span>
                                    <Link href="/track4">Learn More</Link>
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Special Track </span>
                                    <span className="largeText">Renewable Energy</span>
                                    <Link href="/track5">Learn More</Link>
                                </div>
                            </li>
                        </ul>

                    </div>
                </section>
                <section id='keynotes' className="content-container">
                    <div className="content">
                        <h2>
                            Keynotes from Industry Experts
                        </h2>
                        <ul>
                            <li>
                                <Image src={ Prof_Marta_Zurek_Mortka } width={ speakerPicSize } sizes={ speakerPicSize } alt='A Photograph of Prof. Marta Zurek-Mortka'/>
                                <div className="text">
                                    <span className="largeText">Prof. Marta Zurek-Mortka </span>
                                    <span className="smallText">Institute for Sustainable Technologies, Radom, Poland.</span>
                                </div>
                            </li>
                            <li>
                                <Image src={ Prof_Chris_Mi } width={ speakerPicSize } sizes={ speakerPicSize } alt='A Photograph of Prof. Chris Mi'/>
                                <div className="text">
                                    <span className="largeText">Prof. Chris Mi </span>
                                    <span className="smallText">San Diego State University, USA.</span>
                                </div>
                            </li>
                            <li>
                                <Image  src={ Prof_Nakai_Hirotaka } width={ speakerPicSize } sizes={ speakerPicSize } alt='A Photograph of Prof. Nakai Hirotaka'/>
                                <div className="text">
                                    <span className="largeText">Prof. Nakai Hirotaka </span>
                                    <span className="smallText">High Energy Accelerator Research Organization (KEK), Japan.</span>
                                </div>
                            </li>
                            <li>
                                <Image  src={ Dr_Ajay_Mathur } width={ speakerPicSize } sizes={ speakerPicSize } alt='A Photograph of Dr Ajay Mathur'/>
                                <div className="text">
                                    <span className="largeText">Dr. Ajay Mathur </span>
                                    <span className="smallText">Director General, International Solar Alliance.</span>
                                </div>
                            </li>
                            <li>
                                <Image  src={ Mr_Subrahmanyam_Pulipaka } width={ speakerPicSize } sizes={ speakerPicSize } alt='A Photograph of Mr. Subrahmanyam Pulipaka'/>
                                <div className="text">
                                    <span className="largeText">Mr. Subrahmanyam Pulipaka </span>
                                    <span className="smallText">CEO, National Solar Energy Federation of India.</span>
                                </div>
                            </li>

                        </ul>
                        <div>
                            <TheSectionEndLink link="/tickets" text={
                                <span className='flex jcc aic'>
                                    <Image src={ticket} height={32} sizes={32} className='w-fc h-fc' alt=''/>
                                    <span className='w-fc h-fc'>Get Your Tickets Now!</span>
                                </span>
                            } />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default PageContent
