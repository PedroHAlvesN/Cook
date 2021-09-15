import { writable } from "svelte/store";

const recipeStore = writable([
  {
    name: "Milho Cozido",
    materials: {
      "Milho": 1
    }
  },
  {
    name: "Macarronada",
    materials: {
      "Milho": 1,
      "Macarrão": 2
    }
  }
]);

export default recipeStore;

