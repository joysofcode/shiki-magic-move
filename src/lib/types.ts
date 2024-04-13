import type { HighlighterCore } from 'shiki'
import type {
	MagicMoveRenderOptions,
	MagicMoveDifferOptions,
	KeyedTokensInfo,
} from 'shiki-magic-move/types'

export type ShikiMagicMoveProps = {
	highlighter: HighlighterCore
	lang: string
	theme: string
	code: string
	options?: MagicMoveRenderOptions & MagicMoveDifferOptions
	onStart?: () => void
	onEnd?: () => void
}

export type ShikiMagicMoveRendererProps = {
	animate?: boolean
	tokens: KeyedTokensInfo
	previous?: KeyedTokensInfo
	options?: MagicMoveRenderOptions
	onStart?: () => void
	onEnd?: () => void
}
