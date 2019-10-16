
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default [
    {
        input: 'src/index.js',
        external: [
            'react',
            'react-dom',
            'path',
            'events'
        ],
        output: [
            {
                file: 'dist/router.js',
                format: 'cjs',
                sourcemap: true
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }),
            sass({
                insert: true
            }),

            // Order matters, most plugins needs to be above commonjs
            commonjs({
                namedExports: {}
            }),
            resolve({
                preferBuiltins: true
            }),
            json()
        ]
    }
];
