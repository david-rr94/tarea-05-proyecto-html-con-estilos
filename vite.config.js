import { defineConfig } from "vite";
import { resolve } from "path";

const root = import.meta.dirname;

export default defineConfig({
  // Cambiar esto al nombre de tu repositorio de GitHub para GitHub Pages
  // Ej: base: "/conquer-academy-style/"
  base: "/tarea-05-proyecto-html-con-estilos/",

  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        quienesSomos: resolve(root, "quienes-somos.html"),
        cursos: resolve(root, "cursos.html"),
        cursoFullstack: resolve(root, "curso-fullstack.html"),
        cursoIa: resolve(root, "curso-ia.html"),
        cursoBlockchain: resolve(root, "curso-blockchain.html"),
        cursoCiberseguridad: resolve(root, "curso-ciberseguridad.html"),
        blog: resolve(root, "blog.html"),
        noticiaDetalle: resolve(root, "noticia-detalle.html"),
        contacto: resolve(root, "contacto.html"),
        login: resolve(root, "login.html"),
        registro: resolve(root, "registro.html"),
        avisoLegal: resolve(root, "aviso-legal.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": resolve(root, "src"),
      "@scss": resolve(root, "src/scss"),
    },
  },

  server: {
    open: true,
  },
});
