import Image from 'next/image'

import '@/styles/TheCard.css'
import '@/styles/TheCard2.css'

const TheCard2 = ({ smallText = "", largeText = "", imageSrc="" }) => {

    const speakerPicSize = "30vw"

    return (
    
        <li className='theCard theCard2'>
            <Image  src={ imageSrc } width={ speakerPicSize } sizes={ speakerPicSize } alt={ 'A Photograph of ' + largeText }/>
            <div className="text">
                <span className="largeText">{ largeText }</span>
                <span className="smallText">{ smallText }</span>
            </div>
        </li>
    
    )
}

export default TheCard2