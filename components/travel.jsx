
import '@/styles/travel.css';

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

import bg_img from '../public/location/download.jpeg'

const trav=({wid = "" , onmouseover , locationName})=>{

    let visib ;

    

    if(wid ==35){
        visib = "visible"; 
    }
    else{
        visib = "hidden";
    }



    return(
        <section id='travel_sec' style={{width : `${wid}%`  }} onMouseOver = {onmouseover} >
            <div id="box" >
            <Image
                id="bgimg"
                className="HeroImg"
                src={bg_img}
                priority={true}
                alt="A Picture of NIT Jalandhar"
            />

                <div id="text" style={{visibility : `${visib}`}} >

                    <div>
                        <p>Place Name</p>
                        <p>description</p>
                    </div>
                        
                    <div id='icon'>
                        <a href= {`https://www.google.com/maps?q=${encodeURIComponent(locationName)}`} target="_blank">
                        <FontAwesomeIcon icon={faDiamondTurnRight} id="logo"  />
                        </a>
                    </div>
                        
                    

                    
                    
                </div>
            </div>
        </section>
    )
}

export default trav;