import HomePage from './page'
import NavBar from '@/components/navbar'
import FooterArea from '@/components/footerarea'
   
import '@/styles/global.css'

export const metadata = {
  title: "ICE CONFERENCE'24",
  description: "ICE CONFERENCE'24"
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        
        <NavBar/>
        <HomePage/>
        <FooterArea/>
        
      </body>
    </html>
  )
}

export default RootLayout