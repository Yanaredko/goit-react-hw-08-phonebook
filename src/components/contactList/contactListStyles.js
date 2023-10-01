import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 0;
  margin-top: 20px;
  margin-left: 40px;
`;

export const ContactListItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-style: italic;

`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #254E58;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #112D32;
  }
`;