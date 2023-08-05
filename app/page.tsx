"use client";
import { useEffect, useState } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Grid } from "@mui/material";
import EventCard from "@/components/EventCard";

export default function Home() {
  const [events, setEvents] = useState<QueryDocumentSnapshot[]>([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      setEvents(snapshot.docs);
    });
    return () => unsub();
  }, []);

  return (
    <main>
      <Container sx={{ marginTop: "20px" }}>
        {events.length ? (
          <Grid container spacing={2}>
            {events.map((event) => {
              const {
                eventName,
                date,
                eventLocation,
                imageUrl,
                endTime,
                startPrice,
                startTime,
              } = event.data();
              return (
                <Grid key={eventName} item xs={12} sm={6} md={4}>
                  <EventCard
                    eventName={eventName}
                    imageUrl={imageUrl}
                    location={eventLocation}
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    startPrice={startPrice}
                    id={event.id}
                    key={event.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <p>Loading</p>
        )}
      </Container>
    </main>
  );
}
