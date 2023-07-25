"use client";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Box, Card, Typography } from "@mui/material";
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
      <Container>
        <Box>
          <Card>
            <Typography variant='h2'>Hello Sihle</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
