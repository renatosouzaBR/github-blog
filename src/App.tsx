import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <div>
        <Header />
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  )
}
