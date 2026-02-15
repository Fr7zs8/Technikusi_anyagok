import { Form, redirect } from "react-router-dom";

export function Login() {
  return (
    <>
      <Form method="post">
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="password">Jelszó: </label>
          <input type="password" name="password" id="password" required />
        </p>

        <button className="btn btn-success">Bejelentkezés</button>
      </Form>
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (!res.ok) {
    throw new Error("Nem jó valami");
  }

  const resData = await res.json();

  const token = resData.token;

  localStorage.setItem("token", token);
  return redirect("/");
}
