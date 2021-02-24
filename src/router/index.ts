import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import OfertaAcademica from "@/pages/OfertaAcademica.vue";
import MallaCurricular from "@/pages/MallaCurricular.vue";
import Docentes from "@/pages/Docentes.vue";
import Nosotros from "@/pages/Nosotros.vue";
import Galeria from "@/pages/Galeria.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/oferta-academica",
    name: "OfertaAcademica",
    component: OfertaAcademica
  },
  {
    path: "/malla-curricular",
    name: "MallaCurricular",
    component: MallaCurricular
  },
  { path: "/docentes", name: "Docentes", component: Docentes },
  { path: "/nosotros", name: "Nosotros", component: Nosotros },
  { path: "/galeria", name: "Galeria", component: Galeria }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
