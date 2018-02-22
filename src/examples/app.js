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
      },
      address: {
        lineOne: 'lineOne text'
      },
      img: ''
    }
  }
}

const Example = () => (
  <div>
    <Input {...{...config, id: 'name'}} />
    <Input {...{...config, id: 'lol.lel'}} />
    <Input {...{...config, id: 'address.lineOne'}} />
    <Input {...{...config, id: 'password', type: 'password'}} />
    <Input {...{...config, id: 'lil', type: 'select'}} />
    <Input {...{...config, id: 'img', type: 'file'}} />
  </div>
)

render(<Example />, document.getElementById('root'))
