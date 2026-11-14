import {importX} from 'eslint-plugin-import-x';

/**
 * Config array of the recommended ESLint import plugin configs, then my own
 * import configs atop that.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
	importX.flatConfigs.recommended,
	{
		name: 'eslint-config-ultraq/import',
		rules: {
			'import-x/order': ['error', {
				'alphabetize': {
					'order': 'asc'
				},
				'groups': [['sibling', 'parent'], 'builtin', 'external'],
				'newlines-between': 'always'
			}]
		}
	}
];
