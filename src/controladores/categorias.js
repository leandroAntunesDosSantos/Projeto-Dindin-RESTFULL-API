const knex = require("../conexao");

const listarCategorias = async (req, res) => {
  try {
    const categoria = req.categoria;
    const listaCategoria = await knex("categorias").select("*");

    return res.status(200).json(listaCategoria.rows);
  } catch (erro) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

module.exports = {
  listarCategorias,
};
