import React from 'react'
import toPairs from 'lodash/fp/toPairs'

const Input = props => {
  const defaults = {style: {}, type: 'text'}
  const {id, type, label, values, valuesName, store, change, options, style} = {...defaults, ...props}
  const value = store.data[id]
  const err = store.err && store.err[id]
  const getOptions = values => Array.isArray(values)
    ? values.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)
    : toPairs(values).map((e, i) => <option key={i} value={e[0]}>{e[1]}</option>)

  const select = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select
        id={id}
        value={value}
        onChange={change} >
        {getOptions(values || store[valuesName || (id + 'List')])}
      </select>
      {err ? <div>{err}</div> : null}
    </div>

  const checkbox = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type='checkbox'
        id={id}
        checked={!!value}
        onChange={change} />
      {err ? <div>{err}</div> : null}
    </div>

  const radio = () =>
    <div className={style[id] || style[type]}>
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
      {err ? <div>{err}</div> : null}
    </div>

  const textarea = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={change} />
      {err ? <div>{err}</div> : null}
    </div>

  const text = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type || 'text'}
        id={id}
        name={id}
        value={value}
        onChange={change} />
      {err ? <div>{err}</div> : null}
    </div>

  if (type === 'checkbox') return checkbox()
  if (type === 'radio') return radio()
  if (type === 'textarea') return textarea()
  if (type === 'select') return select()
  return text()
}

export default Input
