import importConfig from './eslint.config.import.js';
import jsDocConfig from './eslint.config.jsdoc.js';
import mainConfig from './eslint.config.main.js';

/**
 * A combination of all of the configs in this project, in the order of:
 *  - main
 *  - import
 *  - jsdoc
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
	...mainConfig,
	...importConfig,
	...jsDocConfig
];
