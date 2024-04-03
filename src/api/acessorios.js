import axios from "axios";
export default class AcessoriosApi {
  async buscarTodasAsAcessorios() {
    const { data } = await axios.get("/acessorios/");
    return data.results;
  }
  async adicionarAcessorios(acessorios) {
    const { data } = await axios.post("/acessorios/", acessorios);
    return data.results;
  }
  async atualizarAcessorios(acessorios) {
    const { data } = await axios.put(`/acessorios/${acessorios.id}/`, acessorios);
    return data.results;
  }
  async excluirAcessorios(id) {
    const { data } = await axios.delete(`/acessorios/${id}/`);
    return data.results;
  }
}