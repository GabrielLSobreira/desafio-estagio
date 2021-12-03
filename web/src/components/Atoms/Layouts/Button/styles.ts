import styled from 'styled-components';

export const Button = styled.button<{
  backgroundColor: string;
  color: string;
  margin?: string;
  hoverBg: string;
}>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: 0.9rem;
  margin: ${props => props.margin};
  padding: 0.2rem 1rem;
  border: none;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.hoverBg};
  }
`;
