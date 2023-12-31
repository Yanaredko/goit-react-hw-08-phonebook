import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 20px;
  margin-left: 40px;
  box-sizing: border-box;
  width: 400px;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #254E58;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #254E58;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:active {
    background-color: #254E58;
  }
`;