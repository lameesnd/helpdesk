import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../Loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav className="flex justify-between ">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets...</small>
          </p>
        </div>
        <button className="btn-primary">
          <Link className="text-white" href="/tickets/create">Add New Ticket</Link>
        </button>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
