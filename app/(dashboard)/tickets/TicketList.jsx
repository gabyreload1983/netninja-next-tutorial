import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getTickets() {
  const supebase = createServerComponentClient({ cookies });

  const { data, error } = await supebase.from("tickets").select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.prioority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.lentgh === 0 && (
        <p className="text-center">Ther are no open tickets!</p>
      )}
    </>
  );
}
