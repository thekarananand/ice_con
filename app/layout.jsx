import _PageContent_ from './page'
import _Nav_ from '@/components/_nav_'

import '@/styles/global.css'



export const metadata = {
    title: "ICE CONFERENCE'24",
    description: "ICE CONFERENCE'24"
}

const RootLayout = () => {
    return (
        <html lang='en'>
            <body>
        
                <_Nav_/>
                <_PageContent_/>

            </body>
        </html>
    )
}

export default RootLayout