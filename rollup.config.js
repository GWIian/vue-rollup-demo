import vuePlugin from "rollup-plugin-vue"
import copyPlugin from "rollup-plugin-copy"
import resolvePlugin from "rollup-plugin-node-resolve"
import replacePlugin from "rollup-plugin-replace"
import babelPlugin from "rollup-plugin-babel"
import commonjsPlugin from "rollup-plugin-commonjs"
import gzipPlugin from "rollup-plugin-gzip"
import terserPlugin from "rollup-plugin-terser"

export default {
    input: "src/main.js",
    output: {
        file: "dist/bundle.js",
        format: "iife"
    },
    plugins: [
        vuePlugin(),
        copyPlugin({
            "public": "dist",
            verbose: true
        }),
        resolvePlugin(),
        replacePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        babelPlugin(),
        commonjsPlugin(),
        terserPlugin.terser(),
        gzipPlugin()
    ]
}