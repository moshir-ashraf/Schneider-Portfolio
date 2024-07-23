import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [AppRoutingModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
