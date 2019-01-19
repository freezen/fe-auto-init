/************************************************************************
 
 *************************************************************************/
var path = require("path");
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance=null;

// code zip
var uglifyJs = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  output: {
    comments: false,  // remove all comments
  },
});

var OccurenceOrderPlugin= new webpack.optimize.OccurenceOrderPlugin()

var prod=new webpack.DefinePlugin({
  'process.env': {
      NODE_ENV: JSON.stringify(env),
  },
});
var env=process.env.NODE_ENV
if(env==null||env.indexOf('dev')==-1){
  env='production'
}

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          browsers: ['last 1 version', 'ie >= 11'],
        }),
      ],
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      data: `
        $feature-flags: (
          components-x: false,
          grid: false,
          ui-shell: true,
        );
      `,
      sourceMap: true,
    },
  },
];

module.exports =(function() {
    assetsPluginInstance = new AssetsPlugin({
      filename: 'dist/webpack-assets.json',
    })
    return {
        name: 'app',
        entry: {
          bundle: path.resolve(__dirname, './src/main.js'),
          // libs: [
          //   "react","react-dom","react-addons-update","redux-thunk","redux-immutable",
          //   "redux","react-redux","react-addons","immutable",
          //   "react-router","carbon-icons","carbon-components","carbon-components-react"
          // ],
          //carbon:["react","react-dom","react-addons-update","react-addons"],
        },
        // entry: './src/iot_portal.js',

        output: {
            path: './dist/',
            // path: './iotDist/',
            filename: (env&&env=='production')?'app_[hash].js':'app.js',
        },

        devtool: (env&&env=='production')?false:'#inline-eval-cheap-source-map',

        devServer: {
            inline: true,
            port: 8000,
            proxy: {
                '/ibm/iotm/*': {
                    //target: 'https://9.112.229.65:9446',
                    //target: 'https://10.109.42.27:9451',
                    //target: 'https://10.109.42.18:9447',
                    target: 'https://10.173.0.4:9453',
                    //target:'https://9.112.229.133:9447',
                    //target:'https://9.112.229.44:9447',
                    // target: 'https://9.112.229.89:9447',
                    // target: 'https://9.112.229.91:9447',
                    secure: false
                },
                '/ibm/ife/*': {
                    //target: 'https://9.112.229.65:9446',
                    //target: 'https://10.109.42.27:9451',
                    //target: 'https://10.109.42.18:9447',
                    target: 'https://10.173.0.4:9453',
                    //target:'https://9.112.229.133:9447',
                    //target:'https://9.112.229.44:9447',
                    // target: 'https://9.112.229.89:9447',
                    // target: 'https://9.112.229.91:9447',
                    secure: false
                }
            }
        },

        module: {
            loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react','stage-0']
                }

            },{
              test: require.resolve("react"), loader: "expose-loader?React"
            },{
              test: require.resolve("react-dom"), loader: "expose-loader?ReactDOM"
            },
            // {
            //     test: /\.css$/, // Only .css files
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            //     //loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]')
            // },
            {
              test: /^(?!.*?\.modules).*\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
              test:/\.scss$/,
              loader:ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
              test: /\.modules\.css$/,
              loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },{
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }]
        },
        resolve: {
          extensions: ['', '.js', '.jsx'],
          mainFiles:['gogo'],//change "default use" filename setting when resolving path
          root: [
            path.resolve('./src/components'),
          ]
        },
        plugins: (env&&env=='production')?[
            // new webpack.optimize.CommonsChunkPlugin({
            //   //names: ['carbon','libs'],
            //   names: ['libs'],
            //   filename:"[name].js",
            //   minChunks: Infinity,
            // }),
            new ExtractTextPlugin("bundle.css"),
            uglifyJs,
            OccurenceOrderPlugin,
            prod,
            assetsPluginInstance,
        ]:[
            // new webpack.optimize.CommonsChunkPlugin({
            //   //names: ['carbon','libs'],
            //   names: ['libs'],
            //   minChunks: Infinity,
            //   filename:"[name].js",
            // }),
            new ExtractTextPlugin("bundle.css"),
        ],
    }
})();
