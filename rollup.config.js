import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import sass from 'rollup-plugin-sass';

export default {
	input : './src/index.js',
	output: {
		file: './dist/router.js',
		format: 'cjs',
		name: '@breautek/router',
		globals: {
			react: 'React',
			'react-dom': 'ReactDOM'
		}
	},
	external: ['react', 'react-dom'],
	plugins: [
		builtins(),
		nodeResolve(),
		json({
			preferConst: true
		}),
		sass({
			insert: true
		}),
		commonjs({
			include: 'node_modules/**'
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};
