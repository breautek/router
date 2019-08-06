'use strict';

module.exports = function(env) {
	return require(`./webpack.config.${env}.js`);
};
