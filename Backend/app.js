



// backend/app.js (or server.js — your main express file)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { loginToSkySpark } = require("./skySparkLogin");

const fetch = (...args) => import("node-fetch").then(({ default: f }) => f(...args));

const app = express();
const PORT = process.env.PORT || 5001;

// Use the same host as in skySparkLogin.js
const SKY_HOST =  `${process.env.SKY_HOST}`;

// Frontend origins that are allowed to call this server
const FRONT_ORIGINS =`${process.env.CORS_ORIGINS.split(',')}`;

app.use(cors({
  origin: (origin, cb) => (!origin || FRONT_ORIGINS.includes(origin)) ? cb(null, true) : cb(new Error("Not allowed by CORS")),
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ⬇️ Your existing POST /api/skyspark-login stays as-is
app.post("/api/skyspark-login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const cookie = await loginToSkySpark(username, password);

    res.cookie(cookie.name, cookie.value, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/"
    });

    res.status(200).json({ message: "SkySpark login successful" });
  } catch (err) {
    console.error("SkySpark login failed:", err.message);
    res.status(401).json({ error: "Invalid credentials or SkySpark error" });
  }
});

// ✅ NEW: one-click login + redirect into SkySpark UI
// !!! Put your service credentials here (temporary hardcode since no .env) !!!
const SKY_USER = "your_service_username";
const SKY_PASS = "your_service_password";

app.get("/api/skyspark/login-and-redirect", async (req, res) => {
  const dest = req.query.dest || "/ui/nv5Office";
  try {
    const cookie = await loginToSkySpark(SKY_USER, SKY_PASS);

    // IMPORTANT: do not set 'domain' for an IP; keep it host-only
    res.cookie(cookie.name, cookie.value, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/"
    });

    const target = dest.startsWith("http")
      ? dest
      : `${process.env.SKY_HOST}${dest.startsWith("/") ? dest : `/${dest}`}`;

    return res.redirect(302, target);
  } catch (err) {
    console.error("SkySpark login-and-redirect failed:", err);
    return res.status(500).send("Unable to log in to SkySpark");
  }
});

// (Optional) your proxy stays the same
app.get("/api/skyspark/monthlyEsoView", async (req, res) => {
  const skyCookie = req.headers.cookie;
  if (!skyCookie || !skyCookie.includes("skyarc-auth")) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  try {
    const url = `${process.env.SKY_HOST}/api/citiCBP/eval?expr=monthlyEsoView()`;
    const r = await fetch(url, { headers: { Cookie: skyCookie } });
    const text = await r.text();
    res.set("Content-Type", "text/plain").send(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch SkySpark data" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://10.69.80.144:${PORT}`);
});
