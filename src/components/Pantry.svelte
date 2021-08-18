<script>
  import { Form, Input, Label } from "sveltestrap";
  import ingredientStore from "./Stores/ingredientStore";
  import { idAleatório } from "./Stores/ingredientStore";

  let nameInput = "";
  let quantInput = "";

  const alteraQuantIngrediente = (evento, ingid) => {
    if (evento.charCode === 13) {
      const novoQuantIngrediente = evento.target.value;
      const newStore = $ingredientStore.map((ing) =>
        ing.id === ingid
          ? {
              id: ingid,
              nome: ing.nome,
              quant: novoQuantIngrediente,
              editing: false,
              quantediting: false,
            }
          : ing
      );
      ingredientStore.set(newStore);
    }
  };

  const alteraIngrediente = (evento, ingid) => {
    if (evento.charCode === 13) {
      const novoNomeIngrediente = evento.target.value;
      const newStore = $ingredientStore.map((ing) =>
        ing.id === ingid
          ? {
              id: ingid,
              nome: novoNomeIngrediente,
              quant: ing.quant,
              editing: false,
              quantediting: false,
            }
          : ing
      );
      ingredientStore.set(newStore);
    }
  };

  const adicionarIngrediente = (nameIng, quantIng) => {
    $ingredientStore = [
      ...$ingredientStore,
      {
        id: idAleatório(1, 10000),
        nome: nameIng,
        quant: quantIng,
        editing: false,
        quantediting: false,
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
      <div class="aux-container">
        <div class="pantry-inner">
          <Input
            on:keypress={(evento) => alteraIngrediente(evento, ingredient.id)}
            on:blur={() => (ingredient.editing = false)}
            type="text"
            class="edit-input"
            placeholder="Ingrediente"
            value={ingredient.nome}
          />
        </div>
        <div class="quant-container">
          <p>{ingredient.quant}</p>
        </div>
        <div class="Delet-container">
          <button on:click={() => removeIngredient(ingredient.id)}>X</button>
        </div>
      </div>
    {:else if ingredient.quantediting}
      <div class="aux-container">
        <div class="pantry-inner">
          <p class="ingredient-info">
            {ingredient.nome}
          </p>
        </div>
        <div class="quant-container">
          <Input
            on:keypress={(evento) =>
              alteraQuantIngrediente(evento, ingredient.id)}
            on:blur={() => (ingredient.quantediting = false)}
            type="number"
            class="edit-input"
            placeholder="Quantidade do Ingrediente"
            value={ingredient.quant}
          />
        </div>
        <div class="Delet-container">
          <button on:click={() => removeIngredient(ingredient.id)}>X</button>
        </div>
      </div>
    {:else}
      <div class="aux-container">
        <div class="name-container">
          <p
            class="ingredient-info"
            on:dblclick={() => (ingredient.editing = true)}
          >
            {ingredient.nome}
          </p>
        </div>
        <div class="quant-container">
          <p
            class="ingredient-info"
            on:dblclick={() => (ingredient.quantediting = true)}
          >
            {ingredient.quant}
          </p>
        </div>
        <div class="Delet-container">
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

  .aux-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  #pantry-container > p {
    color: rgb(141, 70, 28);
    font-weight: bold;
    border-bottom: 2px solid rgb(141, 70, 28);
  }

  .pantry-inner,
  .name-container {
    display: flex;
    border-radius: 5px 0 0 5px;
    background-color: rgba(194, 102, 49, 0.651);
    margin: 5px 0 5px 5px;
    padding: 10px;
    width: inherit;
  }

  .quant-container {
    display: flex;
    background-color: rgba(194, 102, 49, 0.651);
    margin: 5px 0 5px 0;
    padding: 10px;
    width: inherit;
  }

  .pantry-inner {
    display: flex;
    justify-content: space-between;
  }

  :global(.edit-input.form-control) {
    font-size: 16px;
    margin: 16px 0;
    padding: 0;
  }

  .pantry-inner:hover {
    background-color: rgb(165, 90, 47);
  }

  .Delet-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    margin: 5px 5px 5px 0;
    border-right: 8px solid rgb(141, 70, 28);
    background-color: rgba(194, 102, 49, 0.651);
  }

  .Delet-container > button {
    background-color: rgba(194, 102, 49, 0.651);
  }

  .ingredient-info {
    color: white;
  }
</style>
