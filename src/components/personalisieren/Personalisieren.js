import './personalisieren.scss'

const Personalisieren = () => {

    const handleClick = () => {
        window.location.href = '/personalisieren-start'
    }

    return (
        <>
            <div className='cont'>
                <div className="personalisieren" >
                    <h1>ERSTELLEN SIE DAS OPTIMAL AUF SIE ANGEPASSTE PRODUKT</h1>
                    <p>Beantworten Sie einige Fragen und wir erstellen das Perfekte Produkt.</p>
                    <button onClick={handleClick} >PERSONALISIERUNG BEGINNEN</button>
                </div>
            </div>

        </>
    )
}

export default Personalisieren