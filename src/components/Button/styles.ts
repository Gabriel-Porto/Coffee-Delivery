import styled from 'styled-components'

export const ButtonContainer = styled.button`
  border: none;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border-radius: 0.375rem;
  background: var(--brand-purple-light, #ebe5f9);

  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  svg {
    background-color: ${({ theme }) => theme.colors['yellow-light']};
  }
`
