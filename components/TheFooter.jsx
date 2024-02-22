import dm_sans from '@/components/TheFont'

import '@/styles/TheFooter.css'
import '@/styles/sections.css'

import Image from 'next/image'
import Link from 'next/link'

import pin_drop from "@/public/pin_drop.svg"
import badge from "@/public/badge.svg"

const TheFooter = () => {
    return (
        <footer className={dm_sans.className + " SkewSection content-container"}>
            <div className="content">
                <div className="buffer-a">
                    <section className="buffer-a1">
                        <Link href="/" className='brand'>
                            <h2>E2A Conference</h2>
                            <p>International Conference on Electrical, Electronics and Automation.</p>
                        </Link>
                        <article>
                            Organized by <br />
                            <Link href='https://www.nitj.ac.in' target='_blank'>Dr B R Ambedkar <br />National Institute of Technology, Jalandhar.</Link>
                        </article>
                    </section>
                    <section className="buffer-a2">

                        <article className='venue'>
                            <h3>Venue</h3>
                            <div className='iconed'>
                                <Image src={pin_drop} />
                                <address>
                                    Dr B R Ambedkar National Institute of Technology,
                                    G.T. Road, Amritsar Bypass, Jalandhar, Punjab, India. PIN : 144008
                                </address>
                            </div>
                        </article>

                        <article className='contact'>
                            <h3>Contact Us</h3>
                            <ul>
                                <li className='iconed'>
                                    <Image src={badge} />
                                    <div>
                                        <span className="name">Dr Afzal Sikander</span>
                                        <span className="flex jcsb">
                                            <Link href="mailto:afzals@nitj.ac.in">afzals@nitj.ac.in</Link><br />
                                            <Link href="tel:+917078438786">+91 70784 38786</Link>
                                        </span>

                                    </div>
                                </li>
                                <li className='iconed'>
                                    <Image src={badge} />
                                    <div>
                                        <span className="name">Dr Mamta Khosla</span>
                                        <span className="flex jcsb">
                                            <Link href="mailto:khoslam@nitj.ac.in">khoslam@nitj.ac.in</Link><br />
                                            <Link href="tel:+919888604632">+91 98886 04632</Link>
                                        </span>

                                    </div>
                                </li>
                            </ul>
                        </article>

                    </section>
                </div>
                <section className="buffer-b">
                    <p>Designed & Developed by <Link href="/student-coordinators">Student Coordinators Team</Link></p>
                </section>
            </div>
        </footer>
    )
}

export default TheFooter
