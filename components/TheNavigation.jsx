import Image from 'next/image'
import Link from 'next/link'
import nitjlogo from '../public/nitj_logo.png'

import NavUl from './NavUl'

import '@/styles/TheNavigation.css'

import dm_sans from '@/components/TheFont'


const TheNavigation = () => {
    return (
        <header className={dm_sans.className + " content-container"}>
            <nav className="content flex aic jcsb">
                <Link href="/" className='left no-td flex jcc aic gap-5px'>
                    <Image
                        src={nitjlogo}
                        width={52}
                        alt='NIT Jalandhar'
                    />
                    <span>/</span>
                    <h2>E2A Conference</h2>
                </Link>
                <NavUl/>
            </nav>
        </header>
    )
}

export default TheNavigation