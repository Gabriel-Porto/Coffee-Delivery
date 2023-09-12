import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    button {
      border: none;

      display: flex;
      align-items: center;
      border-radius: 0.375rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    button:nth-child(1) {
      gap: 0.25rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['purple-dark']};
      background: ${({ theme }) => theme.colors['purple-light']};
    }

    button:nth-child(1):hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors['purple-dark']};
    }

    button:nth-child(2) {
      color: ${({ theme }) => theme.colors['yellow-dark']};
      background: ${({ theme }) => theme.colors['yellow-light']};
    }

    button:nth-child(2):hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`
