import { useEffect, useState } from 'react';
import axios from "axios";
import logo from './logo.svg';
import * as yup from 'yup';
import './App.css';
import Form from './Form';
import formSchema from './validation/formSchema';

const initialFormValues = {
  username: '', 
  email: '', 
  password: '',
  checked: false
};

const initalFormErrors = {
  username: '', 
  email: '', 
  password: '', 
  checked: ''
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    console.log("handleSubmit is being called");
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    console.log("handleChange:", name, value)
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  };

  console.log("App component - formValues:", formValues);
  console.log("App component - formErrors:", formErrors);

  return (
    <div>
      <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors}
        handleSubmit={handleSubmit}
      />
      {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
