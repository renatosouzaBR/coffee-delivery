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

  img {
    height: 22.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-900']};
      line-height: 1.3;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-800']};
    }

    div {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1.25rem;

      div {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        span {
          flex: 1;
          flex-wrap: wrap;
          font-size: 1rem;
          line-height: 1.3;
          color: ${(props) => props.theme['base-700']};
        }

        div {
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: ${(props) => props.theme['yellow-900']};

          display: flex;
          align-items: center;
          justify-content: center;

          color: ${(props) => props.theme.white};
        }
      }
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
    gap: 2rem;
    row-gap: 2.5rem;
    flex-wrap: wrap;
  }
`

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.37rem;
  padding: 0 1.5rem 1.25rem;
  background-color: ${(props) => props.theme['base-100']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    strong {
      flex: 1;
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-700']};

      &::before {
        content: 'R$ ';
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }

    button {
      border: 0;
      padding: 0.5rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['purple-900']};
      cursor: pointer;

      :hover {
        background-color: ${(props) => props.theme['purple-400']};
      }
    }
  }
`

export const CoffeeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  img {
    margin-top: -1.25rem;
  }

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const CoffeeDescriptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-800']};
  }

  span {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-600']};
  }
`
