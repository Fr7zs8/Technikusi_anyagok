import { cloneElement, use, useEffect, useState } from "react";

export function Allatok() {
  const [allatok, setAllatok] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function handleAllatok() {
      const res = await fetch("http://localhost:3000/allatok");
      const resData = await res.json();

      resData.sort((a, b) => a.gondozo.localeCompare(b.gondozo));

      setAllatok(resData);
    }

    handleAllatok();
  }, []);

  async function handleDelete(id) {
    const res = await fetch(`http://localhost:3000/allatok/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setAllatok((perv) => perv.filter((a) => a.id != id));
    }
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Állatkertünk jelenlegi lakói</h1>
      <table>
        <thead>
          <tr>
            <th>Állat neve</th>
            <th>Faj</th>
            <th>Gondózoja</th>
            <th>Helye az állatkertben</th>
            <th>Érkezése</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          {allatok.map((a) => {
            return (
              <tr key={a.id}>
                <td>{a.nev}</td>
                <td>{a.faj}</td>
                <td>{a.gondozo}</td>
                <td>{a.helye}</td>
                <td>{a.erkezes}</td>
                {token && (
                  <td>
                    <button
                      onClick={() => handleDelete(a.id)}
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
