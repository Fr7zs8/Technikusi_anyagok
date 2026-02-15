import kep from "../assets/indexkep.jpg";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigation("/");
  }
  return (
    <>
      <h1>Pékség</h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>
              A pékség olyan létesítmény, amely kemencében sült lisztalapú
              ételeket, például kenyeret, kekszeket, süteményeket, fánkot,
              péksüteményeket és pitéket állít elő és értékesít.
            </p>
            <p>
              Vedd fel velünk még ma a kapcsolatot elérhetőségeink egyikén, vagy
              ugorj be reggeli-, ebéd-, vagy vacsoraidőben finomságainkért!{" "}
            </p>
            <h2>Nyitvatartás</h2>
            <p>
              <strong>Hétfő-Péntek: </strong> 07:00- 17:00
            </p>
            <p>
              <strong>Szombat: </strong>08:00-14:00
            </p>
            <p>
              <strong>Vasárnap: </strong>08:00-14:00
            </p>
          </div>
          <div className="col-6">
            <img src={kep} alt="pékárú" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to={"/termekek"} className="btn btn-warning">
              Termékeink
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
    </>
  );
}
