import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any;

  constructor(private http: HttpClient) {
  }

  getPosts(){
    this.data = this.http.get('https://localhost:7259/api/Events');
  }
}


