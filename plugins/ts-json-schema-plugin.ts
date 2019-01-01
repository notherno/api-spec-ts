import * as webpack from 'webpack'

export default class TsJsonSchemaPlugin {
  apply(compiler: webpack.Compiler) {
    compiler.hooks.beforeCompile.tap('TsJsonSchemaPlugin', () => {
      console.log('beforeCompile')
    })
  }
}
