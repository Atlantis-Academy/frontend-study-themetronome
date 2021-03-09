import { Header } from '@ui/header'
import { SearchField } from '@ui/search-field'
import { StatusFilter } from '@ui/status-filter'
import { TodoList } from '@ui/todo-list'
import { InputForm } from '@ui/input-form'
import { Box } from '@ui/layout'

import './App.css'

export const App = () => {
  return (
    <Box className="app">
      <Header />
      <Box className="search-panel d-flex">
        <SearchField />
        <StatusFilter />
      </Box>
      <TodoList />
      <InputForm />
    </Box>
  )
}
