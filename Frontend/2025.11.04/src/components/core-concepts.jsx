import CoreConcept from "./core-concept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return (
        <section id = "core-concepts">
            <ul>
                {CORE_CONCEPTS.map(item => (<CoreConcept key={item.title} {...item} />))}
            </ul>
        </section>
    )
    
}