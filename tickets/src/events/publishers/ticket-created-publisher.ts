import { Publisher, Subjects, TicketCreatedEvent } from '@ticketing98/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
