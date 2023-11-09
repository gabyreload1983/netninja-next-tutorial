"use client";
import { useTransition } from "react";
import { deleteTicket } from "../actions";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => deleteTicket(id))}
      className="btn-primary"
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}
      {!isPending && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
}
