import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterendezvousComponent } from './createrendezvous.component';

describe('CreaterendezvousComponent', () => {
  let component: CreaterendezvousComponent;
  let fixture: ComponentFixture<CreaterendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
