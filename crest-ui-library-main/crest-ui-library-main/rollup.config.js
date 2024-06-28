import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';  // Minify JavaScript
import peerDepsExternal from 'rollup-plugin-peer-deps-external';  // Exclude peer dependencies
//import visualizer from 'rollup-plugin-visualizer';  // Visualize bundle size

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true  // Generate sourcemaps
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),  // Automatically exclude peer dependencies from your bundle
    resolve(),           // Locate and use modules installed in node_modules
    commonjs(),          // Convert CommonJS modules to ES6
    typescript({         // Compile TypeScript files
      tsconfig: './tsconfig.json'  // Use custom tsconfig
    }),
    babel({              // Transpile ES6/7 code
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',  // Only transpile our source code
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    terser(),            // Minify JavaScript with Terser

  ]
};
