import { writable } from "svelte/store";

export const idAleatório = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

const ingredientStore = writable([
    {
      id: idAleatório(1, 1000),
      name: "Milho",
      quantity: 2,
      editing: false,
      quantediting: false
    },
  ]);

  export default ingredientStore;