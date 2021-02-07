import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import { terser } from "rollup-plugin-terser";

const dev = {
    input: 'app/js/index.js',
    output: {
        file: 'app/bundle.js',
        format: 'esm',
        sourcemap: 'inline'
    },
    plugins: [
        postcss({
            inject:  false,
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            "presets": [
                ["@babel/env", {
                    targets: { esmodules: true },
                    bugfixes: true,
                }]
            ]
        }),
    ],
    watch: {
        exclude: ['node_modules/**']
    }
}

const prod = {
    input: 'app/js/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        sourcemap: false
    },
    plugins: [
        postcss({
            extract: true,
            minimize: { preset: 'default' },
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            "presets": [
                ["@babel/env", {"modules": false}]
            ]
        }),
        copy({
            targets: [
                {src: 'app/index.html', dest: 'dist'}
            ]
        }),
        terser()
    ],
    watch: {
        exclude: ['node_modules/**']
    }
}

export default process.env.NODE_ENV === 'production' ? prod : dev
