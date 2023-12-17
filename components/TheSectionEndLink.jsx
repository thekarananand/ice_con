const TheSectionEndLink = ({ link="", text="" }) => {
    return (
        <div className="TheSectionEndLink w-100p flex jce">
            <a href={ link } className="no-td flex-v jcc aic">
                { text }
            </a>
        </div>
    )
}

export default TheSectionEndLink