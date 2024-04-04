import Link from 'next/link'

import '@/styles/TheCard.css'
import '@/styles/TheCard1.css'

const TheCard1 = ({ smallText = "", largeText = "", link="" }) => {
    return (

        <li className='theCard theCard1'>
            <div className="art">
                {/* <Image src={ t4 } */}
            </div>
            <div className="text">
                <span className="smallText">{ smallText }</span>
                <span className="largeText">{ largeText }</span>
                <Link href={ link }>Learn More</Link>
            </div>
        </li>
    
    )
}

export default TheCard1



                            
