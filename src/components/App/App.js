import React from 'react'

import Filter from '../Filter'
import Sorting from '../Sorting'
import Header from '../Header'
import TicketList from '../TicketList'

import classes from './App.module.scss'

function App() {
  return (
    <main className={classes.main}>
      <Header> Header </Header>
      <Filter />
      <Sorting />
      <TicketList />
    </main>
  )
}

export default App
