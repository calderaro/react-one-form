import React from 'react'
import {render} from 'react-dom'
import Form from './Form'
import Input from './Input'

render(<Input {...{store: {data: {}}, id: 'lol'}} />, document.getElementById('root'))

export default {Form, Input}
