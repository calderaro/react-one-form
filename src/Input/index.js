import React from 'react'
import toPairs from 'lodash/fp/toPairs'

const Input = props => {
  const {id, type, label, values, valuesName, store, change, options} = props
  const value = store.data[id]
  const err = store.err && store.err.errors && store.err.errors[id] && store.err.errors[id]
  const getOptions = values => Array.isArray(values)
    ? values.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)
    : toPairs(values).map((e, i) => <option key={i} value={e[0]}>{e[1]}</option>)

  const select = () =>
    <select
      id={id}
      value={value}
      onChange={change} >
      {getOptions(values || store[valuesName || (id + 'List')])}
    </select>

  const checkbox = () =>
    <input
      type='checkbox'
      id={id}
      checked={!!value}
      onChange={change} />

  const radio = () =>
    <div>
      {(options || store[valuesName || (id + 'Options')]).map((o, i) => (
        <div key={i}>
          <label htmlFor={id + i}>{o.label}</label>
          <input
            type='radio'
            id={id + i}
            name={id}
            checked={String(value) === String(o.value)}
            value={o.value}
            onChange={change} />
        </div>
      ))}
    </div>

  const text = (type = 'text') =>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={change} />

  const textarea = () =>
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={change} />
      {err ? <div>{err.message}</div> : null}
    </div>

  if (type === 'textarea') return textarea()

  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {(type === 'select' ? select
        : type === 'checkbox' ? checkbox
        : type === 'date' ? text
        : type === 'number' ? text
        : type === 'password' ? text
        : type === 'radio' ? radio
        : text)(type)}
      {err ? <div>{err.message}</div> : null}
    </div>
  )
}

export default Input
