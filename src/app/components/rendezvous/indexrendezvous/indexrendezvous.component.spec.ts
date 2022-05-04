import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexrendezvousComponent } from './indexrendezvous.component';

describe('IndexrendezvousComponent', () => {
  let component: IndexrendezvousComponent;
  let fixture: ComponentFixture<IndexrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
