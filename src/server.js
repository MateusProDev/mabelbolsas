const express = require("express");
const cors = require("cors");

const produtosRoutes = require("./routes/produtos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});