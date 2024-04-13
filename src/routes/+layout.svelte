<script lang="ts">
	import './app.css'

  let { children } = $props()
</script>

<svelte:head>
  <title>Shiki</title>
</svelte:head>

{@render children()}