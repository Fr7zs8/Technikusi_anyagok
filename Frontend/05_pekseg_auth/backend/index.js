const bodyParser = require("body-parser");
const express = require("express");
const {termekek} = require("./data/pekaruk");
const { sign, verify } = require("jsonwebtoken");
const { NotAuthError } = require("./data/errors");

let tmpTermekek = [...termekek];
const KEY = "titkoskulcs";

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Hiba történt....";
  res.status(status).json({ message: message });
});

function createToken(email) {
  return sign({ email }, KEY, { expiresIn: "1d" });
}

function validateJSONToken(token) {
  return verify(token, KEY);
}

function checkAuth(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }
  if (!req.headers.authorization) {
    console.log("NOT AUTH. AUTH HEADER MISSING.");
    return next(new NotAuthError("Not authenticated."));
  }
  const authFragments = req.headers.authorization.split(" ");

  if (authFragments.length !== 2) {
    console.log("NOT AUTH. AUTH HEADER INVALID.");
    return next(new NotAuthError("Not authenticated."));
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = validateJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    console.log("NOT AUTH. TOKEN INVALID.");
    return next(new NotAuthError("Not authenticated."));
  }
  next();
}

app.post("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!(email == "dev@bolyai.hu" && password == "titkos")) {
    return res.status(422).json({
      message: "Invalid bejelentkezési adatok",
      errors: { credentials: "Invalid email cím vagy jelszó lett beírva!" },
    });
  }

  const token = createToken(email);
  res.json({ token });
});

app.get("/termekek", (req, res) => {
  res.json(tmpTermekek);
});

app.use(checkAuth);

app.delete("/termekek/:id", (req, res) => {
      
    const id = req.params.id;
    const termek = tmpTermekek.find((t) => t.id == id);

    if (!termek)
      return response.status(404).json({ message: "Termék nem található" });

    tmpTermekek = tmpTermekek.filter((t) => t.id != id);

    res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Backend server is working on localhost:3000!");
});
