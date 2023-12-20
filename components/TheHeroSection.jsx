import dm_sans from '@/components/TheFont'

import '@/styles/TheHeroSection.css'

import Image from 'next/image'
import hero_bg from '../public/Cover.png'

const TheHeroSection = ({ smallText = "", largeText = "", buttonsArray="" }) => {
    return (
        <section className={ dm_sans.className + " HeroSection content-container"}>

            <div className="text content">
                <span className='smallText'>{ smallText }</span>
                <h1 className='largeText'>{ largeText }</h1>
                { buttonsArray }            
            </div>
           <Image
                className="HeroImg"
                src={hero_bg}
                width="80vw"
                sizes="80vw"
                priority={true}
                alt="A Picture of NIT Jalandhar"
            />
        </section>
    )
}

export default TheHeroSection