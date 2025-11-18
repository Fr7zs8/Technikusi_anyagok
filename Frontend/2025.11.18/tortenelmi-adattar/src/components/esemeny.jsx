export default function Esemeny({nev, evszam, helyszin, ondelete}){
    return(
        <div className="esemeny">
            <h3>{nev}</h3>
            <p>Évszám: {evszam}</p>
            <p>Helyszín: {helyszin}</p>
            <button onClick={ondelete}>Törlés</button>
        </div>
    )
}