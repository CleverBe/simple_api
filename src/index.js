import express from "express";

const port = 3000;
const app = express();

app.get("/hello", async (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
