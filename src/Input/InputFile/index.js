import React from 'react'

const isFileList = i => Object.prototype.toString.call(i) === '[object FileList]'

export default class InputFile extends React.Component {
  open = () => this.refs.input.click()
  render = () => {
    const {id, type, label, value, change, style, err} = this.props
    return (
      <div className={style[id] || style[type]}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <div>
          <input
            type='text'
            value={isFileList(value) ? [...value].map(v => v.name).join(', ') : value.name ? value.name : value} />
          <button type='button' onClick={this.open}>
            Seleccionar
          </button>
          <button type='button' onClick={this.open}>
            Eliminar
          </button>
        </div>
        <input
          type='file'
          ref='input'
          id={id}
          name={id}
          onChange={change} style={{display: 'none'}} />
        {err ? <span>{err}</span> : null}
      </div>
    )
  }
}
