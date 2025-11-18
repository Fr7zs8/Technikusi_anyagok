import { listaz, torol } from "../data";
import Esemeny from "./esemeny"

export default function Esemenyek({esemenyek, setesemenyek}){
    function deleteEseemeny(nev){
        torol(nev);
        setesemenyek(listaz())
    }

    return (
        <section className="esemenyek-section">
            <h2>Események listája</h2>
            <div className="esemenyek">
                {esemenyek.map(e => <Esemeny {...e} key={e.nev} ondelete={() => deleteEseemeny(e.nev)}/>)}
            </div>
        </section>
    )
}