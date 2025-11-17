import { felvesz, listaz } from "../data";

export default function UJAuto({autok, setautok}) {
    function onSave(){
        const rendszam = document.getElementById("rendszam").value;
        const evjarat = document.getElementById("evjarat").value*1;
        const fogyasztas = document.getElementById("fogyasztas").value*1;

        const ujauto = {
            rendszam: rendszam,
            evjarat:evjarat,
            fogyasztas:fogyasztas
        };

        felvesz(ujauto);
        setautok(listaz());

    }

    return(
        <section className="ujautok-section">
            <h2>Új autó felvétele</h2>
            <div className="uj-auto">
                <table>
                    <tbody>
                        <tr>
                            <td>Rendszam:</td>
                            <td>
                                <input type="text" name="rendszam" id="rendszam" required></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Évjárat:</td>
                            <td>
                                <input type="number" name="evjarat" id="evjarat" min={1988}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Fogyasztás</td>
                            <td>
                                <input type="number" name="fogyasztas" id="fogyasztas" step={0.1}></input>
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