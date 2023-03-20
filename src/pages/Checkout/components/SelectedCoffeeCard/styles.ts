import styled from 'styled-components'

export const SelectedCoffeeCardContainer = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-300']};

  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    flex: 1;
    font-weight: 700;
    color: ${(props) => props.theme['base-700']};
    margin-left: 0.5rem;
    text-align: right;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-800']};
    }

    div {
      height: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        border: none;
        border-radius: 6px;
        padding: 0 0.5rem;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        background-color: ${(props) => props.theme['base-300']};

        cursor: pointer;

        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme['base-700']};

        :hover {
          background-color: ${(props) => props.theme['base-400']};
        }

        svg {
          color: ${(props) => props.theme['purple-400']};
        }
      }
    }
  }
`
