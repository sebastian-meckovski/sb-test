import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./input/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
    ],
    plugins: [
      resolve(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      terser(),
    ],
    external: ['react', 'react-dom']
  },
];
