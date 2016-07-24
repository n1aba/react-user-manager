import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import UserManager from './components/userManager.js'


render(
  <UserManager/>
  , document.getElementById('root')
)
