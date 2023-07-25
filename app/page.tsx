"use client";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Card, Typography, Grid } from "@mui/material";
import EventCard from "@/components/EventCard";
export default function Home() {
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
    return () => unsub();
  }, []);

  return (
    <main>
      <Container sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <EventCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EventCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EventCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EventCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EventCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
