import axios from 'axios';

const api = axios.create({
  baseURL:'https://dooble-hookah.herokuapp.com'
})

export const category_data = [
  {"key":"TOBACCO","title":"Essência"},
  {"key":"BEER","title":"Cerveja"},
  {"key":"DISTILLED","title":"Destilado"},
  {"key":"NO_ALCOHOL","title":"Sem Àlcool"},
  {"key":"ICE","title":"Gelo"},
  {"key":"COAL","title":"Carvão"},
  {"key":"DISPOSABLE","title":"Descartaveis"}
]

export default api;