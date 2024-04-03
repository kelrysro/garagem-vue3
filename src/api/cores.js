import axios from "axios";
export default class CorApi {
  async buscarTodasAsCor() {
    const { data } = await axios.get("/cores/");
    return data.results;
  }
  async adicionarCor(cores) {
    const { data } = await axios.post("/cores/", cores);
    return data.results;
  }
  async atualizarCor(cores) {
    const { data } = await axios.put(`/cores/${cores.id}/`, cores);
    return data.results;
  }
  async excluirCor(id) {
    const { data } = await axios.delete(`/cores/${id}/`);
    return data.results;
  }
}