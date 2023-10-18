import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { blue } from "@mui/material/colors"
import { ReactElement } from "react"

const MaterialThemeWrapper = ({ children, currentTheme }: { children: ReactElement, currentTheme: string }) => {
  const theme = createTheme({
    palette: {
      mode: currentTheme === "light" ? "light" : "dark",
      primary: {
        main: blue[600],
      },
      secondary: {
        main: "#FFFFFF",
      },

      background: {
        default: currentTheme === "light" ? "#FFFFFF" : "rgba(0,0,0,0.5)"
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MaterialThemeWrapper
