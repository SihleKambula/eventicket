import {
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  showLogin: () => void;
}
export default function SignUpForm(props: SimpleDialogProps) {
  const { onClose, open, showLogin } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <Container sx={{ paddingY: "20px", width: "350px" }}>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='User name'
                variant='outlined'
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Email'
                variant='outlined'
              />
            </Box>

            <Box sx={{ marginY: "20px" }}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Password'
                variant='outlined'
              />
            </Box>
            <Box sx={{ marginY: "20px" }}>
              <TextField
                fullWidth
                id='outlined-basic'
                label='Confirm password'
                variant='outlined'
              />
            </Box>
            <Box>
              <Button>Sign up</Button>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>or</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant='contained' startIcon={<GoogleIcon />}>
                Google
              </Button>
              <Button variant='contained' startIcon={<AppleIcon />}>
                Apple
              </Button>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Typography variant='body1'>
                Already have an account?{" "}
                <Typography
                  component={"span"}
                  color='primary'
                  onClick={showLogin}
                >
                  Login
                </Typography>
              </Typography>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}
