import { felvesz, listaz } from "../data";

export default function UjEsemeny({esemeny, setesemenyek}){
    function onSave(){
        const nev = document.getElementById("nev").value;
        const evszam = document.getElementById("evszam").value*1;
        const helyszin = document.getElementById("helyszin").value;

        const ujesemeny = {
            nev: nev,
            evszam:evszam,
            helyszin:helyszin
        }

        felvesz(ujesemeny);
        setesemenyek(listaz());
    }

    return (
        <section className="ujesemeny-section">
            <h2>Új esemény felvétele</h2>
            <div className="uj-esemeny">
                <table>
                    <tbody>
                        <tr>
                            <td>Esesmény neve:</td>
                            <td>
                                <input type="text" name="nev" id="nev" required />
                            </td>
                        </tr>
                        <tr>
                            <td>Esemény évszáma: </td>
                            <td>
                                <input type="number" min={0} name="evszam" id="evszam" />
                            </td>
                        </tr>
                        <tr>
                            <td>Esemény helyszíne:</td>
                            <td>
                                <input type="text" name="helyszin" id="helyszin" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={onSave}>Mentés</button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}