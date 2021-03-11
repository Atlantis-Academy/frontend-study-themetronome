import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

import React    from 'react'
import ReactDOM from 'react-dom'

import { App }  from '@ui/app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
