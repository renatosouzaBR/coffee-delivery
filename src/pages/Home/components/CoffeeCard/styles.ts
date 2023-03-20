import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.37rem;
  padding: 0 1.2rem 1.25rem;
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

  & > div {
    display: flex;
    gap: 0.25rem;
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
