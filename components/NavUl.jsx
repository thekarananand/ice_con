"use client"

import Link from 'next/link'
import { useState } from "react"; 

const NavUl = () => {

    const [isOpen, setIsOpen] = useState('false')

    const Toggle = () => {
        if (isOpen == 'true') {
            setIsOpen('false')
        } else {
            setIsOpen('true')
        }
    }

    const CloseNav = () => {
        setIsOpen('false')
    }

    return (
        <>
            <button className='mobile-nav-toggle'
                aria-controls='Expandable-Nav'
                aria-expanded='false'
                onClick={ Toggle }>
                <span className="sr-only">
                    Navigation Menu
                </span>
            </button>
            <div id='Expandable-Nav' data-visible={ isOpen } >
                <div className='dark' onClick={ CloseNav }></div>
                <ul className='flex'>
                    <li aria-hidden='true'>
                        <Link href="/#about"
                        onClick={ CloseNav }>About</Link>
                    </li>
                    <li aria-hidden='true'>
                        <Link href="/#callForPapers"
                        onClick={ CloseNav }>Call for Papers</Link>
                    </li>
                    <li aria-hidden='true'>
                        <Link href="/programs"
                        onClick={ CloseNav }>Programs</Link>
                    </li>
                    <li aria-hidden='true'>
                        <Link href="/news"
                        onClick={ CloseNav }>News Release</Link>
                    </li>
                    <li aria-hidden='true'>
                        <Link href="/committee"
                        onClick={ CloseNav }>Committee</Link>
                    </li>
                    <li aria-hidden='true'>
                        <Link href="/travel"
                        onClick={ CloseNav }>Hotels & Travel</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavUl