import HomePage from './page'
import NavBar from './navbar'
import Bottom from './foot'
import '@/styles/global.css'

export const metadata = {
  title: "ICE CONFERENCE'24",
  description: "ICE CONFERENCE'24"
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <header>
          <NavBar/>
        </header>

        <div>
          <HomePage/>
        </div>

        <footer>
          <Bottom/>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout