import AppHeader from '../app-header'
import SearchField from '../search-field'
import StatusFilter from '../status-filter'
import TodoList from '../todo-list'
import InputForm from '../input-form'

import './App.css'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchField />
        <StatusFilter />
      </div>
      <TodoList />
      <InputForm />
    </div>
  )
}

export default App
