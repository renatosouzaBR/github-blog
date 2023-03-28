import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const IssueDetailsContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  header {
    width: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    padding: 3.2rem;
    margin-top: -8.8rem;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-size: 1.2rem;
        font-weight: 700;
        color: ${(props) => props.theme.blue};
        text-transform: uppercase;
        text-decoration: none;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid transparent;

        :hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }

        svg {
          width: 1.2rem;
        }
      }
    }

    strong {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};

      display: block;
      margin: 2rem 0 1.2rem;
    }

    div:last-child {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: ${(props) => props.theme['base-span']};

        svg {
          width: 1.8rem;
        }
      }
    }
  }
`

export const MarkdownDetails = styled(ReactMarkdown)`
  width: 100%;
  padding: 4rem 3.2rem;
`
