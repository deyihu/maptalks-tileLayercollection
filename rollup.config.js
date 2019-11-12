// Rollup plugins
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from "rollup-plugin-json";
const uglify = require('rollup-plugin-uglify').uglify;
import pkg from "./package.json";


const product = process.env.NODE_ENV.trim() === 'prd';
const FILEMANE = (product ? pkg.name + '.min' : pkg.name);
const sourceMap = (product ? false : true);

const banner = `/*\n * ${pkg.name} v${pkg.version}\n * this is extends maptalks.js \n * build by Iverson.hu \n*/\n`;

const plugins = [
    json(),
    nodeResolve(),
    commonjs(),
    babel({
        // exclude: ['node_modules/**']
    })
];
const output = [
    {
        'format': 'umd',
        'name': 'maptalks',
        'file': `dist/${FILEMANE}.js`,
        'sourcemap': sourceMap,
        'extend': true,
        'banner': banner,
        'globals': {
            'maptalks': 'maptalks'
        }
    }
];
if (product) {
    plugins.push(uglify());
} else {
    output.push({
        'sourcemap': false,
        'format': 'es',
        'file': `dist/${FILEMANE}.es.js`,
        'extend': true,
        'banner': banner,
        'globals': {
            'maptalks': 'maptalks'
        }
    });
}

export default {
    input: __dirname + '/index.js',
    plugins: plugins,
    // sourceMap: true,
    external: ['maptalks'],
    output: output
};