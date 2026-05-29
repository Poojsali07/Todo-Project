import React from 'react'
import ReactDom from 'react-dom/client'
import Todo from './Todo.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
)
