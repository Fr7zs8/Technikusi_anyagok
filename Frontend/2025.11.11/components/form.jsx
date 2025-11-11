export default function Form({add}){
    return(
        <div>
            <form>
            <h2>Személy felvétel:</h2>
            <label>Név:</label>
            <input id="name" type="text"></input>
            <br></br>
            <label>E-mail:</label>
            <input id="email" type="text"></input>
            <br></br>
            <label>Életkor</label>
            <input id="kor" type="number"></input>
            <br></br>
            <button type="button" onClick={add}>Felvétel</button>
            </form>
        </div>
    )
}

