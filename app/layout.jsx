import Head from "next/head"

import PageContent from './page'
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'


import '@/styles/commonClasses.css'
import '@/styles/sections.css'

import favicon from '@/public/favicon.ico'

export const metadata = {
    title: "E2A Conference",
    description: "ICE CONFERENCE'24"
}


const RootLayout = ({ children }) => {
    return (

        <html lang='en'>
            <Head>
                <link rel="icon" href={ favicon.src } />
            </Head>
            <body>
                
                <TheNavigation/>
                { children }
                <TheFooter/>

            </body>
        </html>
    )
}

export default RootLayout