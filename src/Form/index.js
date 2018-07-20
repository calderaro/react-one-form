import React from 'react'
import Input from '../Input/'

const Form = ({model, title, list, state, actions, inputs}) => {
  const go = actions.router.go
  const store = state[model]
  const {save, change} = actions[model]
  const parseInputs = (inputs) => inputs.map(input =>
    Array.isArray(input)
    ? <div>{parseInputs(input)}</div>
    : Input({store, change, ...input}))
  return (
    <div>
      <div>
        <div><h1>{title || model.charAt(0).toUpperCase() + model.slice(1)}</h1></div>
        <button onclick={() => go(list || '/' + model)}>Listado</button>
      </div>
      <div>
        <form>
          {parseInputs(inputs)}
        </form>
        <div>
          <button type='button' onclick={save}>
            {store.process
              ? <div><i className='fa fa-circle-o-notch fa-spin' /></div>
              : 'Guardar'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
