import React from 'react'
import Input from '../Input/'
import style from './style.css'

const Form = ({model, title, list, state, actions, inputs}) => {
  const go = actions.router.go
  const store = state[model]
  const {save, change} = actions[model]
  const parseInputs = (inputs) => inputs.map(input =>
    Array.isArray(input)
    ? <div className={style.division}>{parseInputs(input)}</div>
    : Input({store, change, ...input}))
  return (
    <div className={style.container}>
      <div className={style.bar}>
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
              ? <i className='fa fa-circle-o-notch fa-spin' />
              : 'Guardar'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
