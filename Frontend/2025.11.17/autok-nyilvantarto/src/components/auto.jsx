export default function Auto({rendszam, evjarat, fogyasztas, ondelete}) {
    return(
        <div className="auto">
            <h3>{rendszam}</h3>
            <p>Évjárat: {evjarat}</p>
            <p>Fogyasztás: {fogyasztas} L</p>
            <button onClick={ondelete}>Törlés</button>
        </div>
    )
}