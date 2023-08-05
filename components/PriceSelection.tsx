"use client";
import { DocumentData } from "firebase/firestore";
import PriceCard from "./PriceCard";
import { useState } from "react";

export default function PriceSelection(event: { event: DocumentData }) {
  const { vip, general, earlyBird } = event.event;
  //manage expands
  const [selecteEarly, setSelecteEarly] = useState<boolean>(false);
  const [selecteGeneral, setSelecteGeneral] = useState<boolean>(false);
  const [selecteVIP, setSelecteVIP] = useState<boolean>(false);
  const eventTickets = [
    {
      name: "Early bird",
      data: earlyBird,
      show: selecteEarly,
      funs: {
        early: setSelecteEarly,
        gen: setSelecteGeneral,
        vipFun: setSelecteVIP,
      },
    },
    {
      name: "General",
      data: general,
      show: selecteGeneral,
      funs: {
        early: setSelecteEarly,
        gen: setSelecteGeneral,
        vipFun: setSelecteVIP,
      },
    },
    {
      name: "VIP",
      data: vip,
      show: selecteVIP,
      funs: {
        early: setSelecteEarly,
        gen: setSelecteGeneral,
        vipFun: setSelecteVIP,
      },
    },
  ];

  return (
    <>
      {eventTickets.map((ticket) => {
        return <PriceCard key={ticket.name} ticket={ticket} />;
      })}
    </>
  );
}
