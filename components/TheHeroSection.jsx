import '@/styles/TheHeroSection.css'

import Image from 'next/image'
import hero_bg from '../public/Cover.png'

const TheHeroSection = (props) => {
    return (
        <section className="HeroSection content-container">

            <div className="text content">
                <span className='smallText'>{ props.smallText }</span>
                <h1 className='largeText'>{ props.largeText }</h1>
                { props.buttonsArray }            
            </div>
           <Image
                className="HeroImg"
                src={hero_bg}
                width="80vw"
                sizes="80vw"
                alt="A Picture of NIT Jalandhar"
            />
        </section>
    )
}

export default TheHeroSection