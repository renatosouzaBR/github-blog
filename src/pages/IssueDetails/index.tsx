import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

import { IssueDetailsContainer, MarkdownDetails } from './styles'

export function IssueDetails() {
  return (
    <IssueDetailsContainer>
      <header>
        <div>
          <a href="#">
            <FaChevronLeft />
            Voltar
          </a>

          <a href="#">
            Ver no github
            <GoLinkExternal />
          </a>
        </div>

        <strong>JavaScript data types and data structures</strong>

        <div>
          <span>
            <FaGithub />
            cameronwll
          </span>

          <span>
            <FaCalendarDay />
            Rocketseat
          </span>

          <span>
            <FaComment />
            32 seguidores
          </span>
        </div>
      </header>

      <MarkdownDetails>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquid
        quibusdam omnis nam vitae officia quidem! Doloribus modi repellendus
        aperiam eius ratione. Nemo ipsa minus, aperiam molestiae veniam tempora
        facilis.
      </MarkdownDetails>
    </IssueDetailsContainer>
  )
}
