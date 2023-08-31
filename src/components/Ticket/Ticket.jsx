import React from 'react'

import classes from './Ticket.module.scss'
import logo from './S7-Logo.png'

export default function Ticket() {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <h2 className={classes.price}>13 900 P</h2>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes.flightInfo}>
        <div className={classes.wayInfo}>
          <div className={classes.airports}>MOW – HKT</div>
          <div className={classes.time}>10:45 – 08:00</div>
        </div>
        <div className={classes.timeInfo}>
          <div className={classes.inWay}>В пути</div>
          <div className={classes.totalTime}>21ч 15м</div>
        </div>
        <div className={classes.transfereInfo}>
          <div className={classes.transfer}>2 пересадки</div>
          <div className={classes.transferAirports}>HKG, JNB</div>
        </div>
      </div>
      <div className={classes.flightInfo}>
        <div className={classes.wayInfo}>
          <div className={classes.airports}>MOW – HKT</div>
          <div className={classes.time}>10:45 – 08:00</div>
        </div>
        <div className={classes.timeInfo}>
          <div className={classes.inWay}>В пути</div>
          <div className={classes.totalTime}>21ч 15м</div>
        </div>
        <div className={classes.transfereInfo}>
          <div className={classes.transfer}>2 пересадки</div>
          <div className={classes.transferAirports}>HKG, JNB</div>
        </div>
      </div>
    </div>
  )
}
