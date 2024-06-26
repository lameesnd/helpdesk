import Link from "next/link";
import React from "react";

async function getTickets() {
  //imitate delay to show loader
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 0 }, //refetch data after N seconds if refresh is within the next N seconds, else it will serve data from the cache. if set to 0, it will always fetch data
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)} ...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} Priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p>No Open tickets!</p>}
    </>
  );
}
