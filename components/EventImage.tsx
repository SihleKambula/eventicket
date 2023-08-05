import { Box, Typography } from "@mui/material";
import { DocumentData } from "firebase/firestore";
export default function EventImage(event: { event: DocumentData }) {
  const { eventName, date, eventLocation, imageUrl } = event.event;

  return (
    <>
      {event && (
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            backgroundImage: `url(${imageUrl})`,
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
              {eventName}
            </Typography>
            <Typography variant='body1' color='#D0D0D0'>
              {eventLocation}
            </Typography>
            <Typography variant='body1' color='#D0D0D0'>
              {date}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
