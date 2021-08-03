<script>
  import { Form, Input, Label } from "sveltestrap";
  import ingredientStore from "./Stores/ingredientStore";
  import { idAleatório } from "./Stores/ingredientStore";

  let editando = false;
  let nameInput = "";
  let quantInput = "";

  /*const alteraIngrediente = (evento, ingid) => {
    if (evento.charCode === 13) {
      const novoNomeIngrediente = evento.target.value;
      const newStore = $ingredientStore.map((ing) =>
        ing.id === ingid
          ? { id: ingid, nome: novoNomeIngrediente, editing: false }
          : ing
      );
      ingredientStore.set(newStore);
    }
  };*/
  const adicionarIngrediente = (nameIng, quantIng) => {
    $ingredientStore = [
      ...$ingredientStore,
      {
        id: idAleatório(1, 10000),
        nome: nameIng,
        quant: quantIng,
        editing: false,
      },
    ];
    nameInput = "";
    quantInput = "";
  };

  const removeIngredient = (ingid) => {
    const newStore = $ingredientStore.filter((ing) => ing.id != ingid);
    ingredientStore.set(newStore);
  };
</script>

<div id="Add-container">
  <Form id="Add-form">
    <Label for="add-ingredientes">Adicionar Ingredientes</Label>
    <Input
      type="text"
      bind:value={nameInput}
      class="add-input"
      placeholder="Ingrediente"
    />
    <Input
      type="number"
      class="add-input"
      bind:value={quantInput}
      placeholder="Quantidade do Ingrediente"
    />
    <button
      on:click={() => adicionarIngrediente(nameInput, quantInput)}
      type="button">Adicionar</button
    >
  </Form>
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
      <div id="aux-container">
        <div id="pantry-inner">
          <p
            class="ingredient-info"
            on:dblclick={() => (ingredient.editing = true)}
          >
            {ingredient.nome}
          </p>
          <p
            class="ingredient-info"
            on:dblclick={() => (ingredient.editing = true)}
          >
            {ingredient.quant}
          </p>
        </div>
        <div id="Delet-container">
          <button on:click={() => removeIngredient(ingredient.id)}>X</button>
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  #Add-container {
    background-color: rgb(165, 90, 47);
    border-radius: 5px;
    color: white;
    border: 3px solid rgb(141, 70, 28);
    margin-bottom: 5px;
    padding: 10px;
  }
  #pantry-container {
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(141, 70, 28);
    width: 50%;
    background-color: rgba(247, 155, 102, 0.514);
  }

  #aux-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  #pantry-container > p {
    color: rgb(141, 70, 28);
    font-weight: bold;
    border-bottom: 2px solid rgb(141, 70, 28);
  }

  .pantry,
  #pantry-inner {
    display: flex;
    border-radius: 5px 0 0 5px;
    background-color: rgba(194, 102, 49, 0.651);
    margin: 5px 0 5px 5px;
    padding: 10px;
    width: inherit;
  }

  #pantry-inner {
    display: flex;
    justify-content: space-between;
  }

  :global(.form-control),
  .pantry > p {
    margin: 0;
  }

  .pantry:hover {
    background-color: rgb(165, 90, 47);
  }

  #Delet-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    margin: 5px 5px 5px 0;
    border-right: 8px solid rgb(141, 70, 28);
    background-color: rgba(194, 102, 49, 0.651);
  }

  #Delet-container > button {
    background-color: rgba(194, 102, 49, 0.651);
  }

  .ingredient-info {
    color: white;
  }
</style>
