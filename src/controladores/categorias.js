const pool = require("../conexao");

const listarCategorias = async (req, res) => {
  try {
    const categoria = req.categoria;
    const listaCategoriaI = await pool.query("select * from categorias");

    return res.status(200).json(listaCategoriaI.rows);
  } catch (erro) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

module.exports = {
  listarCategorias,
};
