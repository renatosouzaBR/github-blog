import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

import { Profile } from './Profile'
import { HomeContainer, IssuesContainer, SearchForm } from './styles'

type Issue = {
  id: number
  createdAt: string
  title: string
  body: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues() {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:renatosouzaBR/github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <SearchForm>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <IssuesContainer>
        {issues.map((issue) => (
          <button key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <span>Há 1 dia</span>
            </div>

            <p>{issue.body}</p>
          </button>
        ))}
      </IssuesContainer>
    </HomeContainer>
  )
}
