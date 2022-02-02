import Layout from "../../components/Layout";
import EventItem from "../../components/EventItem";
import { API_URL } from "../../config";

const EventsPage = ({events}) => {
  console.log(events[0].id);
  return (
      <Layout>
        <h1> Events </h1>
        {events.length === 0 && <h3> No Events to show </h3>}

        {events.map(evt=> (
          <EventItem key={evt.id} evt={evt} />

        ))}
      </Layout>
  );
};

export default EventsPage;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const eventsRes = await res.json()
  const events = eventsRes.data;

  return {
    props: {events},
  }
}