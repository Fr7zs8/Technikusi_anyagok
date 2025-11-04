import Header from "./components/header";
import CoreConcepts from "./components/core-concepts.jsx";
import Examples from "./components/examples.jsx";

function App() {
return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
