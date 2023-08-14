"use client";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Stack,
  Badge,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { useCart } from "@/store/store";

export default function Navbar() {
  const { items } = useCart((state) => state);
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
              <Stack direction='row' spacing={1} alignItems='center'>
                <Link href={`/cart`}>
                  <IconButton color='primary' size='large' aria-label='cart'>
                    <Badge badgeContent={items.length} color='primary'>
                      <ShoppingCartOutlinedIcon fontSize='inherit' />
                    </Badge>
                  </IconButton>
                </Link>

                <Avatar
                  alt='profile'
                  src='https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
                />
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
