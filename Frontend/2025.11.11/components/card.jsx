export default function Card({name, email, age}){
    return (
        <div className="card">
            <h3>Név: {name}</h3>
            <h3>E-mail: {email}</h3>
            <h3>Életkor: {age}</h3>
        </div>
    )
}