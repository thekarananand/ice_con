import _Footer_ from '@/components/_footer_'
import Image from 'next/image'

import hero_bg from '../public/sample_hero_bg.png'


const _PageContent_ = () => {
    return (
        <main>
            <section id='hero' className='_anchor_'>
            
                <Image alt='' src={ hero_bg }/>

                <div className='.dots z-4'>

                </div>

                <div className="data">
                    <h1>E2A Conference </h1>
                </div>
            </section>
            <section id='about' className='_anchor_'>
                <div className="data">
                    ABOUT #WELCOME
                </div>
            </section>
            <section className='_anchor_'>
                <div className="data">
                    IMPORTANT DATES
                </div>
            </section>
            <section id='topics' className='_anchor_'>
                <div className="data">
                    CALL FOR PAPERS
                </div>
            </section>
            <section>
                <div className="data">
                    SUBMIT
                </div>
            </section>
            <section>
                <div className="data">
                    SPONSORS
                </div>
            </section>
            <section>
                <div className="data">
                    VENUE
                </div>
            </section>
            
            <_Footer_/>
        </main>
    )
}

export default _PageContent_