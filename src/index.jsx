import React from 'react';
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'

const here = document.getElementById('root')

const app = <App />

render(app, here)
