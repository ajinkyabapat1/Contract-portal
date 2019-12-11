import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
