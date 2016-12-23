import React from 'react'
import '../../../styles/components/form.scss'

const renderSelect = ({ field, label, input, meta: { touched, error } }) => (
	<div>
	  	<div className="form--label">
	    	<label>{label}</label>
	    </div>
	    <div className="form--input">
	    	<input {...input} type="radio"/>
	    	{touched && error && <div className="error">{error}</div>}
		</div>
	</div>
)

export default renderSelect