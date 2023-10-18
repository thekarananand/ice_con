import Image from 'next/image'

import nitjlogo from '../public/nitjlogo.png'

const _Nav_ = () => {
    return (
        <header className='flex aic jcsb'>

            <div className='Brand'>
                <a href="" className='flex aic'>
                    <Image
                        alt='NITJ'
                        src={ nitjlogo }
                        height={ 96 }
                    />
                    <div className="Brand-text">
                        <h2>Department of Instrumentation & Control Engineering</h2>
                        <div>Dr. B R Ambedkar National Institute of Technology, Jalandhar</div>
                    </div>

                </a>
            </div>

            <nav className='h-fc'>
                <div className="right">
                    <ul className='flex aic'>
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#topics">
                                Call for Papers
                            </a>
                        </li>
                        <li>Committee</li>
                        <li>Programs</li>
                        <li>Hotels & Travel</li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default _Nav_