import { Component } from '@angular/core';

@Component({
  selector: 'workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Dashboard';
  
  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/customers', icon: 'face', title: 'Customer'},
    { path: '/projects', icon: 'work', title: 'Projects'},
  ]
}
