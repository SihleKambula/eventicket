import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function EventCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='green iguana'
        />
        <CardContent>
          <Typography fontWeight={600}>Event Name</Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
