import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponentComponent } from './sidenav-list-component.component';

describe('SidenavListComponentComponent', () => {
  let component: SidenavListComponentComponent;
  let fixture: ComponentFixture<SidenavListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
