import { listaz, torol } from "../data"
import Auto from "./auto"

export default function Autok({autok, setautok}) {
    function deleteAuto(rendszam){
        torol(rendszam);
        setautok(listaz());
    }


    return(
        <section className="autok-section">
            <h2>Autók listája</h2>
            <div className="autok">
                {autok.map(auto => <Auto {...auto} ondelete={()=> deleteAuto(auto.rendszam)} key={auto.rendszam}/>)}
            </div>
        </section>
    )
}