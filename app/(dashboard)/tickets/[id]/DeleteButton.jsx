"use client";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoding] = useState(false);

  const handleClick = async () => {
    setIsLoding(true);
    console.log("Deliting id - ", id);
  };

  return (
    <button disabled={isLoading} onClick={handleClick} className="btn-primary">
      {isLoading && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
}
