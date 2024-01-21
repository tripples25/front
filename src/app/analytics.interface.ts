import {Event} from "./event.interface";

export interface Analytics {
  events: Event[];
  totalCount: number;
  totalHours: number;
}
