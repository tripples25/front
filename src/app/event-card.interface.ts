import {Template} from "./template.interface";

export interface EventCard {
  template: Template;
  id: string;
  startTime: string;
  endTime: string;
}
