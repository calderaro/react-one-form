import React from 'react'
import toPairs from 'lodash/fp/toPairs'
import get from 'lodash/fp/get'
import InputFile from './InputFile/'

const Input = props => {
  const defaults = {style: {}, type: 'text'}
  const sprops = {...defaults, ...props}
  const {id, type, label, value, values, valuesName, store, change, options, style} = sprops
  const val = value || get(id, store.data)
  const err = store.err && store.err[id]
  const getOptions = values => Array.isArray(values)
    ? values.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)
    : toPairs(values).map((e, i) => <option key={i} value={e[0]}>{e[1]}</option>)

  const select = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select
        id={id}
        value={val}
        onChange={change} >
        {getOptions(values || store[valuesName || (id + 'List')])}
      </select>
      {err ? <span>{err}</span> : null}
    </div>

  const checkbox = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type='checkbox'
        id={id}
        checked={!!val}
        onChange={change} />
      {err ? <span>{err}</span> : null}
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
            checked={String(val) === String(o.value)}
            value={o.value}
            onChange={change} />
        </div>
      ))}
      {err ? <span>{err}</span> : null}
    </div>

  const textarea = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea
        id={id}
        name={id}
        value={val}
        onChange={change} />
      {err ? <span>{err}</span> : null}
    </div>

  const file = () =>
    <InputFile {...{id, type, label, value: val, change, style, err}} />

  const text = () =>
    <div className={style[id] || style[type]}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type || 'text'}
        id={id}
        name={id}
        value={val}
        onChange={change}
        min={this.props.min}
        max={this.props.max} />
      {err ? <span>{err}</span> : null}
    </div>

  if (type === 'checkbox') return checkbox()
  if (type === 'radio') return radio()
  if (type === 'textarea') return textarea()
  if (type === 'select') return select()
  if (type === 'file') return file()
  return text()
}

export default Input
