import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Filter from '../Filter'
import Sorting from '../Sorting'
import Header from '../Header'
import TicketList from '../TicketList'
import { fetchSearchId } from '../redux/searchIdReducer'
import { fetchTickets } from '../redux/ticketsReducer'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.searchId)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    if (id !== undefined) dispatch(fetchTickets(id))
  }, [id])

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
