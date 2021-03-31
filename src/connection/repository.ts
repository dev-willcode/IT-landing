import { DEV_MODE, URL_DEV, URL_PROD, ACCESS_ID } from "./config.json";

import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { Carrera } from "./models";

// estado global de la aplicacion, datos de la carrera
const state = reactive({ carrera: new Carrera() });

/**
 * Método para acceder a la url de un recurso, según las configuraciones
 * de desarrollo
 * @param access url de acceso a datos, por defecto en blanco
 * @returns cadena construida de acceso al API
 */
export function getURL(access = "") {
  return `${DEV_MODE ? URL_DEV : URL_PROD}${access}`;
}
/**
 * Clase de repositorio que inicializa la recolección de datos.
 */
export default class Repository {
  async obtenerDatos() {
    return await fetch(getURL(`/carreras/${ACCESS_ID}/`))
      .then(response => response.json())
      .then(data => {
        state.carrera = data;
      });
  }
}

// getters computados para las propiedades reactivas

const carrera = computed(() => state.carrera);
const profesores = computed(() =>
  state.carrera.profesores.sort((first, second) =>
    first.nombre.localeCompare(second.nombre)
  )
);
const semestres = computed(() => state.carrera.semestres);
const galeria = computed(() => state.carrera.galerias);
const titulo = computed(() => state.carrera.titulo);
const objetivos = computed(() => state.carrera.objetivos);
const perfiles = computed(() => state.carrera.perfiles);
const directivos = computed(() => state.carrera.directivos);

export const datosCarrera = {
  carrera,
  profesores,
  semestres,
  galeria,
  titulo,
  objetivos,
  perfiles,
  directivos
};
