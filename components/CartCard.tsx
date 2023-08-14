"use client";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "@/store/store";
import { useEffect, useState } from "react";
import createArrayFromNumber from "@/utils/createArrFromNum";
export default function CartCard(props: { item: any; id: number }) {
  const ticket = props.item;
  const [quantityValue, setQuantityValue] = useState(ticket.quantity);
  const { removeItemFromCart, updateQuantity } = useCart((state) => state);

  //convert number into array
  const quantity = createArrayFromNumber(ticket.totalQuantity);
  //functions
  const handleSelectionChange = (event: SelectChangeEvent) => {
    setQuantityValue(parseInt(event.target.value as string));
  };
  useEffect(() => {
    updateQuantity(props.id, quantityValue);
  }, [quantityValue]);
  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          background: "#fff",
          paddingX: "20px",
          paddingY: "20px",
          borderRadius: "10px",
        }}
      >
        <Stack direction='row' justifyContent='space-between' spacing={0}>
          <Box>
            <Typography variant='h4' fontWeight='700' color='textSecondary'>
              {ticket.eventName}
            </Typography>
            <Box>
              <Typography>
                Date & Time:
                <Typography component='span'>
                  {ticket.date} @ {ticket.startTime}
                </Typography>
              </Typography>
              <Typography>
                Location:
                <Typography component='span'>{ticket.eventLocation}</Typography>
              </Typography>
              <Typography>
                Ticket Type:
                <Typography component='span'>{ticket.ticketType}</Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant='h4' fontWeight='700'>
              Quantity
            </Typography>

            <Box sx={{ textAlign: "center", marginTop: "15px" }}>
              <FormControl sx={{ minWidth: 70 }} size='small'>
                <Select
                  value={quantityValue.toString()}
                  onChange={handleSelectionChange}
                >
                  {quantity.map((num) => {
                    return (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Typography variant='h4' fontWeight='700'>
              Price
            </Typography>
            <Box sx={{ textAlign: "center", marginTop: "15px" }}>
              <Typography>R{quantityValue * ticket.price}</Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => removeItemFromCart(props.id)}
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
