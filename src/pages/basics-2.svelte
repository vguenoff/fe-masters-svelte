<script>
  let count = 0
  $: quadrupled = doubled * 2
  $: doubled = count * 2 // reactive declaration

  function incrementCount() {
    count += 1
  }

  $: if (count > 3) {
    console.log({ count, doubled, quadrupled })
  }

  // 2
  let numbers = [1, 2, 3, 4]

  function addNumber() {
    numbers = [...numbers, numbers.length + 1] // assignments is needed
  }

  $: sum = numbers.reduce((a, c) => a + c, 0)
</script>

<h2>Basics 2</h2>

<ul>
  <li>
    <h3>Reactivity</h3>
    <button on:click={incrementCount}>
      Clicked {count}
      {count === 1 ? 'time' : 'times'}
    </button>
    <p>reactive declaration</p>
    <p>{count} doubled is {doubled}</p>
    <p>{doubled} doubled is {quadrupled}</p>
  </li>
  <li>
    <h3>Svelte's reactivity is triggered by assignments.</h3>

    <p>{numbers.join(' + ')} = {sum}</p>
    <button on:click={addNumber}> Add a number </button>
  </li>
</ul>

<style>
  p {
    color: tomato;
  }
</style>
