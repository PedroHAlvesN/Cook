import { writable } from "svelte/store";

const idAleatório = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

const ingredientStore = writable([
    {
      id: idAleatório(1, 1000),
      nome: "Milho",
    },
  ]);

  export default ingredientStore;