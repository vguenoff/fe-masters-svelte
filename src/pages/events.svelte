<script>
  import Outer from '$lib/components/Outer.svelte'
  import CustomButton from '$lib/components/CustomButton.svelte'

  let m = { x: 0, y: 0 }

  function handleClick() {
    alert('no more alerts')
  }

  let messageText = ''
</script>

<!-- 'once' is event modifier -->
<button on:click|once={handleClick}> Click me once </button>

<hr />

<div on:mousemove={e => (m = { x: e.clientX, y: e.clientY })} class="move">
  The mouse position is {m.x} x {m.y}
</div>

<h3>Component events</h3>

<Outer on:message={e => (messageText = e.detail.text)}>
  <p>{messageText}</p>
</Outer>

<CustomButton on:click={() => alert('CustomButton clicked')} />

<style>
  .move {
    width: 100%;
    height: 100px;
    background-color: plum;
  }
</style>
