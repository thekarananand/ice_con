// Next Lib
import Image from 'next/image'
import Link from 'next/link'

// SVG Components
import addtocalender from "@/public/addtocalender.svg"

import '@/styles/TheTimeline.css'

const TheTimeline = () => {
    return (
        <section id="timeline" className="content-container">
            <div className="content">
                <h2>
                    Timeline
                </h2>
                <ul className='flex-v gap-10px'>
                    <li>
                        <span className="Date">June 15<sup>th</sup>, 2024 </span>
                        <span className="Title">Paper Submission Begins</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Google Calendar" />
                        </Link>
                    </li>
                    <li>
                        <span className="Date">August 16<sup>th</sup>, 2024 </span>
                        <span className="Title">Paper Submission Ends</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Google Calendar" />
                        </Link>
                    </li>
                    <li>
                        <span className="Date">November 10<sup>th</sup>, 2024 </span>
                        <span className="Title">Review Process Ends</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Google Calendar" />
                        </Link>
                    </li>
                    <li>
                        <span className="Date">November 25<sup>th</sup>, 2024 </span>
                        <span className="Title">Camera Ready Paper</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Google Calendar" />
                        </Link>
                    </li>
                    <li>
                        <span className="Date">December 27<sup>th</sup>, 2024 </span>
                        <span className="Title">Conference Begins</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Google Calendar" />
                        </Link>
                    </li>
                    <li>
                        <span className="Date">December 28<sup>th</sup>, 2024 </span>
                        <span className="Title">Conference Ends</span>
                        <Link href="" target='_blank'>
                            <Image
                                src={addtocalender}
                                // width={ 170 }
                                height={32}
                                alt="Add to Calender" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}


export default TheTimeline