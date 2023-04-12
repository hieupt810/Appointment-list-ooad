import { Appointment } from "./Appointment";

export interface User {
  userID: String;
  appointments: Appointment[];
}
