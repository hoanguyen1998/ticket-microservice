import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketing98/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
