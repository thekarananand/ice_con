import Image from 'next/image'
import Script from 'next/script'

import nitjlogo from '../public/nitjlogo.png'


import { imageOptimizer } from 'next/dist/server/image-optimizer'

const _Nav_ = () => {
    return (
        <header className='flex aic jcsb'>

            <div className='Brand'>
                <a href="/" className='flex aic'>
                    <Image
                        alt='NITJ'
                        src={ nitjlogo }
                        height={ 96 }
                    />
                    <div className="Brand-text">
                        <h2>E2A Conference</h2>
                        <div>NIT Jalandhar</div>
                    </div>

                </a>
            </div>

            <button id='nav_toggle' data-expanded='false'>
                <span className='sr-only' >Menu</span>
            </button>

            <div id="blank_div" data-visible='false'></div>

            <nav id='nav' className='h-fc' data-visible='false'>
                <div className="right">
                    <ul className='flex aic'>
                        <li>
                            <a href="/registration">
                                Registration
                            </a>
                        </li>
                        <li>
                            <a href="/#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/#topics">
                                Call for Papers
                            </a>
                        </li>
                        <li>
                            <a href="/committee">
                                Committee
                            </a>
                        </li>
                        <li>Programs</li>
                        <li>Hotels & Travel</li>
                    </ul>
                </div>

            </nav>
            <Script src='/mobile_nav.js' />
        </header>
    )
}

export default _Nav_