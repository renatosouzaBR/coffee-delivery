import styled from 'styled-components'

export const CounterInputContainar = styled.div`
  height: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-300']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme['base-900']};
  }

  svg {
    color: ${(props) => props.theme['purple-400']};
    cursor: pointer;
  }
`
