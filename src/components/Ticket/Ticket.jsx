import React from 'react'

import classes from './Ticket.module.scss'
// import logo from './S7-Logo.png'

export default function Ticket({ ticket }) {
  const { price, segments, carrier } = ticket

  const [departure, arrival] = segments || []

  const takeoffLandingTime = (departDate, flightTime) => {
    const departTime = `${new Date(departDate).getHours()}:${new Date(departDate).getMinutes()}`

    const departMil = new Date(departDate).getTime()
    const durationMil = flightTime * 60 * 1000
    const flightTimeMil = departMil + durationMil
    const arrivalDate = new Date(flightTimeMil)
    const arrivalTime = `${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`

    return `${departTime} - ${arrivalTime}`
  }

  const inWayTime = (duration) => {
    const hour = String(Math.floor(duration / 60)).padStart(2, '0')
    const minute = String(Math.floor(duration % 60)).padStart(2, '0')
    return `${hour}:${minute}`
  }
  const convertPrice = (number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(
      number
    )
  }
  const transferCount = (transferArray) => {
    switch (transferArray.length) {
      case 0:
        return 'Без пересадок'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      case 3:
        return '3 пересадки'
      default:
        return 'Более 3 пересадок'
    }
  }

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <h2 className={classes.price}>{convertPrice(price)}</h2>
        <img className={classes.logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={classes.flightInfo}>
        <div className={classes.wayInfo}>
          <div className={classes.airports}>{`${departure.origin} – ${departure.destination}`}</div>
          <div className={classes.time}>{takeoffLandingTime(departure.date, departure.duration)}</div>
        </div>
        <div className={classes.timeInfo}>
          <div className={classes.inWay}>В пути</div>
          <div className={classes.totalTime}>{inWayTime(departure.duration)}</div>
        </div>
        <div className={classes.transfereInfo}>
          <div className={classes.transfer}>{transferCount(departure.stops)}</div>
          <div className={classes.transferAirports}>{departure.stops.join(', ')}</div>
        </div>
      </div>
      <div className={classes.flightInfo}>
        <div className={classes.wayInfo}>
          <div className={classes.airports}>{`${arrival.origin} – ${arrival.destination}`}</div>
          <div className={classes.time}>{takeoffLandingTime(arrival.date, arrival.duration)}</div>
        </div>
        <div className={classes.timeInfo}>
          <div className={classes.inWay}>В пути</div>
          <div className={classes.totalTime}>{inWayTime(arrival.duration)}</div>
        </div>
        <div className={classes.transfereInfo}>
          <div className={classes.transfer}>{transferCount(arrival.stops)}</div>
          <div className={classes.transferAirports}>{arrival.stops.join(',')}</div>
        </div>
      </div>
    </div>
  )
}
