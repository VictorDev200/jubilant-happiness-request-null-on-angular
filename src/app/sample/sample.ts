import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sample',
  imports: [RouterLink],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {
  http = inject(HttpClient);
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}
