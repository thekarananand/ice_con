import _PageContent_ from './page'
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'

import '@/styles/global.css'
import '@/styles/commonClasses.css'
import '@/styles/header.css'
import '@/styles/section.css'

export const metadata = {
    title: "E2A Conference",
    description: "ICE CONFERENCE'24"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                
                <TheNavigation/>
                { children }
                <TheFooter/>

            </body>
        </html>
    )
}

export default RootLayout