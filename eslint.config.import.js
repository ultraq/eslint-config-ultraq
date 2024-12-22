import importPlugin from 'eslint-plugin-import';

/**
 * @type {import('eslint').Linter.Config}
 */
export default {
	name: 'eslint-config-ultraq/import',
	extends: [
		importPlugin.flatConfigs.recommended
	],
	rules: {
		'import/order': ['error', {
			'groups': [['sibling', 'parent'], 'builtin', 'external'],
			'newlines-between': 'always'
		}]
	}
}
