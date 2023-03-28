import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

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

export const SearchForm = styled.form`
  width: 100%;
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;

    strong {
      font-weight: 700;
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
      text-align: right;
    }
  }

  input {
    width: 100%;
    height: 5rem;
    border-radius: 6px;
    border: none;
    padding: 0 1.6rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4.8rem 0;
  grid-column-gap: 3.2rem;

  button {
    width: 100%;
    height: 26rem;
    border-radius: 10px;
    padding: 3.2rem;
    border: none;
    background-color: ${(props) => props.theme['base-post']};
    cursor: pointer;

    :hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 1.6rem;

      strong {
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-title']};
        text-align: left;
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme['base-span']};
        width: 10rem;
      }
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      text-align: left;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`
