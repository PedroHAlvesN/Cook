import { writable } from "svelte/store";

const recipeStore = writable([
  {
    nome: "Milho Cozido",
    ingredientes: {
      nome: "Milho"
    }
  },
  {
    nome: "Macarronada",
    ingredientes: {
      nome: "Milho, Macarrão"
    }
  }
]);

export default recipeStore;

