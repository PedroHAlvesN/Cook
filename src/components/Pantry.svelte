<script>
  import ingredientStore from "./Stores/ingredientStore";

  let editando = false;

  /*const obterId = (id) => {
    const valid = ingredients.findIndex((ing) => (id = ing.id));
    console.log(valid);
  };*/

  const editandoIngrediente = (evento) => {
    editando = true;
    console.log(editando);
  };
</script>

<div id="pantry-container">
  <p>INGREDIENTES</p>
  {#each $ingredientStore as ing}
    <div id="pantry">
      <p id="nome-ingrediente" on:dblclick={editandoIngrediente}>{ing.nome}</p>
    </div>
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

  #pantry {
    display: flex;
    border-radius: 5px;
    border: 3px solid rgb(141, 70, 28);
    background-color: rgba(194, 102, 49, 0.651);
    padding: 10px;
    margin: 5px;
    justify-content: space-between;
  }

  #pantry:hover {
    background-color: rgb(165, 90, 47);
  }

  #nome-ingrediente {
    color: white;
  }
</style>
