import React, { useState } from 'react';
import validator from 'validator';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

import { BlockRow } from '../block-row/block-row';
import { useForm } from '../../services/hooks/use-form';

import styles from './form.module.scss';

// TODO сделать отправку данных на сервер
const sendApply = (values) => {
  console.log('Отправка данных на сервер', values);
};

export const Form = () => {
  // стейты для отслеживания ошибок валидации формы
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // обработка изменений полей формы
  const { values, handleInputChange } = useForm({
    name: '',
    tel: '',
    email: '',
  });

  const validatorName = () => {
    const name = values.name.charAt(0).toUpperCase() + values.name.slice(1);
    setNameError(!/^[а-я ]+$/i.test(name));
  };
  const validatorTel = () => {
    setTelError(!validator.isMobilePhone(values.tel, ['ru-RU']));
  };
  const validatorEmail = () => {
    setEmailError(!validator.isEmail(values.email));
  };

  const validatorForm = () => {
    validatorName();
    validatorTel();
    validatorEmail();
  };

  const isFormValid = !nameError && !telError && !emailError;

  const handleSubmit = (event) => {
    event.preventDefault();
    validatorForm();

    // проверка формы на валидность, если всё ок, идёт запрос не сервер
    if (isFormValid) {
      sendApply(values);
    }
  };

  const marginField =
    document.documentElement.clientWidth > 900 ? 'normal' : 'none';

  return (
    <BlockRow
      caption="Оставить заявку"
      name="form"
      title="Получите консультацию"
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label="Имя"
          required
          variant="outlined"
          type="text"
          name="name"
          margin={marginField}
          onChange={handleInputChange}
          onBlur={validatorName}
          error={nameError}
        />
        <TextField
          label="Телефон"
          required
          variant="outlined"
          type="tel"
          name="tel"
          margin={marginField}
          onChange={handleInputChange}
          onBlur={validatorTel}
          error={telError}
        />
        <TextField
          label="Почта"
          required
          variant="outlined"
          type="email"
          name="email"
          margin={marginField}
          onChange={handleInputChange}
          onBlur={validatorEmail}
          error={emailError}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ mt: '2.2em' }}
        >
          Отправить заявку
        </Button>
      </form>
    </BlockRow>
  );
};
