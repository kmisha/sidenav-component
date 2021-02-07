const dev = {
    input: 'app/js/index.js',
    output: {
        file: 'app/bundle.js',
        format: 'esm',
        sourcemap: 'inline'
    },
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
    watch: {
        exclude: ['node_modules/**']
    }
}

export default process.env.NODE_ENV === 'production' ? prod : dev
