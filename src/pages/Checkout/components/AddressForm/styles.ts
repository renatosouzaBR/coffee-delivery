import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-900']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      span {
        color: ${(props) => props.theme['base-800']};
      }

      span:last-child {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-700']};
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > div {
      display: flex;
      gap: 0.75rem;
    }
  }
`
