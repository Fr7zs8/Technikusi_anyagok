import Header from "./components/header";
import CoreConcept from "./components/core-concept";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/tab-button.jsx";


function App() {
  let dynamicContent = "Click a button to more information!";

  function handleSelect(selectedButton){
    dynamicContent = `You selected the ${selectedButton} button!`;
    console.log(`${selectedButton} works!`);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id = "core-concepts">
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onselect={() => handleSelect("Componens")}>Components</TabButton>
            <TabButton onselect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onselect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onselect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {dynamicContent}
        </section>
      </main>
    </div>
  );
}

export default App;
