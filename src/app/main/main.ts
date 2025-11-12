import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  http = inject(HttpClient);
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}
