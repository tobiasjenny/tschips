const Fragen = () => {

    const results = 
        {
            kartoffel: 2,
            suesskartoffel:3,
            gruenkohl: 0,
            rotebeete: 0,
            karotten: 0,
            sellerie: 0,
            zucchini: 0,
            avocado: 0,
            ingwer: 0,
            feldsalat: 0,
            gewuerznelken: 0,
        }
        
        const handleMuede = (value) => {
            if (value === '3') {
                results.rotebeete += 1
                results.ingwer +=1
            }
        }

        const handleRein = (value) => {
            if (value === '3') {
                results.gruenkohl +=1
            }
        }

        const handleVergesslich = (value) => {
            if (value === '3') {
                results.avocado +=1
            }
        }

        const handleSport = (value) => {
            console.log(value);
            if (value === '3') {
                results.gruenkohl +=2
                results.karotten +=2
                results.sellerie +=2
                results.rotebeete +=2
            }
            if (value === '2') {
                results.gruenkohl +=1
                results.karotten +=1
                results.sellerie +=1
                results.rotebeete +=1
            }
        }

        const handleStress = (value) => {
            if (value === '3') {
                results.gruenkohl +=1
            }
        }

        const handleSleep = (value) => {
            if (value === '3') {
                results.gewuerznelken +=1
            }
        }

        const handleKonzentration = (value) => {
            if (value === '3') {
                results.feldsalat +=1
            }
        }

        const handleMuskelkater = (value) => {
            if (value === '3') {
                results.ingwer +=1
            }
        }

        const getResult = () => {
            console.log(results);
        }


    return (
        <>
            <div className="fragenCont">
                <h2><span>Öfters Müde</span><span>Voller Energie</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleMuede(e.target.value)} on />
                <h2><span>Unreine Haut</span><span>Reine Haut</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleRein(e.target.value)}/>
                <h2><span>Vergesslich</span><span>Erinnere mich an alles</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleVergesslich(e.target.value)}/>
                <h2><span>0-1 mal</span><span>2-4 mal</span><span>5+</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleSport(e.target.value)}/>
                <h2><span>Kein Stress</span><span>Sehr gestresst</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleStress(e.target.value)}/>
                <h2><span>Keine Probleme</span><span>Schlafprobleme</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleSleep(e.target.value)}/>
                <h2><span>Immer Konzentriert</span><span>Konzentrationsprobleme</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleKonzentration(e.target.value)}/>
                <h2><span>Nie Muskelkater</span><span>Oft Muskelkater</span></h2>
                <input type="range" min="1" max="3"   defaultValue="1" onChange={(e)=> handleMuskelkater(e.target.value)}/>
                <button onClick={getResult} >Weiter</button>
            </div>
            
        </>
    )
}

export default Fragen