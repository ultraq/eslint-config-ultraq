/**
 * @type {import('eslint').Linter.Config}
 */
export default {
	name: 'eslint-config-ultraq/main',
	rules: {
		'brace-style': ['error', 'stroustrup'],
		'comma-dangle': ['error', {
			'functions': 'never'
		}],
		'curly': ['error', 'all'],
		'eol-last': 'error',
		'eqeqeq': 'error',
		'indent': ['error', 'tab', {
			'flatTernaryExpressions': true,
			'SwitchCase': 1
		}],
		'no-constant-condition': ['error', {
			'checkLoops': false
		}],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-trailing-spaces': ['error', {
			'ignoreComments': true
		}],
		'no-unused-vars': ['error', {
			'args': 'none'
		}],
		'no-var': 'error',
		'object-curly-newline': ['error', {
			'ObjectExpression': {
				'consistent': true
			}
		}],
		'object-property-newline': ['error', {
			'allowAllPropertiesOnSameLine': true
		}],
		'quotes': ['error', 'single', {
			'allowTemplateLiterals': true,
			'avoidEscape': true
		}],
		'semi': 'error',
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'asyncArrow': 'always',
			'named': 'never'
		}],
		'strict': 'error'
	}
};
