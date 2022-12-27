import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Logo from "./components/atoms/Logo";

import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Logo/>
        <App/>
    </React.StrictMode>,
)
