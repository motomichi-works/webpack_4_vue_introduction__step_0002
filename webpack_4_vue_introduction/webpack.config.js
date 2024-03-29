const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // entry point
  entry: {
    'javascripts/first_page': './src/javascripts/first_page.js',
  },
  // 出力するパスは絶対パスで書きます
  output: {
    path: `${__dirname}/webroot/packed`,
    filename: (arg) => {
      console.log('======================================')
      console.log(arg.chunk.id)

      return '[name].bundle.js'
    },
  },
  // webpack4はlordersではなくなりました
  module: {
    rules: [
      // 拡張子.vueのファイルに対する設定
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      // 拡張子.jsのファイルに対する設定
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
    ]
  },
  // デフォルトの設定値だけでは足りないことについて解決します
  resolve: {
    // モジュールを読み込むときに検索するディレクトリの設定
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    // importするときに省略できる拡張子の設定
    extensions: ['.js', '.vue'],
    alias: {
      // importのファイルパスを相対パスで書かないようにsrcのrootを設定
      '@': path.join(__dirname, 'src'),
      // 例えばmain.js内で `import Vue from 'vue';` と記述したときの`from vue`が表すファイルパスを指定
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  // プラグインを列挙
  plugins: [
    new VueLoaderPlugin()
  ],
}
