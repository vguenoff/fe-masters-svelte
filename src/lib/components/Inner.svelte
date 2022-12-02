<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<button
  on:click={() => {
    dispatch('message', { text: 'hello' })
  }}
>
  Dispatch a message
</button>
