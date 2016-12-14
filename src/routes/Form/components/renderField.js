import React from 'react'

const renderField = ({ input, label, type, value, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} value={value}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderField