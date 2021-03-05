import { TodoList } from '@components/todo-list'
import { AppHeader } from '@components/app-header'
import { SearchField } from '@components/search-field'
import { StatusFilter } from '@components/status-filter'
import { InputForm } from '@components/input-form'

import { Box } from '@ui/layout'

import './App.css'

export const App = () => {
  return (
    <Box className="app">
      <AppHeader />
      <Box className="search-panel d-flex">
        <SearchField />
        <StatusFilter />
      </Box>
      <TodoList />
      <InputForm />
    </Box>
  )
}
