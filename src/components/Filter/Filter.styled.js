import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > div {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus-within {
      border-color: #337ab7;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
