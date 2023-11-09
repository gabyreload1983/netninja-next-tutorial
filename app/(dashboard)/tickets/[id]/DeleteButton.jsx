"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoding] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoding(true);
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(error);
      setIsLoding(false);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
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
