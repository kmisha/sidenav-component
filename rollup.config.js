import babel from '@rollup/plugin-babel'

const dev = {
    input: 'app/js/index.js',
    output: {
        file: 'app/bundle.js',
        format: 'esm',
        sourcemap: 'inline'
    },
    plugins: [
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
        file: 'app/bundle.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            "presets": [
                ["@babel/env", {"modules": false}]
            ]
        })
    ],
    watch: {
        exclude: ['node_modules/**']
    }
}

export default process.env.NODE_ENV === 'production' ? prod : dev
