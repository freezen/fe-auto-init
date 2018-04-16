/************************************************************************

 *************************************************************************/
var path = require("path");
var webpack = require('webpack');

//plugins
var I18nPlugin = require("i18n-webpack-plugin");

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

var languages = {
    "en": require("./i18n/en.json"),
    "de": require("./i18n/de.json"),
    "zh": require("./i18n/zh.json"),
    "fr": require("./i18n/fr.json"),
    "it": require("./i18n/it.json"),
    "ja": require("./i18n/ja.json"),
    "pt-br": require("./i18n/pt-br.json"),
    "zh-tw": require("./i18n/zh-tw.json"),
    "es": require("./i18n/es.json"),
};
if(env==null||env!='production'){
  for(var key in languages){
    if('en'!=key){
      delete languages[key]
    }
  }
}

module.exports = Object.keys(languages).map(function(language) {
    assetsPluginInstance = new AssetsPlugin({
      filename: "dist/"+language+'/webpack-assets.json',
    })
    return {
        name: language,
        entry: {
          bundle: path.resolve(__dirname, './src0/main.js'),
          libs: [
            "react","react-dom","react-addons-update","redux-thunk","redux-immutable",
            "redux","react-redux","react-addons","immutable",
            "react-router",
            //'@watson-iot/ui-primitives-react',"@watson-iot/ui-components-react",
          ],
          iotp:["react","react-dom","react-addons-update","react-addons","@watson-iot/ui-components-react",'@watson-iot/ui-primitives-react'],
        },
        // entry: './src/iot_portal.js',

        output: {
            path: './dist/'+language+'/',
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
            },{
              test: /\.modules\.css$/,
              loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]')
            },{
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
            path.resolve('./src0/components'),
          ]
        },
        plugins: (env&&env=='production')?[
            new I18nPlugin(
                languages[language]
            ),
            new webpack.optimize.CommonsChunkPlugin({
              names: ['iotp','libs'],
              //names: ['libs'],
              filename:"[name].js",
              minChunks: Infinity,
            }),
            new ExtractTextPlugin("bundle.css"),
            uglifyJs,
            OccurenceOrderPlugin,
            prod,
            assetsPluginInstance,
        ]:[
            new I18nPlugin(
                languages[language]
            ),
            new webpack.optimize.CommonsChunkPlugin({
              names: ['iotp','libs'],
              //names: ['libs'],
              minChunks: Infinity,
              filename:"[name].js",
            }),
            new ExtractTextPlugin("bundle.css"),
        ],
    }
});
