import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css'],
})
export class RacletteComponent implements OnInit {
  title = 'Raclette Party';
  isVital: boolean = true;
  displayGuestList: boolean = true;

  songList: string[] = ['Le temps est bon', 'Ne me quitte pas', 'Alejandro'];
  constructor() {}

  ngOnInit(): void {}

  toggleGuestList() {
    this.displayGuestList = !this.displayGuestList;
  }
}
