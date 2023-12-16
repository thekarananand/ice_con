import Image from 'next/image'
// import Script from 'next/script'

import nitjlogo from '../public/nitj_logo.png'

// import { imageOptimizer } from 'next/dist/server/image-optimizer'

import '@/styles/TheNavigation.css'

const TheNavigation = () => {
    return (
        <header className="content-container">
            <nav className="content flex aic jcsb">
                <a href="" className='left no-td flex jcc aic gap-5px'>
                    <Image
                        src={ nitjlogo }
                        width={52}
                        alt='NIT Jalandhar'
                    />
                    <span>/</span>
                    <h2>E2A Conference</h2>
                </a>
                <div>right</div>
            </nav>
        </header>
    )
}

export default TheNavigation