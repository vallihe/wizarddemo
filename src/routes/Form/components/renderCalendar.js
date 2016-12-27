import React from 'react'
import '../../../styles/components/form.scss'
const renderCalendar = ({ input, label, type, value, meta: { touched, error } }) => (
  <div>
  	<div className="form--label">
    <label>{label}</label>
    </div>
    <div className="form--input">
      <input {...input} placeholder={label} type={type} onChange={({value}).onChange} value={value} ref={(input) => { value = input; }} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderCalendar