import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Event {
  imageUrl: string;
  eventName: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  startPrice: number;
}

export default function EventCard({
  imageUrl,
  eventName,
  location,
  date,
  startTime,
  endTime,
  startPrice,
}: Event) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='200px'
          image={imageUrl}
          alt='green iguana'
        />
        <CardContent>
          <Typography fontWeight={600}>{eventName}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {location}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {date}, {startTime}- {endTime}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            R{startPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
