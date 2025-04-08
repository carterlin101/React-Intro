const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Use PostCSS to process CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',   // Interpret CSS
          'postcss-loader', // Process CSS with PostCSS (includes Tailwind)
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from the 'dist' folder
    },
    compress: true,
    port: 3000, // Specify the port
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement (HMR)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the HTML file
      inject: true
    }),
    new MiniCssExtractPlugin({
        filename: "style.css", // Output CSS file
    }),
    
  ],
  mode: 'development', // Set to 'production' for production build
};
