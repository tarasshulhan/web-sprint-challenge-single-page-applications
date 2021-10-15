import React from 'react'
import {Link} from 'react-router-dom';

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
    successMsg
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form id='pizza-form' className='form container' onSubmit={onSubmit}>
      <h2>Build Your Own Pizza!</h2>
      
      <div className='form-group inputs'>
        {/* Name input */}
        <label>Name&nbsp;
          <input
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        {/* Pizza Size */}
        <label>Size
          <select
            id='size-dropdown'
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>

         {/* Toppings */}
        <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        <label>Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>

        <label>Prosciutto
          <input
            type="checkbox"
            name="prosciutto"
            onChange={onChange}
            checked={values.prosciutto}
          />
        </label>

        <label>Three Cheese
          <input
            type="checkbox"
            name="threeCheese"
            onChange={onChange}
            checked={values.threeCheese}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>
      </div>

      <label>Special Instructions
          <input
            id='special-text'
            value={values.special}
            onChange={onChange}
            name='special'
            type='text'
          />
        </label>
      </div>

      <div className='form-group submit'>

        {/* 🔥 DISABLE THE BUTTON */}
        <Link to={'/success'}>
            <button id='order-button' disabled={disabled}>Order!</button>
        </Link>
        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
      </div>
    </form>
  )
}