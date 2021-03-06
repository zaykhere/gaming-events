import Layout from "../components/Layout";
import {API_URL} from "../config";
import EventItem from "../components/EventItem";
import Link from "next/link";

export default function HomePage({events}) {
  return (
    <>
      <Layout>
        <h1> Upcoming Events </h1>
        {events.length === 0 && <h3> No Events to show </h3>}

        {events.map(evt=> (
          <EventItem key={evt.id} evt={evt} />

        ))}

        {events.length > 0 && (
          <Link href="/events"> 
          <a className="btn-secondary"> All Events </a>
          </Link>
        )}
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events/latest`);
  const eventsRes = await res.json();
  const events = eventsRes.events;

  return {
    props: {events: events},
  }
} 
