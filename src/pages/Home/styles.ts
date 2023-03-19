import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WelcomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  background-image: url('src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  max-width: 90rem;
  padding: 5rem 10rem;

  & > img {
    height: 22.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-900']};
      line-height: 1.3;
    }

    & > span {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-800']};
    }

    & > div {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1.25rem;
    }
  }
`

export const CoffeesContainer = styled.main`
  width: 100%;
  max-width: 90rem;
  padding: 2rem 10rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-800']};
  }

  & > div {
    padding: 3.375rem 0;

    display: flex;
    gap: 1.2rem;
    row-gap: 2.5rem;
    flex-wrap: wrap;
  }
`
