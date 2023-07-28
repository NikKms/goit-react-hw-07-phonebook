import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Label = styled.label`
  font-size: 24px;
  color: #444;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const InputField = styled(Field)`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  margin-right: auto;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #337ab7;
    box-shadow: 0 4px 10px rgba(0, 0, 255, 0.3);
  }
`;

export const FormSubmitButton = styled.button`
  margin-right: auto;
  padding: 8px 16px;
  background-color: transparent;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #337ab7;
    border-radius: 2px;
  }
`;

export const InputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 4px;
`;

export const SubmitButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`;
