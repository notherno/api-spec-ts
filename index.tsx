import React = require('react')
import { render } from 'react-dom'
import { RedocStandalone } from 'redoc'

// load spec as a TS module
import spec from './spec'

document.addEventListener('DOMContentLoaded', () => {
  render(<RedocStandalone spec={spec} />, document.getElementById('root'))
})
