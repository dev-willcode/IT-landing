import data from "./data.json";

export default class Repository {
  getCarrera(): Record<string, any> {
    return data;
  }
}
