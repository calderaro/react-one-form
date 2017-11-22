import React from 'react'
import {render} from 'react-dom'
import {Input} from '../index.js'

const Example = () => (
  <div>
    <Input {...{store: {data: {}}, id: 'lol'}} />
    <Input {...{store: {data: {}}, id: 'lel', type: 'password'}} />
    <Input {...{store: {data: {}}, id: 'lil', type: 'select'}} />
  </div>
)

render(<Example />, document.getElementById('root'))
