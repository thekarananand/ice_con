
import '@/styles/TheSectionEndLink.css'

const TheSectionEndLink = (props) => {
    return (
        <div className="TheSectionEndLink w-100p flex jce">
            <a href={props.link} className="no-td flex-v jcc aic">
                {props.text}
            </a>
        </div>
    )
}

export default TheSectionEndLink