import js from '@eslint/js';
import importConfig from './eslint.config.import.js';
import jsDocConfig from './eslint.config.jsdoc.js';
import mainConfig from './eslint.config.main.js';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
	js.configs.recommended,
	mainConfig,
	importConfig,
	jsDocConfig
];
