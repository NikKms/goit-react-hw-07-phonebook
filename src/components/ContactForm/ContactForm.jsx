import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormSubmitButton,
  Label,
  InputForm,
  InputField,
  ErrorMsg,
  SubmitButtonContainer,
} from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactsSlice';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9'-\s]+$/,
      'Name may contain only letters, Cyrillic letters, digits, apostrophe, dash, and spaces.'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^[0-9\s+()-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = () => {
  const navigate = useNavigate();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addContact({
        name: values.name,
        number: values.number,
      });
      resetForm();
      navigate('/contacts');
    } catch (error) {
      console.error('Error while adding contact:', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <InputForm>
          <Label>
            <InputField type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMsg} />
          </Label>
          <Label>
            <InputField type="tel" name="number" placeholder="Phone" />
            <ErrorMessage name="number" component={ErrorMsg} />
          </Label>
          <SubmitButtonContainer>
            <FormSubmitButton type="submit">ADD</FormSubmitButton>
          </SubmitButtonContainer>
        </InputForm>
      </Formik>
    </>
  );
};
