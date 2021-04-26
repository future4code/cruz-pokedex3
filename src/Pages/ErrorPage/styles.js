import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  background-color: #338899;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #338499;
    box-shadow:10px 5px 5px #558899;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 70px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "nunito", sans-serif;
  font-size: 48px;
  margin-top: 70px;
  color: #2a2a2a;
`;

export const TextContent = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  font-family: "nunito", sans-serif;
  font-size: 26px;
  color: #2a2a2a;
  max-width: 500px;
`;

export const Img = styled.img`
  max-width: 250px;
`;
export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
