import { Form, redirect } from "react-router-dom";

export function Login() {
  return (
    <>
      <Form method="post">
        <h1 style={{ textAlign: "center" }}>Bejelentkezés</h1>

        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </p>
        <button className="btn">Bejelentkezés</button>
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

  if (res.status == 422 || res.status == 401) {
    return res;
  }

  if (!res.ok) {
    throw Response.json({ message: "Hibás authentikáció" });
  }

  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
}
