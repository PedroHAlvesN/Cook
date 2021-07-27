<script>
  import { empty } from "svelte/internal";

  import { Form, FormGroup, Input, Label } from "sveltestrap";

  import Logo from "./components/Logo/Logo.svelte";
  import Pantry from "./components/Pantry.svelte";
  import IngredientStore from "./components/Stores/ingredientStore";

  const idAleatório = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  let Recipes = [];

  IngredientStore.subscribe((data) => {
    Recipes = data;
  });

  let visivel = false;
  let editando = false;

  const adicionarIngrediente = (evento) => {
    const nomeIngrediente = evento.target.value;
    if (evento.charCode === 13) {
      evento.preventDefault();
      IngredientStore.update(
        (data) =>
          (data = [
            ...data,
            {
              id: idAleatório(1, 10000),
              nome: nomeIngrediente,
            },
          ])
      );
      evento.target.value = "";
    }
  };

  const mostraReceita = () => {
    const milho = false;
    const macarrao = false;
    for (let i = 0; i < Recipes.length; i++) {
      if (Recipes[i].nome === "Milho") {
        visivel = true;
      }
    }
  };
</script>

<main>
  <div id="title">
    <div id="Logo">
      <Logo />
    </div>
    <h2>Cook Task</h2>
  </div>
  <div id="Add-container">
    <Form>
      <FormGroup>
        <Label for="add-ingredientes">Adicionar Ingredientes</Label>
        <Input
          on:keypress={adicionarIngrediente}
          type="text"
          id="add-input"
          placeholder="Ingrediente"
        />
      </FormGroup>
    </Form>
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
