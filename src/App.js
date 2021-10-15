import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import schema from './formSchema';
import * as yup from 'yup';
import Success from "./Success";
import styled from 'styled-components';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  size: '',
  pepperoni: false,
  prosciutto: false,
  threeCheese: false,
  sausage: false,
  ///// CHECKBOXES /////
  special: ''
}
const initialFormErrors = {
  name: '',
  size: '',
}

const initialOrder = [];
const initialDisabled = true;

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
 
  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder([res.data]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      prosciutto: formValues.prosciutto,
      threeCheese: formValues.threeCheese,
      sausage: formValues.sausage,
      special: formValues.special
    }
    postOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
      <StyledContainer>
        <h1>Lambda Eats</h1>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            successMsg={order === initialOrder ? '': 'Order Successful!'}
           />
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </StyledContainer>    
  );
};
export default App;
