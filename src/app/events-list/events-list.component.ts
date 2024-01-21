import { Component, OnInit } from '@angular/core';
import { EventCardService } from '../event-card.service';
import { EventCard } from '../event-card.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: EventCard[] = [];

  constructor(private eventService: EventCardService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

}
