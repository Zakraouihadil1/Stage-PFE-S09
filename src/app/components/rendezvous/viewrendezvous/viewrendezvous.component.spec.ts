import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrendezvousComponent } from './viewrendezvous.component';

describe('ViewrendezvousComponent', () => {
  let component: ViewrendezvousComponent;
  let fixture: ComponentFixture<ViewrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
