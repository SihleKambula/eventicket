"use client";
import { db } from "@/firebase/config";
import { Box, Typography } from "@mui/material";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
export default function EventImage(id: { id: string }) {
  const [event, setEvent] = useState<DocumentData>();
  //get single doc
  useEffect(() => {
    const getdata = async () => {
      const docRef = doc(db, "events", id.id);
      const docSnap = await getDoc(docRef);
      setEvent(docSnap.data());
    };
    getdata();
  }, []);

  return (
    <>
      {event && (
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            backgroundImage: `url(${event?.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              bottom: 0,
              background: "linear-gradient(transparent, black)",
              width: "100%",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <Typography variant='h5' fontWeight={600} color='white'>
              {event?.eventName}
            </Typography>
            <Typography variant='body1' color='#D0D0D0'>
              {event?.eventLocation}
            </Typography>
            <Typography variant='body1' color='#D0D0D0'>
              {event?.date}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
