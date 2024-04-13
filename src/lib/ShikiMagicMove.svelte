<script lang="ts">
	import { codeToKeyedTokens, createMagicMoveMachine } from 'shiki-magic-move/core'
	import ShikiMagicMoveRenderer from './ShikiMagicMoveRenderer.svelte'
	import type { ShikiMagicMoveProps } from './types'

	const { ...props }: ShikiMagicMoveProps = $props()

	const machine = createMagicMoveMachine(
		(code) =>
			codeToKeyedTokens(props.highlighter, code, {
				lang: props.lang,
				theme: props.theme,
			}),
		props.options
	)
	const result = $derived(machine.commit(props.code))
</script>

<ShikiMagicMoveRenderer
	animate={true}
	tokens={result.current}
	previous={result.previous}
	options={props.options}
	onStart={props.onStart}
	onEnd={props.onEnd}
/>
