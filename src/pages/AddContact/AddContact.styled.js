import styled from '@emotion/styled';

export const StyledAddContactPage = styled.section`
  padding: 16px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border-radius: 15px;
  position: relative;
`;

export const ContactAvatarContainer = styled.div`
  width: 240px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #cfcccc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledLinkCancel = styled.button`
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
