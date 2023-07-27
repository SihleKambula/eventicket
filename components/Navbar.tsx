import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <AppBar position='sticky' color='transparent' elevation={2}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link href='/' style={{ textDecoration: "none" }}>
              <Typography
                variant='h6'
                color='primary'
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Eventicket
              </Typography>
            </Link>

            <Box>
              <Avatar
                alt='profile'
                src='https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
