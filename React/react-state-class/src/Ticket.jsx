import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
    return (
        <div>
            {ticket.map((num, idx) => {
                return <TicketNum num={num} key={idx} />;
            })}
        </div>
    );
}
