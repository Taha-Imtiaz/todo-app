
import './App.css'
import { TodoProvider } from './contexts/TodoContext/TodoProvider'
import MaterialThemeWrapper from './theme/MaterialThemeWrapper/MaterialThemeWrapper'
import Header from './components/Header/Header'
import TodoCardContainer from './containers/TodoCardContainer/TodoCardContainer'
import { Fragment, useState } from 'react'

const App = () => {

  const [defaultTheme, setDefaultTheme] = useState("light")

  const handleChangeTheme = () => {
    if (defaultTheme === 'light') {
      setDefaultTheme("dark")
    }
    else {
      setDefaultTheme("light")
    }
  }

  return (

    <MaterialThemeWrapper currentTheme={defaultTheme}>
      <TodoProvider>
        <Fragment>
          <Header currentTheme={defaultTheme} onChange={handleChangeTheme} />
          <TodoCardContainer />
        </Fragment>
      </TodoProvider>
    </MaterialThemeWrapper>
  )
}

export default App
