import './App.css'

import React            from 'react'

import { Header }       from '@ui/header'
import { InputForm }    from '@ui/input-form'
import { Box }          from '@ui/layout'
import { SearchField }  from '@ui/search-field'
import { StatusFilter } from '@ui/status-filter'
import { TodoList }     from '@ui/todo-list'

export const App = () => {
  return (
    <Box className='app'>
      <Header />
      <Box className='search-panel d-flex'>
        <SearchField />
        <StatusFilter />
      </Box>
      <TodoList />
      <InputForm />
    </Box>
  )
}
