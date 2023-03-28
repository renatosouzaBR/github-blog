import styled from 'styled-components'

export const ProfileContainer = styled.header`
  width: 100%;
  padding: 3.2rem 3.2rem 3.2rem 4rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -9.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  & > img {
    width: 14.2rem;
    height: 14.2rem;
    border-radius: 8px;
  }

  & > div {
    div:first-child {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${(props) => props.theme.blue};

        display: flex;
        align-items: center;
        gap: 0.8rem;
        text-decoration: none;
        height: min-content;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid transparent;

        :hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }
      }
    }

    & > p {
      margin: 0.8rem 0;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      text-align: left;
    }

    div:last-child {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      margin-top: 1.6rem;

      span {
        color: ${(props) => props.theme['base-subtitle']};
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
          width: 1.8rem;
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
