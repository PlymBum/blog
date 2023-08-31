import React from 'react'

import Filter from './components/Filter'
import Sorting from './components/Sorting'
import classes from './App.module.scss'
import Header from './components/Header'
import TicketList from './components/TicketList'

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
