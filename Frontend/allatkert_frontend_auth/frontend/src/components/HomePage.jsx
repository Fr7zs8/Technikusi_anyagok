import kep from "../assets/allatok.jpg";
import { Link, useNavigate } from "react-router-dom";

export function HomePage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Szimba Állatkert</h1>

      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-6">
            <Link to={"/allataink"} className="btn btn-primary">
              Állataink
            </Link>
          </div>
          <div className="col-6">
            {token && (
              <button onClick={handleLogout} className="btn btn-danger">
                Kijelentkezés
              </button>
            )}
            {!token && (
              <Link to={"/login"} className="btn btn-success">
                Bejelentkezés
              </Link>
            )}
          </div>
        </div>
      </div>

      <p>
        A Fővárosi Állat- és Növénykert (népszerű nevén az Állatkert)
        Magyarország legrégebbi és a legnagyobb gyűjteménnyel rendelkező
        állatkertje. Budapest XIV. kerületében, a Városligetben található az
        Állatkerti körút 6–12. szám alatt, területe, ami 1986 óta
        természetvédelmi terület 18,4 hektár.
      </p>
      <p>
        1866-os megnyitásától egészen az 1950-es évekig, az első vidéki
        állatkertek megalapításáig az ország egyetlen ilyen intézménye volt. Ma
        Magyarország egyik leglátogatottabb kulturális közintézménye: évente
        1–1,1 millió látogatója van. A korszerű állatkertek többségéhez
        hasonlóan fő tevékenységi köre a természetvédelem, az oktatás,
        természetközeli szabadidős programok biztosítása, valamint a tudományos
        kutatás. Történetéből és ezzel összefüggő sajátosságaiból adódóan
        további célkitűzései közé tartozik a kulturális örökség védelme és
        gazdagítása is.
      </p>

      <h2>Alapítása</h2>

      <p>
        Egy magyarországi állatkert alapításának gondolata már a reformkorban,
        az 1830-as, 1840-es években felvetődött. Az 1848–49-es forradalom és
        szabadságharc, majd az utána következő évek viszonyai azonban nem
        kedveztek a létesítésnek. Hosszabb szünet után, 1859-ben került szóba
        ismét a létesítendő állatkert ügye. Az alapítási eszme úttörői közül
        Xántus János zoológus, etnográfus és utazó, Szabó József geológus
        professzor, Kubinyi Ágoston, a Magyar Nemzeti Múzeum akkori igazgatója
        és Gerenday József, a Füvészkert igazgatója volt a leginkább tevékeny.
      </p>
      <p>
        Bár a terv lelkes fogadtatásra talált, sőt, 1863-ban a Magyar Tudományos
        Akadémia is pártolólag foglalkozott az üggyel, a kivitelezésnek
        kezdetben számos, nagyrészt bürokratikus akadálya volt. Végül 1864-ben,
        a Magyar Királyi Helytartótanács jóváhagyásával megalakulhatott az
        „Állatkerti Részvénytársulat”. A szükséges tőkét részvényjegyek
        kibocsátásával igyekeztek biztosítani. Időközben Pest Szabad Királyi
        Városánál sikerült elérni, hogy 1865. szeptember 5-én, az akkor még
        Városerdőnek nevezett Városligetből 31 katasztrális hold és 600
        négyszögöl (mintegy 18 hektár) területet a város harmincévi használatra
        díjmentesen (pontosabban évi egy arany jelképes bérleti díj fejében)
        átengedjen állatkert létesítése céljából.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Érdekességek:</h2>

            <ul>
              <li>több, mint 700 különböző faj</li>
              <li>220 állatkerti dolgozó</li>
              <li>növényház az állatkertben</li>
              <li>dinoszaurusz kiállítás</li>
              <li>színes programok minden hétvégén</li>
              <li>kiscsoportos foglalkozások hétköznap</li>
              <li>örökbefogadási program</li>
              <li>terápiás állatok</li>
            </ul>
          </div>
          <div className="col-6">
            <img src={kep} alt="allatok" />
          </div>
        </div>
      </div>
    </>
  );
}
