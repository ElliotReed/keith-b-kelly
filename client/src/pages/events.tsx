import React, { useState, useEffect } from "react"
// import moment from "moment"
// import Moment from "react-moment"

import ItemBlock from "../components/shared/ItemBlock"
import Seo from "../components/seo"
import * as style from "./events.module.scss"

const convertTime = time => {
  const newDateTime = new Date(`2000-1-1 ${time}`)
  const newTime = newDateTime.getTime()
  return newTime
}

const NoEventsNotice = () => (
  <p>
    There are no performances currently scheduled, check back soon for updates.
  </p>
)

const EventCard = ({ event }) => (
  <article className={style.eventCard}>
    <div className={style.date}>
      <span>
        {/* <Moment format="dddd, MMMM Do, YYYY ">{event.date}</Moment> */}
      </span>
      <span>
        {/* <Moment format="h:mm A">{convertTime(event.time)}</Moment> */}
      </span>
    </div>
    <h2 className={style.name}>{event.name}</h2>
    <p>{event.description}</p>
    <p>
      <a href={`${event.url}`} target="_blank" rel="noreferrer">
        {event.url}
      </a>
    </p>
  </article>
)

const EventsPage = () => {
  const [eventsList, setEventsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = () => {
      setLoading(true)
      fetch("http://localhost:3066/performances", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setEventsList(data)
          setLoading(false)
        })
    }
    loadEvents()
  }, [])

  return (
    <>
      <Seo title="Events" />
      <ItemBlock>
        <h1 className={style.pageHeader}>Upcoming Shows</h1>
        {loading ? (
          <div>Loading...</div>
        ) : eventsList.length < 1 ? (
          <NoEventsNotice />
        ) : (
          eventsList
            .sort((a, b) => {
              // const adate = moment(a.date)
              // const bdate = moment(b.date)
              // return adate - bdate
            })
            .map(event => <EventCard event={event} />)
        )}
      </ItemBlock>
    </>
  )
}
export default EventsPage
