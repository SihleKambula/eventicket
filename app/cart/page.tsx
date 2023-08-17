"use client";
import { CartCard } from "@/components";
import { Stack, Button, Container, Box } from "@mui/material";
import Link from "next/link";
import { useCart } from "../../store/store";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";
import SignUpForm from "@/components/SignUpForm";
export default function Page() {
  const { items } = useCart((state) => state);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
    setSignOpen(false);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignUpOpen = () => {
    setSignOpen(true);
    setLoginOpen(false);
  };

  const handleSignUpClose = () => {
    setSignOpen(false);
  };

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

            <Link href={"/payment"}>
              <Button variant='contained'>Checkout</Button>
            </Link>
          </Stack>
        </Box>
      </Container>
      <LoginForm
        open={loginOpen}
        onClose={handleLoginClose}
        showSignUp={handleSignUpOpen}
      />
      <SignUpForm
        open={signUpOpen}
        onClose={handleSignUpClose}
        showLogin={handleLoginOpen}
      />
    </>
  );
}
