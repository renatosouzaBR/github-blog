import { NavLink, useLocation } from 'react-router-dom'
import { GoLinkExternal } from 'react-icons/go'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import { IssueDetailsContainer, MarkdownDetails } from './styles'

type FullIssue = {
  id: number
  created_at: string
  title: string
  body: string
  html_url: string
  comments: number
}

export function IssueDetails() {
  const { state } = useLocation()
  const issue = state as FullIssue
  console.log(issue)

  return (
    <IssueDetailsContainer>
      <header>
        <div>
          <NavLink to="/">
            <FaChevronLeft />
            Voltar
          </NavLink>

          <a href={issue.html_url} target="_blank" rel="noreferrer">
            Ver no github
            <GoLinkExternal />
          </a>
        </div>

        <strong>{issue.title}</strong>

        <div>
          <span>
            <FaGithub />
            renatosouzaBR
          </span>

          <span>
            <FaCalendarDay />
            RAS
          </span>

          <span>
            <FaComment />
            {issue.comments} comentários
          </span>
        </div>
      </header>

      <MarkdownDetails>{issue.body}</MarkdownDetails>
    </IssueDetailsContainer>
  )
}
