import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  showSignUp: () => void;
}
export default function LoginForm(props: SimpleDialogProps) {
  const { onClose, open, showSignUp } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Container sx={{ paddingY: "20px", width: "350px" }}>
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
            <Box>
              <Button>Login</Button>
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
                New to Eventicket?{" "}
                <Typography
                  component={"span"}
                  color='primary'
                  onClick={showSignUp}
                  sx={{}}
                >
                  Register
                </Typography>
              </Typography>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}
