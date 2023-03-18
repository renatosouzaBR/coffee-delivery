import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 90rem;

  padding: 2rem 10rem;

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      background-color: ${(props) => props.theme['purple-100']};
      border-radius: 6px;
      padding: 0.5rem;

      font-size: 0.875rem;
      color: ${(props) => props.theme['purple-900']};

      svg {
        color: ${(props) => props.theme['purple-400']};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-900']};
      border: none;

      position: relative;
      cursor: pointer;

      span {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 100%;
        background-color: ${(props) => props.theme['yellow-900']};

        font-size: 0.75rem;
        font-weight: 700;
        color: ${(props) => props.theme.white};

        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
      }
    }
  }
`
