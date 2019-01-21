import webpack from "webpack";
import path from "path";
import nodeExternals from "webpack-node-externals";

const rules: webpack.Rule[] = [{ test: /\.ts$/, loader: "awesome-typescript-loader" }];

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(process.cwd() + "/build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules
  }
};

export default config;
