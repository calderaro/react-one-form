import React from 'react'
import {render} from 'react-dom'
import {Input} from '../index.js'

const change = e => console.log(e.target.id, e.target.value)

const config = {
  change,
  store: {
    data: {
      name: 'react-one-form',
      password: 'asdasd',
      lol: {
        lel: 'xd'
      }
    }
  }
}


const Example = () => (
  <div>
    <Input {...{...config, id: 'name'}} />
    <Input {...{...config, id: 'lol.lel'}} />
    <Input {...{...config, id: 'password', type: 'password'}} />
    <Input {...{...config, id: 'lil', type: 'select'}} />
  </div>
)

render(<Example />, document.getElementById('root'))
