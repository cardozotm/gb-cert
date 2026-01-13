/* eslint-disable no-console */
const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const PATHS = {
  LAYOUT_CONFIG: path.join(__dirname, "layout.json"),
};

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use("/templates", express.static(path.join(__dirname, "templates")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));

// Serve layout.json
app.get("/layout.json", (req, res) => {
  res.sendFile(PATHS.LAYOUT_CONFIG);
});

// Export app for testing
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;

