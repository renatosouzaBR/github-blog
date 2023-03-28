import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

import { api } from '@/lib/api'

import { ProfileContainer } from './styles'
import { useEffect, useState } from 'react'

type ProfileType = {
  name: string
  login: string
  avatar_url: string
  html_url: string
  followers: number
  company: string
  bio: string
}

export function Profile() {
  const [profileData, setProfileData] = useState({} as ProfileType)

  async function fetchGithubProfile() {
    const response = await api.get('/users/renatosouzaBR')
    setProfileData(response.data)
  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <div>
        <div>
          <strong>{profileData.name}</strong>
          <a href={profileData.html_url} target="_blank" rel="noreferrer">
            GITHUB <GoLinkExternal />
          </a>
        </div>

        <p>{profileData.bio}</p>

        <div>
          <span>
            <FaGithub />
            {profileData.login}
          </span>

          <span>
            <FaBuilding />
            {profileData.company}
          </span>

          <span>
            <FaUserFriends />
            {profileData.followers} seguidores
          </span>
        </div>
      </div>
    </ProfileContainer>
  )
}
