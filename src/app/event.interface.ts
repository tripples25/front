import {Time} from "./time.interface";

export interface Event {
  name: string,
  time: Time,
  count: number,
  totalCount: number
}
