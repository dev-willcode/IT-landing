import data from "./data.json";

export default class Repository {
  URL_BASE = "http://localhost:1337";

  getCarrera(): Record<string, any> {
    return data;
  }
  getProfesores(): Record<string, any> {
    return data.profesores;
  }
  getGaleria(): Record<string, any> {
    return data.galerias[0];
  }
}
