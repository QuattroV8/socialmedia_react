const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {

    // Speciefies The Main File of Our Application 

    entry:'./source/index.js' ,
    mode : 'development' , 
    
    // Location of file after bundling  
     
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename:'indexBundle.js'
    },

    // RUN ON WEB 
    target : 'web' ,

    // Server Web Pack Settings 

    devServer:{
        port:3000,
        open:true,
        hot:true,
        liveReload:true,
        historyApiFallback:true,
        static:{
            // Specifies the Directory where webpack will use to serve static files
            directory:path.join(__dirname,'public')
        }
    },
    resolve:{
        extensions:['.js','.jsx','.json']
    },

    module:{
        rules:[
            // Add Babel Loader 
            {
               test:/\.js|\.jsx$/,
               exclude:/node_modules/,
               use:'babel-loader'
            },
            // Add Style && CSS Loader 
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    },

    plugins:[
        // Generate HTML Files for our bundles 
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'public','index.html')
        })
    ]


}