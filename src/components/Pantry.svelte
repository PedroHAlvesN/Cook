<script>
  import { compute_rest_props, prop_dev } from "svelte/internal";

  import { Input, Label } from "sveltestrap";
  import ingredientStore from "./Stores/ingredientStore";
  import { idAleatório } from "./Stores/ingredientStore";

  let editando = false;

  /*const obterId = (id) => {
    const valid = ingredients.findIndex((ingredient) => (id = ingredient.id));
    console.log(valid);
  };*/

  const alteraIngrediente = (evento, ingid) => {
    if (evento.charCode === 13) {
      const novoNomeIngrediente = evento.target.value;
      const newStore = $ingredientStore.map((ing) =>
        ing.id === ingid
          ? { id: ingid, nome: novoNomeIngrediente, editing: false }
          : ing
      );
      ingredientStore.set(newStore);
    }
  };
  const adicionarIngrediente = (evento) => {
    const nomeIngrediente = evento.target.value;
    if (evento.charCode === 13) {
      evento.preventDefault();
      $ingredientStore = [
        ...$ingredientStore,
        {
          id: idAleatório(1, 10000),
          nome: nomeIngrediente,
          editing: false,
        },
      ];
      evento.target.value = "";
    }
  };
</script>

<div id="Add-container">
  <Label for="add-ingredientes">Adicionar Ingredientes</Label>
  <Input
    on:keypress={adicionarIngrediente}
    on:blur={() => (editando = false)}
    type="text"
    id="add-input"
    placeholder="Ingrediente"
  />
</div>
<div id="pantry-container">
  <p>INGREDIENTES</p>
  {#each $ingredientStore as ingredient}
    {#if ingredient.editing}
      <div class="pantry">
        <Input
          on:keypress={(evento) => alteraIngrediente(evento, ingredient.id)}
          on:blur={() => (ingredient.editing = false)}
          type="text"
          id="add-input"
          placeholder="Ingrediente"
          value={ingredient.nome}
        />
      </div>
    {:else}
      <div class="pantry">
        <p
          id="nome-ingrediente"
          on:dblclick={() => (ingredient.editing = true)}
        >
          {ingredient.nome}
        </p>
      </div>
    {/if}
  {/each}
</div>

<style>
  #pantry-container {
    border: 2px solid rgb(141, 70, 28);
    width: 50%;
    padding: 5px;
    background-color: rgba(247, 155, 102, 0.514);
  }

  #pantry-container > p {
    color: rgb(141, 70, 28);
    font-weight: bold;
    border-bottom: 2px solid rgb(141, 70, 28);
  }

  .pantry {
    display: flex;
    border-radius: 5px;
    border: 3px solid rgb(141, 70, 28);
    background-color: rgba(194, 102, 49, 0.651);
    padding: 10px;
    margin: 5px;
    justify-content: space-between;
  }

  :global(.form-control),
  .pantry > p {
    margin: 0;
  }

  #pantry:hover {
    background-color: rgb(165, 90, 47);
  }

  #nome-ingrediente {
    color: white;
  }
</style>
