import React from 'react'
import {render} from 'react-dom'
import {Input} from '../index.js'

render(<Input {...{store: {data: {}}, id: 'lol'}} />, document.getElementById('root'))
