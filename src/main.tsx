import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import App from './App'
import { ManagedUIContext } from './app/context'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ManagedUIContext>
        <App />
      </ManagedUIContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
