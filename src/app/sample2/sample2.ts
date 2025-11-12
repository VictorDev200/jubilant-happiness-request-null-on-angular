import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sample2',
  imports: [RouterLink],
  templateUrl: './sample2.html',
  styleUrl: './sample2.css',
})
export class Sample2 {
  http = inject(HttpClient);
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}
