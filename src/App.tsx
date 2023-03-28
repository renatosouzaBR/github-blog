import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <div>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  )
}
