const TJS = require('typescript-json-schema')

function formatModule(schemas, refs, code) {
  return `${code}
export const schemas: any = ${JSON.stringify(schemas, null, '  ')}
export const refs: { [key: string]: string } = ${JSON.stringify(
    refs,
    null,
    '  '
  )}
`
}

module.exports = function(source) {
  this.cacheable()

  const settings = {
    required: true,
    excludePrivate: true,
    ref: false,
    aliasRef: false,
  }

  const typeDefinition = this.resourcePath
  const program = TJS.getProgramFromFiles([typeDefinition])
  const schema = TJS.generateSchema(program, '*', settings)

  if (schema == null || schema.definitions == null) {
    return source
  }

  const { definitions } = schema

  const refs = Object.keys(definitions).reduce(
    (prev, current) => ({
      ...prev,
      [current]: `#/components/schemas/${current}`,
    }),
    {}
  )

  const code = source
    .split(/\n/)
    .filter(line => !/^export const /.test(line))
    .join('\n')

  return formatModule(definitions, refs, code)
}
