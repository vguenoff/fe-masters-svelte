<script>
  import NestedParagraph from '$lib/components/NestedParagraph.svelte'

  let src = 'https://svelte.dev/tutorial/image.gif'
  let name = 'Rick Astley'
  let string = `this string contains some <strong>HTML!!!</strong>`
</script>

<!-- add variables inside "" -->
<img {src} alt="{name} dances." />
<!-- special @html tag - !! it's dangerously set innerhtml -->
<p>{@html string}</p>
<!--  -->
<NestedParagraph />

<style>
  /* show global styles */
  :global(p) {
    color: tomato;
  }

  p {
    font-style: italic;
    font-size: 20px;
  }
</style>
