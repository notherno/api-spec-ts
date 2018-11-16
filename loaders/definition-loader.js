const TJS = require('typescript-json-schema')

function formatModule(definitions, refs, code) {
  return `${code}
export const definitions: any = ${JSON.stringify(definitions, null, '  ')}
export const refs: { [key: string]: string } = ${JSON.stringify(
    refs,
    null,
    '  '
  )}
`
}

module.exports = function(source) {
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

  const code = source
    .split(/\n/)
    .filter(line => !/^export const /.test(line))
    .join('\n')

  callback(null, formatModule(definitions, refs, code))
}
