<script>
  import NestedParagraph from '$lib/components/NestedParagraph.svelte'
  import Info from '$lib/components/Info.svelte'

  let src = 'https://svelte.dev/tutorial/image.gif'
  let name = 'Rick Astley'
  let string = `this string contains some <strong>HTML!!!</strong>`

  const pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev',
  }
</script>

<h2>Basics</h2>
<p>add variables inside ""</p>
<img {src} alt="{name} dances." />
<!-- special @html tag - !! it's dangerously set innerhtml -->
<p>{@html string}</p>

<h3>Props</h3>
<NestedParagraph />
<NestedParagraph additionalText="additionalText set from the parent with prop" />

<h3>Spread Props</h3>
<Info {...pkg} />

<style>
  /* show global styles /preferably use global styles from app.scss/ */
  /* :global(p) {
    color: tomato;
  } */

  p {
    /* font-style: italic; */
    font-size: 30px;
  }
</style>
