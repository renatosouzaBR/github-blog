import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

import { api } from '@/lib/api'

import { Profile } from './Profile'
import { HomeContainer, IssuesContainer, SearchForm } from './styles'

type Issue = {
  id: number
  created_at: string
  title: string
  body: string
  html_url: string
  comments: number
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const { register, watch } = useForm()
  const queryText = watch('query')

  async function fetchIssues(queryText: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: `${queryText} repo:renatosouzaBR/github-blog`,
      },
    })

    console.log(response.data.items)
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues(queryText)
  }, [queryText])

  return (
    <HomeContainer>
      <Profile />

      <SearchForm>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>

      <IssuesContainer>
        {issues.map((issue) => (
          <NavLink key={issue.id} to="issue-details" state={issue}>
            <div>
              <strong>{issue.title}</strong>
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
            </div>

            <p>{issue.body}</p>
          </NavLink>
        ))}
      </IssuesContainer>
    </HomeContainer>
  )
}
