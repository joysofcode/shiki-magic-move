<script lang="ts">
	import { getHighlighter } from 'shiki'
	import ShikiMagicMove from '$lib/ShikiMagicMove.svelte'

	let code = $state('let bool;')
	let toggle = $state(false)

	const highlighter = getHighlighter({
		themes: ['poimandres'],
		langs: ['javascript', 'typescript', 'svelte'],
	})

	function toggleAnimation() {
		toggle = !toggle
		toggle ? (code = 'let bool = true;') : (code = 'let bool;')
	}
</script>

<svelte:window on:click={toggleAnimation} />

{#await highlighter then highlighter}
	<ShikiMagicMove
		lang="ts"
		theme="poimandres"
		options={{ duration: 600, stagger: 3 }}
		onStart={() => console.log('start')}
		onEnd={() => console.log('end')}
		{highlighter}
		{code}
	/>
{/await}
