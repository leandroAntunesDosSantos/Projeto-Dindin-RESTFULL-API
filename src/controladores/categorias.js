const knex = require("../conexao");

const listarCategorias = async (req, res) => {
  try {
    const listaCategoria = await knex("categorias")
    return res.status(200).json(listaCategoria);
  } catch (erro) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

module.exports = {
  listarCategorias,
};
