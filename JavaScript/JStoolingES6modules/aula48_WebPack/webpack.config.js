const path = require('path'); // CommonJS
//O módulo path disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system.

module.exports = {
  mode: 'production', //Ativa nomes desconfigurados determinísticos para módulos e blocos, etc
  entry: './src/index.js', //arquivo de entrada/módulo que o webpack vau usar para iniciar a construção do gráfico interno de dependência, encontrar todas a dependências e fazer a importação.
  output: { // nome e local do pacote gerado pelo webpack
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
  },
  // Loaders/módulos possibilitam que o webpack converta esses arquivos em módulos válidos e os adicione ao gráfico de dependência. Também da para converter JavaScript de uma versão para outra. 
  module: { // definem como serão tratados os diferentes tipos de módulos dentro de um projeto.
    rules: [ // solicitações quando os módulos são criados, podem aplicar carregadores ao módulo ou modificar o analisador.
      {
        exclude: /node_modules/,
        test: /\.js$/, //qual modulo será filtrado
        use: {  //qual módulo será usado
          loader: 'babel-loader', //Este pacote permite transpilar arquivos JavaScript usando Babel e webpack
          options: {
            presets: [ // fornece uma configuração de webpack pré-configurada agrupada em um módulo de nó.
              [
                '@babel/preset-env',  //tipo de sonfiguração
                {
                  targets: { //compila um ambiente especifico
                    esmodules: true, //permite que outros arquivos JavaScript importem e usem o código exportado como suas dependências.
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',  //permitem que você depure o código JavaScript transpilado como seu idioma de origem
};