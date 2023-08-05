"use client";
import createArrayFromNumber from "@/utils/createArrFromNum";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PriceCard(props: { ticket: DocumentData }) {
  //local storage
  const [quantityValue, setQuantityValue] = useState(0);

  //props
  const { name, data, show, funs } = props.ticket;

  //utils
  const quantity = createArrayFromNumber(data.quantity);

  //functions
  const handleSelectionChange = (event: SelectChangeEvent) => {
    setQuantityValue(parseInt(event.target.value as string));
  };

  const handleAddToCart = () => {
    toast(`${quantityValue} ${data.ticketType} tickets added to cart`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log({
      ticketType: data.ticketType,
      price: data.price,
      quantity: quantityValue,
    });

    setQuantityValue(0);
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          background: "#fff",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <Accordion
          disabled={quantity.length == 0 ? true : false}
          expanded={show}
          onChange={() => {
            //only expand selected card
            if (name == "Early bird") {
              funs.early(!show);
              funs.gen(false);
              funs.vipFun(false);
            }
            if (name == "General") {
              funs.early(false);
              funs.gen(!show);
              funs.vipFun(false);
            }
            if (name == "VIP") {
              funs.early(false);
              funs.gen(false);
              funs.vipFun(!show);
            }
          }}
          sx={{
            background: "#fff",
            borderRadius: "15px",
            borderColor: "#F26803",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <AccordionSummary>
            <Container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography>{name}</Typography>
                <Typography>{data.price}</Typography>
              </Box>
              <Box>
                {quantity.length == 0 ? (
                  <Typography>Unvailable</Typography>
                ) : (
                  <Typography>Available</Typography>
                )}
              </Box>
            </Container>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography>Quantity</Typography>
              </Box>
              <Box>
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
            </Container>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box display={quantityValue != 0 && show ? "block" : "none"}>
        <Typography variant='h6'>{quantityValue} selected</Typography>

        <Box sx={{ marginLeft: "20px" }}>
          <Typography color='text.secondary' variant='body2'>
            {quantityValue} x {name}
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            The price for {quantityValue} items is R{quantityValue * data.price}
          </Typography>
        </Box>

        <Button
          sx={{ marginLeft: "20px", marginBottom: "10px" }}
          variant='contained'
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Box>
    </>
  );
}
