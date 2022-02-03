import Link from "next/link";
import Image from "next/image";
import {FaPencilAlt, FaTimes} from 'react-icons/fa';
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import styles from "../../styles/Event.module.css";

const EventPage = ({evt}) => {
  const deleteEvent = (e) => {
    console.log('delete event');
  }


  return (
      <Layout>
        <div className={styles.event}>
          <div className={styles.controls}>
            <Link href={`/events/edit/${evt.id}`}>
              <a>
                <FaPencilAlt /> Edit Event
              </a>
            </Link>
            <a href="#" className={styles.delete} onClick={deleteEvent}>
               <FaTimes /> Delete Event
                </a>
          </div>
          <span>
            {evt.date} at {evt.time}
          </span>
          <h1> {evt.name} </h1>
          {evt.image && (
            <div className={styles.image}> 
              <Image src={evt.image} width={960} height={600} />
            </div>
          )}
          <h3> Description: </h3>
          <p> {evt.description} </p>
          <h3> Venue: {evt.venue} </h3>
          <p> {evt.address} </p>  

          <Link href="/events">
            <a className={styles.back}>
              {'<'} Go Back
            </a>
          </Link>
        </div>
      </Layout>
  );
};

export default EventPage;

export async function getServerSideProps(context) {
  const slug = context.params.slug[0];
  const id = context.params.slug[1];
  const res = await fetch(`${API_URL}/api/events/${slug}/${id}`);
  const eventsRes = await res.json()
  const event = eventsRes.evt;

  return {
    props: {evt: event},
  }
}
