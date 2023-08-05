"use client";
import { EventImage, PriceSelection } from "@/components";
import { db } from "@/firebase/config";
import { Container, Grid } from "@mui/material";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  //local state
  const [event, setEvent] = useState<DocumentData>();

  // Fetch single event
  useEffect(() => {
    const getdata = async () => {
      const docRef = doc(db, "events", params.id);
      const docSnap = await getDoc(docRef);
      setEvent(docSnap.data());
    };
    getdata();
  }, []);
  return (
    <>
      {event && (
        <Container sx={{ paddingTop: "50px" }}>
          <Grid container gap={3}>
            <Grid item xs={12} sm={5}>
              <EventImage event={event} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <PriceSelection event={event} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
