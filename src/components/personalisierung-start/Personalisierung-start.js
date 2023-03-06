

const StartPersonalisierung = () => {

    const handleClick = () => {
        window.location.href = '/fragen'
    }

    return (
        <>
            <div className="start-cont">
                <h3>Wie heissen Sie?</h3>
                <input type="text" placeholder="Ihr Name" />
                <h3>Geschlecht?</h3>
                <select name="geschlecht" id="geschlecht" >
                    <option value="männlich">Männlich</option>
                    <option value="weiblich">Weiblich</option>
                    <option value="divers">Divers</option>
                    <option value="keineAngabe">Keine Angabe</option>
                </select>
                <h3>Wie alt sind Sie?</h3>
                <input type="text" placeholder="Ihr Alter" />
                <button onClick={handleClick} >Weiter</button>
            </div>
        </>
    )
}

export default StartPersonalisierung