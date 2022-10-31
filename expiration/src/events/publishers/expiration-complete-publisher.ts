import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ticketing98/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
