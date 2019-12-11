import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list-component',
  templateUrl: './sidenav-list-component.component.html',
  styleUrls: ['./sidenav-list-component.component.css']
})
export class SidenavListComponentComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    
  }
}
