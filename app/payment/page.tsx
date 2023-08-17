"use client";
import PaymentCard from "@/components/PaymentCard";
import { useCart } from "@/store/store";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Page() {
  const { items } = useCart((state) => state);

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
      </Container>
    </>
  );
}
