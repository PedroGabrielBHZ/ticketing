import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@pepe_tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
