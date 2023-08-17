import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
interface EventProps {
  date: string;
  eventLocation: string;
  eventName: string;
  imageUrl: string;
  price: number;
  quantity: number;
  startTime: string;
  ticketType: string;
}
export default function PaymentCard(props: { item: EventProps }) {
  const {
    date,
    eventLocation,
    eventName,
    imageUrl,
    price,
    quantity,
    startTime,
    ticketType,
  } = props.item;

  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", marginBottom: "10px" }}>
          <Box
            sx={{
              borderRadius: "10px",
              background: `url(${imageUrl})`,
              width: "180px",
              height: "150px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginRight: "20px",
            }}
          ></Box>
          <Box>
            <Typography variant='body1' fontSize={20} fontWeight={700}>
              {eventName}
            </Typography>
            <Typography
              variant='body2'
              fontSize={15}
              color='text.secondary'
              noWrap
              marginTop='5px'
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOnOutlinedIcon fontSize='small' />
              {eventLocation}
            </Typography>
            <Typography
              variant='body2'
              fontSize={15}
              color='text.secondary'
              marginTop='5px'
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CalendarMonthOutlinedIcon fontSize='small' />
              {date}
            </Typography>
            <Typography
              variant='body2'
              fontSize={15}
              color='text.secondary'
              marginTop='5px'
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AccessTimeOutlinedIcon fontSize='small' />
              {startTime}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginY: "10px" }}>
          <Typography variant='body1' fontSize={20} fontWeight={700}>
            Price
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant='body2' fontSize={15} color='text.secondary'>
              R{price} x {quantity}
            </Typography>
            <Typography variant='body2' fontSize={15} color='text.secondary'>
              R{price * quantity} ZAR
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box marginTop='10px'>
          <Chip label={ticketType} color='primary' />
        </Box>
      </Box>
    </>
  );
}
