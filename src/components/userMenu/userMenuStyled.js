import styled from 'styled-components';

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #254E58;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  font-size: 24px;
  color: #fff;
`;

export const MenuStyled = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid #254E58;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  background-color: #254E58;
  font-weight: 500;
  cursor: pointer;

  &.active {
    border: 2px solid #254E58;
    color: #254E58;
    background-color: #fff;
  }
`;