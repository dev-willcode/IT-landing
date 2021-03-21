interface TituloModel {
  id: number;
  nombre: string;
  periodos: number;
  seccion: string;
  modalidad: string;
  definicion_promocional: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

class Titulo implements TituloModel {
  id: number;
  nombre: string;
  periodos: number;
  seccion: string;
  modalidad: string;
  definicion_promocional: string;
  published_at: string;
  created_at: string;
  updated_at: string;

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.periodos = 0;
    this.seccion = "";
    this.modalidad = "";
    this.definicion_promocional = "";
    this.published_at = "";
    this.created_at = "";
    this.updated_at = "";
  }
}

export class Carrera implements CarreraModel {
  id: number;
  nombre: string;
  frase_promocional: string;
  definicion_titulo_obtenido: string;
  titulo: Titulo;
  published_at: string;
  created_at: string;
  updated_at: string;
  perfiles: Perfiles[];
  objetivos: Objetivos[];
  directivos: Directivos[];
  semestres: Semestres[];
  profesores: Profesores[];
  galerias: Galerias[];

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.frase_promocional = "";
    this.definicion_titulo_obtenido = "";
    this.titulo = new Titulo();
    this.published_at = "";
    this.created_at = "";
    this.updated_at = "";
    this.perfiles = [];
    this.objetivos = [];
    this.directivos = [];
    this.semestres = [];
    this.profesores = [];
    this.galerias = [];
  }
}

interface CarreraModel {
  id: number;
  nombre: string;
  frase_promocional: string;
  definicion_titulo_obtenido: string;
  titulo: Titulo;
  published_at: string;
  created_at: string;
  updated_at: string;
  perfiles: Perfiles[];
  objetivos: Objetivos[];
  directivos: Directivos[];
  semestres: Semestres[];
  profesores: Profesores[];
  galerias: Galerias[];
}

interface Galerias {
  id: number;
  carrera: number;
  ubicacion_externa: string;
  ubicacion_interna: string;
  descripcion: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  imagen: Imagen;
}

interface Imagen {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  created_at: string;
  updated_at: string;
}

interface Formats {
  thumbnail: Thumbnail;
  large: Thumbnail;
  medium: Thumbnail;
  small: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

interface Profesores {
  id: number;
  nombre: string;
  titulo: string;
  carrera: number;
  ddd?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  foto?: string;
}

interface Semestres {
  id: number;
  nombre: string;
  carrera: number;
  nombre_promocional: string;
  descripcion: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  imagen?: string;
}

interface Directivos {
  id: number;
  nombre: string;
  cargo: string;
  numero_contacto?: string;
  carrera: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  foto?: string;
}

interface Objetivos {
  id: number;
  titulo: string;
  icono?: string;
  descripcion: string;
  carrera: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface Perfiles {
  id: number;
  descripcion: string;
  competencias: string;
  carrera: number;
  tipo_perfil: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  imagen?: string;
}
