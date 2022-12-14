import { Subjects, Publisher, OrderCancelledEvent } from '@ticketing98/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
