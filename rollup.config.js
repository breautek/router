
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: 'src/api.ts',
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
            resolve({
                preferBuiltins: true
            }),
            typescript(),
            sass({
                insert: true
            }),
            // Order matters, most plugins needs to be above commonjs
            commonjs({
                namedExports: {}
            }),
            json()
        ]
    }
];
