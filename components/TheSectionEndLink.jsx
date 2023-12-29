import '@/styles/TheSectionEndLink.css'
import Link from 'next/link'

const TheSectionEndLink = ({ link="", text="" }) => {
    return (
        <div className="TheSectionEndLink w-100p flex jce">
            <Link href={ link } className="no-td flex-v jcc aic">
                { text }
            </Link>
        </div>
    )
}

export default TheSectionEndLink