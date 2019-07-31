import React from 'react';
import './App.css';
import FormInputNumber from './Components/FormInputPhone';
import FormInputPhoneAndName from './Components/FormInputPhoneAndName';

function App() {
  return (
    <div className="App">
      <FormInputNumber/>
      <hr/>
      <FormInputPhoneAndName
        type="text"
        name="fullname" 
        needValidation
      />
      <FormInputPhoneAndName
        type="text"
        name="phonenumber" 
        needValidation
      />
      <FormInputPhoneAndName 
        type="text"
        name="others" 
        needValidation={false}
      />   
    </div>
  );
}

export default App;
