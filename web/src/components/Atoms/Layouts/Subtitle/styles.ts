import styled from 'styled-components';

export const Subtitle = styled.h2<{ color: string }>`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${props => props.color};
`;
