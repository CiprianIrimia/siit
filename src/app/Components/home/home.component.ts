import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  subtitle: string = '';
  redirectAboutUs: string = '';

  constructor() {}

  ngOnInit(): void {}
}
