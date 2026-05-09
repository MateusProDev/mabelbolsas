const db = require("../database/db");

async function listar(req, res) {
  const produtos = await db.query(
    "SELECT * FROM produtos ORDER BY id ASC"
  );

  res.json(produtos.rows);
}

async function criar(req, res) {
  const { nome, preco } = req.body;

  const resultado = await db.query(
    `
    INSERT INTO produtos (nome, preco)
    VALUES ($1, $2)
    RETURNING *
    `,
    [nome, preco]
  );

  res.status(201).json(resultado.rows[0]);
}

async function atualizar(req, res) {
  const { id } = req.params;
  const { nome, preco } = req.body;

  const resultado = await db.query(
    `
    UPDATE produtos
    SET nome = $1, preco = $2
    WHERE id = $3
    RETURNING *
    `,
    [nome, preco, id]
  );

  res.json(resultado.rows[0]);
}

async function deletar(req, res) {
  const { id } = req.params; 

  await db.query(
    `
    DELETE FROM produtos
    WHERE id = $1
    `,
    [id]
  );

  res.json({
    mensagem: "Produto deletado",
  });
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar,
};