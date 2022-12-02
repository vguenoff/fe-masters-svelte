<script>
  import Thing from '$lib/components/Thing.svelte'

  let user = { loggedIn: false }
  const x = 7

  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ]

  function toggle() {
    user.loggedIn = !user.loggedIn
  }
</script>

{#if user.loggedIn}
  <button on:click={toggle}> Log out </button>
{:else}
  <button on:click={toggle}> Log in </button>
{/if}

{#if x > 10}
  <p>{x} is greater than 10</p>
{:else if 5 > x}
  <p>{x} is less than 5</p>
{:else}
  <p>{x} is between 5 and 10</p>
{/if}

<hr />

<h3>The Famous Cats of YouTube</h3>
<ul>
  {#each cats as { name, id }, i}
    <li>
      {i + 1}:
      <a target="_blank" href="https://www.youtube.com/watch?v={id}" rel="noreferrer">
        {name}
      </a>
    </li>
  {/each}
</ul>

<hr />

<button on:click={() => (things = things.slice(1))}> Remove first thing </button>
{#each things as { name } (name)}
  <Thing {name} />
{/each}
