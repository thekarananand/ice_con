// Next Image Lib
import Image from 'next/image'

// SVG Components
import addtocalender from "@/public/addtocalender.svg"
import ticket from "@/public/ticket.svg"

// Sponsors Components
import amazon from "@/public/sponsors/amazon.svg"
import google from "@/public/sponsors/google.svg"
import microsoft from "@/public/sponsors/microsoft.svg"
import mit from "@/public/sponsors/mit.svg"
import texas from "@/public/sponsors/texas.svg"
import siemens from "@/public/sponsors/siemens.svg"

// Next Font Custom Components
import dm_sans from '@/components/TheFont'

// Custom Components
import TheHeroSection from '@/components/TheHeroSection'
import TheSectionEndLink from '@/components/TheSectionEndLink'

const PageContent = () => {
    return (
        <main className={dm_sans.className}>

            <TheHeroSection
                smallText='WELCOME T0'
                largeText="International Conference on Electrical, Electronics and Automation (E2A)"
                buttonsArray={
                    <div className="ButtonsArray flex gap-20px">
                        <a href='#callForPapers'>Register</a>
                        <a href=''>Download Flyer</a>
                    </div>
                } />

            <div className='SkewSection flex-v SkewSafeGap'>
                <div className="buffer">
                    <div className="buffer-1">
                        <section id="about" className="content-container">
                            <div className="content">
                                <h2>
                                    About E2A Conference
                                </h2>
                                <p>
                                    The International Conference on Electrical, Electronics, and Automation (E2A) serves as a global hub where experts gather to explore, collaborate, and share groundbreaking research and innovations in the rapidly evolving fields of electrical engineering, electronics, and automation. E2A provides a vital platform for diverse professionals to exchange ideas and knowledge, fostering innovation and shaping a future powered by cutting-edge technologies. Join us at E2A to be part of this transformation journey towards a smarter, more connected, and automated world, where your contributions are essential in shaping the future.
                                </p>
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
                        <section id="timeline" className="content-container">
                            <div className="content">
                                <h2>
                                    Timeline
                                </h2>
                                <ul className='flex-v gap-10px'>
                                    <li>
                                        <span className="Date">February 1<sup>st</sup>, 2024 </span>
                                        <span className="Title">Paper Submission Begins</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Google Calender" />
                                        </a>
                                    </li>
                                    <li>
                                        <span className="Date">April 30<sup>th</sup>, 2024 </span>
                                        <span className="Title">Paper Submission Ends</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Google Calender" />
                                        </a>
                                    </li>
                                    <li>
                                        <span className="Date">July 1<sup>st</sup>, 2024 </span>
                                        <span className="Title">Review Process Ends</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Google Calender" />
                                        </a>
                                    </li>
                                    <li>
                                        <span className="Date">July 13<sup>th</sup>, 2024 </span>
                                        <span className="Title">Camera Ready Paper</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Google Calender" />
                                        </a>
                                    </li>
                                    <li>
                                        <span className="Date">August 16<sup>th</sup>, 2024 </span>
                                        <span className="Title">Conference Begins</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Google Calender" />
                                        </a>
                                    </li>
                                    <li>
                                        <span className="Date">August 18<sup>th</sup>, 2024 </span>
                                        <span className="Title">Conference Ends</span>
                                        <a target='_blank' href="">
                                            <Image
                                                src={addtocalender}
                                                // width={ 170 }
                                                height={32}
                                                alt="Add to Calender" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='SkewSection flex-v SkewSafeGap'>
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
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 2 </span>
                                    <span className="largeText">Smart Electronics and Communications</span>
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 3 </span>
                                    <span className="largeText">Instrumentation and Automation</span>
                                </div>
                            </li>
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Track 4 </span>
                                    <span className="largeText">Emerging Technologies</span>
                                </div>
                            </li>
                            {/* <div className="dummy"></div> */}
                            <li>
                                <div className="art"></div>
                                <div className="text">
                                    <span className="smallText">Special Track </span>
                                    <span className="largeText">Renewable Energy</span>
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
                                <Image alt='A Photograph of Prof. Weerakorn Ongsakul'/>
                                <div className="text">
                                    <span className="largeText">Prof. Weerakorn Ongsakul </span>
                                    <span className="smallText">Department of Energy, AIT, Thailand.</span>
                                </div>
                            </li>
                            <li>
                                <Image alt='A Photograph of Prof. Marta Zurek-Mortka'/>
                                <div className="text">
                                    <span className="largeText">Prof. Marta Zurek-Mortka </span>
                                    <span className="smallText">Institute for Sustainable Technologies, Radom, Poland.</span>
                                </div>
                            </li>
                            <li>
                                <Image alt='A Photograph of Prof. Chris Mi'/>
                                <div className="text">
                                    <span className="largeText">Prof. Chris Mi </span>
                                    <span className="smallText">San Diego State University, USA.</span>
                                </div>
                            </li>
                            <li>
                                <Image alt='A Photograph of Prof. Nakai Hirotaka'/>
                                <div className="text">
                                    <span className="largeText">Prof. Nakai Hirotaka </span>
                                    <span className="smallText">High Energy Accelerator Research Organization (KEK), Japan.</span>
                                </div>
                            </li>
                            <li>
                                <Image alt='A Photograph of Dr Ajay Mathur'/>
                                <div className="text">
                                    <span className="largeText">Dr Ajay Mathur </span>
                                    <span className="smallText">Director General, International Solar Alliance.</span>
                                </div>
                            </li>
                            <li>
                                <Image alt='A Photograph of Mr. Subrahmanyam Pulipaka'/>
                                <div className="text">
                                    <span className="largeText">Mr. Subrahmanyam Pulipaka </span>
                                    <span className="smallText">CEO, National Solar Energy Federation of India.</span>
                                </div>
                            </li>

                        </ul>
                        <div>
                            <TheSectionEndLink link="/tickets" text={
                                <span className='flex jcc aic'>
                                    <Image src={ticket} height={24} className='w-fc h-fc' alt=''/>
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