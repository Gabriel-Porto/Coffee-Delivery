import styled from 'styled-components'
import heroBackground from '../../assets/hero-background.svg'

export const HomeContainer = styled.main``

export const Hero = styled.section`
  display: flex;
  gap: 3.5rem;
  height: 34rem;

  padding: 5.75rem 10rem;

  background-image: url(${heroBackground});

  .heroText {
    display: flex;
    gap: 4.12rem;
    flex-direction: column;

    .heroTitle {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        color: ${({ theme }) => theme.colors['base-title']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        font-weight: 800;
      }

      p {
        color: ${({ theme }) => theme.colors['base-subtitle']};
        font-size: 1.25rem;
      }
    }

    .heroItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem 2.5rem;

      span {
        width: max-content;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        svg {
          width: 2rem;
          height: 2rem;

          padding: 0.5rem;
          color: ${({ theme }) => theme.colors.white};

          border-radius: 62.5rem;
        }

        &:nth-child(1) svg {
          background-color: ${({ theme }) => theme.colors['yellow-dark']};
        }
        &:nth-child(2) svg {
          background-color: ${({ theme }) => theme.colors['base-text']};
        }
        &:nth-child(3) svg {
          background-color: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(4) svg {
          background-color: ${({ theme }) => theme.colors.purple};
        }
      }
    }
  }
`

export const CoffeeList = styled.section`
  padding: 2rem 10rem 9.81rem;
  display: flex;
  flex-direction: column;
  gap: 3.38rem;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5rem 2rem;
  }
`


