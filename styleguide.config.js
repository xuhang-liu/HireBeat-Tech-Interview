module.exports = {                        
    webpackConfig: {                           
      module: {                           
        rules: [                               
        {                                    
           test: /\.jsx?$/,                                 
           exclude: /node_modules/,                                 
           loader: "babel-loader"                              
        }         
       ]                           
    }                         
   },
   sections: [
     {
       name: 'Installation',
       content: 'docs/installation.md',
       exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
       usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
     },
   ]
};