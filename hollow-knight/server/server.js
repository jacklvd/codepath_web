import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));

// Use the custom middleware before handling /knights
app.use("/knights", router);

// Handle /knights
app.get("/knights", (req, res) => {
  res.status(200).redirect("/");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Hollow Knight API</h1>'
    );
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
