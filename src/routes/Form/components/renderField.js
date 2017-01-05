import React from 'react'
import '../../../styles/components/form.scss'

const { DOM: {input} } = React

const renderField = ({ props, input, label, type, value, meta: { touched, error } }) => (
    <div className="form--input">
      <input {...input} placeholder={label} value={value} type={type} onChange={ event => { input.onChange(event) } }  ref={(input) => { label = input; }} />
      {{label}.touched && {label}.error && <span>{{label}.error}</span>}
    </div>
)

export default renderField