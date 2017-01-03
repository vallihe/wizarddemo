import React from 'react'
import '../../../styles/components/form.scss'

const { DOM: {input} } = React

const renderField = ({ props, input, label, type, value, meta: { touched, error } }) => (
  <div>
  	<div className="form--label">
    <label>{label}</label>
    </div>
    <div className="form--input">
      <input {...input} placeholder={label} type={type} onChange={ event => { input.onChange(event) } } value={value} ref={(input) => { label = input; }} />
      {{label}.touched && {label}.error && <span>{{label}.error}</span>}
    </div>
  </div>
)

export default renderField