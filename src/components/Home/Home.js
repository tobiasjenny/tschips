import './home.scss'
import personalized from '../../assets/tschips-home.png'

const Home = () => {
    return (
        <>
            <div className="section-one">
                <p className="title-one" >Der Perfekt auf Sie angepasste Snack für zwischendurch. </p>
                <p className="content-one" >Tschips ist eine gesündere, auf Sie angepasste Alternative zu den herkömmlichen Chips. </p>
            </div>
            <div className='section-two'  >
                <div className='product-photo'><img src={personalized} alt='personalized-tschips' /></div>
                <div className='section-two-content'>
                    <p className='title-two'>Personalisiere deine Chips, Nähre deinen Körper</p>
                    <p className='subtitle-two'>Hol dir eine personalisierte Snack-Erfahrung mit unseren Gemüse- und Fruchtchips</p>
                    <p className='content-two'>Suchen Sie eine gesündere Alternative zu herkömmlichen Chips? Unsere getrockneten Gemüse- und Fruchtchips sind der perfekte Snack, um Ihren Körper zu versorgen.
                        Und was uns auszeichnet, ist unser einzigartiger Anpassungsprozess. Beantworten Sie einfach unseren Fragebogen und wir erstellen Ihnen ein Chip-Paket, das auf Ihre spezifischen Nährstoffbedürfnisse abgestimmt ist. Sag Ade
                        zu langweiligen, einheitsgrößen Chips und Hallo zu einem Snack, der so einzigartig ist wie Sie. Fangen Sie jetzt mit dem Personalisieren an!</p>
                    <div className='btn' >
                        <button className='persoBtn' >Personalisieren</button>
                    </div>
                </div>
            </div>
            <div className='section-three'>
                <div className='content-three-left'>
                    <p >„Ein neues Geschmackserlebnis: Unsere getrockneten Gemüsechips“ <br />Verabschieden Sie sich von langweiligen Kartoffelchips und probieren
                        Sie etwas Neues! Unsere getrockneten Gemüsechips bieten ein unvergleichliches Geschmackserlebnis und eine gesunde Alternative
                        zu herkömmlichen Snacks.</p>
                </div>
                <div className='content-three-right'>
                    <p>„Ein Snack mit Nutzen: Unsere medizinischen Gemüsechips“ <br />Unsere medizinischen Gemüsechips sind nicht nur lecker, sondern
                        auch gut für Ihre Gesundheit. Durch die Verwendung von natürlichen
                        Zutaten und die Möglichkeit der Personalisierung, können unsere
                        Chips auch bestimmte gesundheitliche Probleme lindern.</p>
                </div>
                <div className='content-three-left'>
                    <p >„Lecker und kalorienarm: Unsere Diät-Gemüsechips“<br />
                        Unsere Diät-Chips sind die perfekte Wahl für diejenigen,
                        die auf ihre Kalorien achten möchten. Sie enthalten wenig
                        Kalorien und Fett, aber dennoch wichtige Nährstoffe.
                        Genießen Sie eine leckere und gesunde Snack-Option,
                        die perfekt in Ihre Diät passt.</p>
                </div>
                <div className='content-three-right'>
                    <p >„Regional und Bio: Unsere getrockneten Gemüsechips“ <br />
                        Unsere Chips bestehen aus 100% regionalen und
                        biologischen Zutaten, die von einem Bio-Bauernhof
                        bezogen werden.Durch die Verwendung von
                        Zum Beispiel unförmigen Gemüse, können wir
                        Food Waste vermeiden und einen Beitrag zur
                        Nachhaltigkeit leisten.</p>
                </div>
            </div>
            <div className='section-four'>
                <div className='section-four-content'>
                    <p className='title-four'>Wie erstellen wir Perfekt auf sie angepasste Tschips?</p>
                    <p className='content-four'>Durch das Beantworten einiger Fragen erstellen wir eine personalisierte Chips-Packung,
                        die perfekt auf Ihre Bedürfnisse abgestimmt ist. Sie haben die Möglichkeit, die
                        Zusammensetzung der Packung anzupassen, falls Sie bestimmte Zutaten nicht mögen oder gegen Allergien sind.
                        Unsere Chips können Ihre Ernährung in jeder Lebenslage ergänzen und jede Packung
                        ist einzigartig, da sie verschiedene Früchte und Gemüse enthält,
                        die Ihre Defizite ausgleichen können.</p>
                </div>
            </div>
        </>
    )
}

export default Home