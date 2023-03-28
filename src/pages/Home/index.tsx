import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

import {
  HomeContainer,
  IssuesContainer,
  ProfileContainer,
  SearchForm,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/renatosouzaBR.png" alt="" />
        <div>
          <div>
            <strong>Renato Souza</strong>
            <a href="#">
              GITHUB <GoLinkExternal />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div>
            <span>
              <FaGithub />
              cameronwll
            </span>

            <span>
              <FaBuilding />
              Rocketseat
            </span>

            <span>
              <FaUserFriends />
              32 seguidores
            </span>
          </div>
        </div>
      </ProfileContainer>

      <SearchForm>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <IssuesContainer>
        <button>
          <div>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </button>
        <button>
          <div>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = 'bar'; // foo is now a string foo = true; // foo is now
            a boolean
          </p>
        </button>
      </IssuesContainer>
    </HomeContainer>
  )
}
