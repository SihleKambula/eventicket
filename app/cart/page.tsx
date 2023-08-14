"use client";
import { CartCard } from "@/components";
import { Stack, Button, Container, Box } from "@mui/material";
import Link from "next/link";
import { useCart } from "../../store/store";
export default function Page() {
  const { items } = useCart((state) => state);

  return (
    <>
      <Container>
        {items.map((item: any, index: number) => {
          return <CartCard key={index} item={item} id={index} />;
        })}

        <Box sx={{ marginTop: "20px" }}>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={3}
          >
            <Link href='/'>
              <Button variant='outlined' sx={{ background: "#fff" }}>
                Continue Shopping
              </Button>
            </Link>

            <Button variant='contained'>Checkout</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
