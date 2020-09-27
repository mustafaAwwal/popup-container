import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.scss'],
})
export class PopupContainerComponent implements OnInit {
  open = false;
  constructor() {}

  ngOnInit(): void {}
  setOpen() {
    this.open = true;
  }
  setClose() {
    this.open = false;
  }
  toggle() {
    this.open = !this.open;
  }
}
