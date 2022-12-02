<script>
  async function getFivePokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    const data = await res.json()

    return data.results
  }

  let promise
</script>

<button on:click={() => (promise = getFivePokemons())}>Get Five Pokemons</button>

{#if promise}
  {#await promise}
    <p>Waiting...</p>
  {:then pokemons}
    <ul>
      {#each pokemons as { name }, i (name)}
        <li>{i + 1}: {name}</li>
      {/each}
    </ul>
  {:catch err}
    <p style="color: red;">{err.message}</p>
  {/await}
{/if}
