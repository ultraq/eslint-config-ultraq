import jsDoc from 'eslint-plugin-jsdoc';

/**
 * @type {import('eslint').Linter.Config}
 */
export default {
	name: 'eslint-config-ultraq/jsdoc',
	extends: [
		jsDoc.configs['flat/recommended']
	],
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
