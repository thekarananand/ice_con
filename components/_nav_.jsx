import Image from 'next/image'

import nitjlogo from '../public/nitjlogo.png'

const _Nav_ = () => {
    return (
        <header >

            <div className='Brand'>
                <a href="/">
                    <Image
                        alt='NITJ'
                        src={ nitjlogo }
                    />
                </a>
            </div>

            <nav>
                {/* <div className="left">
                    <h2>Department of Instrumentation & Control Engineering</h2>
                    <div>Dr. B R Ambedkar National Institute of Technology, Jalandhar</div>
                </div>

                <div className="right">
                    <ul>
                        <li>About</li>
                        <li>Call for Papers</li>
                        <li>Committee</li>
                        <li>Programs</li>
                        <li>Hotels & Travel</li>
                    </ul>
                </div> */}

            </nav>
        </header>
    )
}

export default _Nav_