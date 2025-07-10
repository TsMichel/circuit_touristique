import React from "react";
import ReservationForm from "./ReservationForm";

export default function CircuitDetail({ circuit }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{circuit.name}</h2>
      <p>Prix : {circuit.price}€</p>
      <p>Description : {circuit.description}</p>
      <ReservationForm circuitId={circuit.id} />
    </div>
  );
}