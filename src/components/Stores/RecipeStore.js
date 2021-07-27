import { writable } from "svelte/store";

const RecipeStore = writable([
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

export default RecipeStore;

