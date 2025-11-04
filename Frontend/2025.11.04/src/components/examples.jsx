import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/tab-button"

export default function Examples(){
function handleSelect(selected){
    setSelectedButton(selected);
}
const [selectedButton, setSelectedButton] =  useState(undefined);
const buttons = ["Components", "JSX" , "Props", "State"]
return (
    <section id="examples">
        <h2>Examples</h2>
        <menu>
            {buttons.map(item => (<TabButton key={item} onselect={() => handleSelect(item.toLocaleLowerCase())} isActive={selectedButton ==item.toLocaleLowerCase()}>{item}</TabButton>))}
        </menu>
        <div id="tab-content">
            {!selectedButton && "Click the button for more information!"}
            {selectedButton && (
            <>
                <h3>{EXAMPLES[selectedButton].title}</h3>
                <p>{EXAMPLES[selectedButton].description}</p>
                <pre>
                <code>
                    {EXAMPLES[selectedButton].code}
                </code>
                </pre>
            </>
            )}
            
        </div>
    </section>
)
}