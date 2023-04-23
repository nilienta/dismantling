import { useState } from 'react';

export const useForm = (inputValues) => {
  const [values, setValues] = useState(inputValues);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleInputChange, setValues };
};
