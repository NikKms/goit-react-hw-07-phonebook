import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    position: relative;
  }

  h3::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: -8px;
    left: 0;
  }
`;
