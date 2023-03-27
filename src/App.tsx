import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
