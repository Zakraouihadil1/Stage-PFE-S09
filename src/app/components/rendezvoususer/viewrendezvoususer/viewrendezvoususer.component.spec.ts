import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrendezvoususerComponent } from './viewrendezvoususer.component';

describe('ViewrendezvoususerComponent', () => {
  let component: ViewrendezvoususerComponent;
  let fixture: ComponentFixture<ViewrendezvoususerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrendezvoususerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrendezvoususerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
