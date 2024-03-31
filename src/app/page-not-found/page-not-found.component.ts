import { Component, OnInit } from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [
    trigger('rotatedState', [
     
      transition('rotated => default', [animate('1200ms linear'), style({
    transform: 'rotate(360deg)'
  })]),
  ])
]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }
  state: string = 'default';

  rotate() { 
    setTimeout(() => {       this.state = (this.state === 'default' ? 'rotated' : 'default');
    }, 0)

  }
  ngOnInit(): void {
  }


}
