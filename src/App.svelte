<script>
  import { empty } from "svelte/internal";

  import { Form, FormGroup, Input, Label } from "sveltestrap";

  import Logo from "./components/Logo/Logo.svelte";
  import Pantry from "./components/Pantry.svelte";
  import IngredientStore from "./components/Stores/ingredientStore";

  let visivel = false;

  /*const mostraReceita = () => {
    const milho = false;
    const macarrao = false;
    for (let i = 0; i < Recipes.length; i++) {
      if (Recipes[i].nome === "Milho") {
        visivel = true;
      }
    }
  };*/
</script>

<main>
  <div id="title">
    <div id="Logo">
      <Logo />
    </div>
    <h2>Cook Task</h2>
  </div>
  <div id="kitchen-container">
    <Pantry />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    margin: auto;
  }

  #title {
    border-radius: 5px;
    border: 3px solid rgb(141, 70, 28);
    background-color: rgb(194, 101, 47);
    margin: 8px 0 8px 0;
  }

  h2 {
    color: white;
    font-weight: bold;
    height: max-content;
  }

  :global(html) {
    display: flex;
  }

  :global(body),
  :global(html) {
    height: 100%;
    width: 100%;
    justify-content: center;
    margin: 0;
  }

  :global(.mb-3) {
    border: 3px solid rgb(141, 70, 28);
    background-color: rgb(194, 101, 47);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  :global(#add-input) {
    font-size: 15px;
  }
</style>
