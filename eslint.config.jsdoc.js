import jsDoc from 'eslint-plugin-jsdoc';

/**
 * Config array of the recommended ESLint JSDoc plugin configs, then my own
 * JSDoc configs atop that.
 *
 * @type {import('eslint').Linter.Config}
 */
export default [
	jsDoc.configs['flat/recommended'],
	{
		name: 'eslint-config-ultraq/jsdoc',
		rules: {
			'jsdoc/require-param-description': 'off',
			'jsdoc/require-property-description': 'off',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/tag-lines': ['error', 'never', {
				'startLines': 1
			}]
		},
		settings: {
			jsdoc: {
				tagNamePreference: {
					returns: 'return'
				}
			}
		}
	}
];
