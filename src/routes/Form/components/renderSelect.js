import React from 'react'

const renderSelect = ({ field, label, input, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
    	<input {...input} type="radio"/>
    	{touched && error && <div className="error">{error}</div>}
	</div>
)

export default renderSelect