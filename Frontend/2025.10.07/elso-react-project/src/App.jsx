import "./App.css";
import Header from "./content/header";
import Sidebar from "./content/sidebar";
import MainContent from "./content/main-content";
import Footer from "./content/footer";

export default function App() {
  //let kedvencSzin = "piros";
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
      {/* <h2>Számolni is lehet vele: {1 + 1}</h2>
      <h2>A kedvenc szinem a {kedvencSzin}</h2> */}
    </>
  );
}
