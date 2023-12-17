import dm_sans from '@/components/TheFont'

const TheFooter = () => {
    return (
        <footer className={ dm_sans.className + " content-container" }>
            <div className="content">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <a href="">Link 4</a>
                <div>
                    Designed & Developed in-house by <a href="">Student Coordinators Committee</a>
                </div>
            </div>
        </footer>
    )
}

export default TheFooter