import { ThemeProvider} from "styled-components"
import { defaultTheme } from "./styles/themes/default";

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Start</h1>
    </ThemeProvider>
  )
}

