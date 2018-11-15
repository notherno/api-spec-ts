const TJS = require('typescript-json-schema')

module.exports = function() {
  this.cacheable()
  const callback = this.async()

  const settings = {
    required: true,
    excludePrivate: true,
    ref: true,
    aliasRef: true,
  }
  const typeDefinition = this.resourcePath

  this.addDependency(typeDefinition)

  const program = TJS.getProgramFromFiles([typeDefinition])
  const schema = TJS.generateSchema(program, '*', settings)

  const { definitions } = schema

  const refs = Object.keys(definitions).reduce(
    (prev, current) => ({ ...prev, [current]: `#/definitions/${current}` }),
    {}
  )

  const output = `
  export const definitions: any = ${JSON.stringify(definitions, null, '  ')}
  export const refs: { [key: string]: string } = ${JSON.stringify(
    refs,
    null,
    '  '
  )}
  `

  callback(null, output)
}
