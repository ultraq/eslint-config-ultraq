import importPlugin from 'eslint-plugin-import';

/**
 * Config array of the recommended ESLint import plugin configs, then my own
 * import configs atop that.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
	importPlugin.flatConfigs.recommended,
	{
		name: 'eslint-config-ultraq/import',
		rules: {
			'import/order': ['error', {
				'alphabetize': {
					'order': 'asc'
				},
				'groups': [['sibling', 'parent'], 'builtin', 'external'],
				'newlines-between': 'always'
			}]
		}
	}
];
