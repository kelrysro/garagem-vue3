import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarca() {
    const { data } = await axios.get("/marcas/");
    return data.results;
  }
  async adicionarMarcas(marcas) {
    const { data } = await axios.post("/marcas/", marcas);
    return data.results;
  }
  async atualizarMarcas(marcas) {
    const { data } = await axios.put(`/marcas/${marcas.id}/`, marcas);
    return data.results;
  }
  async excluirMarcas(id) {
    const { data } = await axios.delete(`/marcas/${id}/`);
    return data.results;
  }
}