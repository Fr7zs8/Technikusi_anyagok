import { useEffect, useState } from "react";

export function Termekek() {
  const [termekek, setTermekek] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function handletermekek() {
      const res = await fetch("http://localhost:3000/termekek");
      const resData = await res.json();

      setTermekek(resData);
    }

    handletermekek();
  }, []);

  async function handleDelete(id) {
    const res = await fetch(`http://localhost:3000/termekek/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Törlés nem sikerült");
    }

    setTermekek((prev) => prev.filter((p) => p.id != id));
  }

  return (
    <>
      <h1>Pékségünk termékei</h1>

      <table>
        <thead>
          <tr>
            <th>Fénykép</th>
            <th>Megnevezés</th>
            <th>Fajta</th>
            <th>Kiszerelés</th>
            <th>Ízvilág</th>
            <th>Minden mentes</th>
            <th>Allergének</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {termekek.map((t) => {
            return (
              <tr key={t.id}>
                <td>
                  <img src={t.kepUrl} alt="kep" />
                </td>
                <td>{t.megnevezes}</td>
                <td>{t.fajta}</td>
                <td>{t.kiszereles}</td>
                <td>{t.iz}</td>
                <td>{t.mentes}</td>
                <td>{t.allergenek}</td>
                {token && (
                  <td>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="btn btn-danger"
                    >
                      Törlés
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
