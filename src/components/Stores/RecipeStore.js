import { writable } from "svelte/store";

const recipeStore = writable([
  {
    nome: "Milho Cozido",
    ingredientes: {
      Milho: 1
    }
  },
  {
    nome: "Macarronada",
    ingredientes: {
      Milho: 1,
      Macarrão: 2
    }
  }
]);

export default recipeStore;

