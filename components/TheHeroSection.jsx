// import Image from 'next/image'
// import Script from 'next/script'

// import nitjlogo from '../public/nitj_logo.png'


import Image from 'next/image'

import hero_bg from '../public/Cover.png'

// import { imageOptimizer } from 'next/dist/server/image-optimizer'


const TheHeroSection = () => {
    return (
        <section className="HeroSection">
            <Image
                className="HeroImg"
                src={hero_bg}
                width="100vw"
                alt="A Picture of NIT Jalandhar"/>
        </section>
    )
}

export default TheHeroSection