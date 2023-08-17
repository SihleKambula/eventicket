"use client";
import PaymentCard from "@/components/PaymentCard";
import { useCart } from "@/store/store";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Page() {
  const { items } = useCart((state) => state);
  let total: number = 0;

  return (
    <>
      <Container sx={{ paddingTop: "20px" }}>
        <Typography variant='h2'>Payment</Typography>
        <Grid container spacing={4}>
          {items.map((item: any) => {
            return (
              <Grid item md={4}>
                <PaymentCard item={item} />
              </Grid>
            );
          })}
        </Grid>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          marginTop='20px'
        >
          <Box>
            <Typography>
              {items.forEach((item: any) => {
                total = total + item.price * item.quantity;
              })}
              Total Cost: R{total}
            </Typography>
          </Box>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={3}
          >
            <Link href='/'>
              <Button variant='outlined' sx={{ background: "#fff" }}>
                Bank card
              </Button>
            </Link>
            <Link href={"/payment"}>
              <Button variant='contained'>EFT</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
