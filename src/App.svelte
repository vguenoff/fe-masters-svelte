<script lang="ts">
  import { Router } from 'svelte-router-spa'
  // @ts-ignore
  import routes from 'virtual:generated-pages-svelte'
</script>

<a href="/">Home</a>
<hr />
<Router {routes} />
