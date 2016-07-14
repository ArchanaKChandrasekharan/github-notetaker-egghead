// export object which has all the webpack configuration stuff
module.exports = {
  // tell webpack where the root component is
  // react is basically composed of different components,
  // and there will always be a root component
  // root component renders its children components

  // this is the root to process all its JSX
  entry: "./app/components/Main.js",
  // after compiling, where to peek out the new file
  output: {
    filename: "public/bundles.js"
  },

  // tell what to do with Main.js and all of its children components
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',

        // tell babel what kind of transformations need to be  done to the code
        query: {
          // presets is all the transformations that babel is gonna do to the code
          // es2015 will allow us to write ESX code
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
